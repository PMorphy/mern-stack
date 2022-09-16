import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  try {
    // Get header token
    if (authorization && authorization.startsWith('Bearer')) {
      token = authorization.split(' ')[1];
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Assign req.user with what's on MongoDB
    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error('Not Authorized.');
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized.  No token given.');
  }
});
