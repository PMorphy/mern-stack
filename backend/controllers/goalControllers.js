import asyncHandler from 'express-async-handler';
import { Goal } from '../models/goalModel.js';
import { User } from '../models/userModel.js';
// @desc Get Goals
// @route GET '/api/goals'
// @access Public
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc Create Goal
// @route POST '/api/goals'
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) throw new Error('Please enter some text.');

  const goal = await Goal.create({ text, user: req.user.id });

  res.status(201).json(goal);
});

// @desc Update Goal
// @route PUT '/api/goals/:id'
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);
  const user = await User.findById(req.user.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found.');
  }

  if (!user) {
    res.status(400);
    throw new Error('User not found.');
  }

  if (user.id !== goal.user.toString()) {
    res.status(400);
    throw new Error('User unauthorized.');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goal
// @route DELETE '/api/goals/:id'
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);
  const user = await User.findById(req.user.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found.');
  }

  if (!user) {
    res.status(400);
    throw new Error('User not found.');
  }

  if (user.id !== goal.user.toString()) {
    res.status(400);
    throw new Error('User unauthorized.');
  }

  await goal.remove();
  res.status(200).json({ id });
});
