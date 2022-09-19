import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../../features/goals/goalSlice';

import useStyles from './styles';

const Goal = ({ goal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <div>
        <Typography variant='h5'>{goal.text}</Typography>
        <Typography variant='body2'>
          {new Date(goal.createdAt).toLocaleString('en-US')}
        </Typography>
      </div>
      <button
        className={classes.button}
        onClick={() => dispatch(deleteGoal(goal._id))}
      >
        X
      </button>
    </Card>
  );
};

export default Goal;
