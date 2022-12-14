import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'colors';

// Database Connection
import connectDB from './config/db.js';

// Route Imports
import goalRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Middleware
import { errorHandler } from './middleware/errorMiddleware.js';

// Call dotenv for env access
dotenv.config();

// Connect to DB
connectDB();

// the app Object
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Before Route Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

// After Route Middleware
app.use(errorHandler);

// Listening on Port
app.listen(PORT, () => {
  console.log(`Listening on post: ${PORT}`.cyan.bold);
});
