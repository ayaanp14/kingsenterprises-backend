import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import prisma from '../db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'kings_enterprises_jwt_secret_key_2026_@_gold_navy';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Generate JWT Helper
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Email & Password Registration
export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields (email, password, name) are required" });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingUser) {
      return res.status(400).json({ message: "A user with this email already exists" });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);

    // Create user
    const isAdminEmail = ['kingsenterprises1414@gmail.com', 'ayaanpathan14@gmail.com'].includes(email.toLowerCase());
    const role = isAdminEmail ? 'ADMIN' : 'USER';

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash,
        name,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`,
        role
      }
    });

    console.log(`User saved to users table: ${user.email} (${user.id})`);

    // Generate JWT
    const token = generateToken(user);

    return res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ message: "Server error during registration", error: error.message });
  }
};

// Email & Password Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // If registered via Google only and has no password
    if (!user.passwordHash) {
      return res.status(400).json({ 
        message: "This account was created via Google Sign-In. Please log in using Google." 
      });
    }

    // Verify password
    const isMatch = await bcryptjs.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = generateToken(user);

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error during login", error: error.message });
  }
};

// Google OAuth Verification and Login/Register
export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "Google ID token is required" });
    }

    let payload;
    
    // For development testing, if user sends a mock token or when client ID is not configured:
    if (GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com" || idToken.startsWith("mock_")) {
      console.warn("Using mock Google auth flow for development. Token format:", idToken);
      // Construct a mock payload from mock token or generic data
      const mockEmail = idToken.includes("@") ? idToken.replace("mock_", "") : "google.user@example.com";
      payload = {
        email: mockEmail,
        name: mockEmail.split("@")[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        sub: `mock_google_sub_${mockEmail}`,
        picture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(mockEmail)}`
      };
    } else {
      // Real Google verification
      try {
        const ticket = await client.verifyIdToken({
          idToken,
          audience: GOOGLE_CLIENT_ID,
        });
        payload = ticket.getPayload();
      } catch (verifyError) {
        console.error("Google token verification failed:", verifyError);
        return res.status(401).json({ message: "Invalid Google token", error: verifyError.message });
      }
    }

    if (!payload || !payload.email) {
      return res.status(400).json({ message: "Could not retrieve user info from Google token" });
    }

    const { email, name, sub: googleId, picture } = payload;

    // Check if user already exists by googleId
    let user = await prisma.user.findUnique({
      where: { googleId }
    });

    // If not found by googleId, check by email
    if (!user) {
      user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() }
      });

      if (user) {
        // Link google account to existing email-registered account
        user = await prisma.user.update({
          where: { id: user.id },
          data: { googleId, avatar: picture || user.avatar }
        });
      } else {
        // Create new user for google auth
        const isAdminEmail = ['kingsenterprises1414@gmail.com', 'ayaanpathan14@gmail.com'].includes(email.toLowerCase());
        const role = isAdminEmail ? 'ADMIN' : 'USER';

        user = await prisma.user.create({
          data: {
            email: email.toLowerCase(),
            name: name || email.split('@')[0],
            googleId,
            avatar: picture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || email)}`,
            role
          }
        });

        console.log(`Google user saved to users table: ${user.email} (${user.id})`);
      }
    }

    // Generate token
    const token = generateToken(user);

    return res.json({
      message: "Google sign-in successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Google Login Error:", error);
    return res.status(500).json({ message: "Server error during Google login", error: error.message });
  }
};

// Get profile details of logged in user
export const getProfile = async (req, res) => {
  try {
    // req.user is populated by authMiddleware
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Get Profile Error:", error);
    return res.status(500).json({ message: "Server error fetching profile", error: error.message });
  }
};
