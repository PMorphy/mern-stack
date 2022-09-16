import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';

// @desc Register User
// @route POST '/api/users'
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validate
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please provide all fields.');
  }

  // Check if User already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  }

  // Encrypt Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  // Return Created User
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id) // Give a jwt
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data.');
  }
});

// @desc Authenticate User
// @route POST '/api/users/login'
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Get User Info and Authenticate
  const user = await User.findOne({ email });
  const isAuthenticated = await bcrypt.compare(password, user.password);

  // Return Authenticated User with a jwt
  if (user && isAuthenticated) {
    res.json({
      _id: user.id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id) // Give a jwt
    });
  } else {
    res.status(400);
    throw new Error('Invalid Credentials.');
  }
});

// @desc Get User Info
// @route POST '/api/users/me'
// @access Private
export const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};
