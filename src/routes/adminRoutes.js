import express from 'express';
import { getUsersAndCarts } from '../controllers/adminController.js';
import { authMiddleware, adminMiddleware } from '../middlewares/auth.js';

const router = express.Router();

router.get('/users', authMiddleware, adminMiddleware, getUsersAndCarts);

export default router;
