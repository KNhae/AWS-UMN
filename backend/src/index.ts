import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import eventRoutes from './routes/eventRoutes';
import memberRoutes from './routes/memberRoutes';
import authRoutes from './routes/authRoutes';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (_req, res) => {
  res.json({
    message: 'AWS Club API Server',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      events: '/api/events',
      members: '/api/members',
      auth: '/api/auth'
    },
    documentation: 'See README.md for full API documentation'
  });
});

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'AWS Club API is running' });
});

// API Routes
app.use('/api/events', eventRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
