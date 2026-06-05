import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'kings_enterprises_jwt_secret_key_2026_@_gold_navy';

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

export const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'ADMIN') {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
  next();
};
