import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow connections from any origin for ease of development (e.g., local Vite server on 5173)
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);

// Base Route
app.get('/api', (req, res) => {
  res.json({ message: "Welcome to the Kings Enterprises Electronics E-Commerce API!" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Server Error:", err);
  res.status(500).json({ 
    message: "Something went wrong on the server!", 
    error: process.env.NODE_ENV === 'production' ? null : err.message 
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running in development mode on port ${PORT}`);
});
