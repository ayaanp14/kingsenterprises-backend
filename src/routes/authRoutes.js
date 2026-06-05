import express from 'express';
import { register, login, googleLogin, getProfile } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();

// Public auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);

// Protected routes
router.get('/profile', authMiddleware, getProfile);

export default router;
