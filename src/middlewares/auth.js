import jwt from 'jsonwebtoken';
import prisma from '../db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'kings_enterprises_jwt_secret_key_2026_@_gold_navy';

// Admin emails that always have access regardless of stored role
const ADMIN_EMAILS = ['kingsenterprises1414@gmail.com', 'ayaanpathan14@gmail.com'];

export const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided, authorization denied" });
  }

  // Format should be "Bearer <token>"
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ message: "Token format is invalid, must be Bearer <token>" });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user payload (id, email, role) to request
    next();
  } catch (error) {
    console.error("JWT Auth Middleware Error:", error.message);
    return res.status(401).json({ message: "Token is not valid or has expired" });
  }
};

export const adminMiddleware = async (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }

  // Fast path: email is in the hardcoded whitelist — no DB query needed
  // JWT already contains the email from login time
  if (req.user.email && ADMIN_EMAILS.includes(req.user.email.toLowerCase())) {
    req.user.role = 'ADMIN';
    return next();
  }

  // Slow path: check DB role for non-whitelisted users (role may have been granted manually)
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: true }
    });

    if (!user || user.role !== 'ADMIN') {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    req.user.role = 'ADMIN';
    next();
  } catch (error) {
    console.error("Admin Middleware DB Error:", error.message);
    return res.status(500).json({ message: "Server error during admin check" });
  }
};
