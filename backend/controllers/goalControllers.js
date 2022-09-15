import asyncHandler from 'express-async-handler';

// @desc Get Goals
// @route GET '/api/goals'
// @access Public
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Getting Goals...' });
});

// @desc Create Goal
// @route POST '/api/goals'
// @access Private
export const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) throw new Error('Please enter some text.');

  res.status(201).json({ message: 'Creating Goal...' });
});

// @desc Update Goal
// @route PUT '/api/goals/:id'
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updating Goal: ${req.params.id}` });
});

// @desc Delete Goal
// @route DELETE '/api/goals/:id'
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleting Goal: ${req.params.id}` });
});
