import express from 'express';
const router = express.Router();

import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
} from '../controllers/goalControllers.js';

router.route('/').get(getGoals).post(createGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

export default router;
