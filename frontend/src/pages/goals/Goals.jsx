import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { getGoals, reset } from '../../features/goals/goalSlice';
import Goal from './goal/Goal';

import useStyles from './styles';

const Goals = () => {
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) console.log(message);
    dispatch(getGoals());

    return () => dispatch(reset());
  }, [isError, message, dispatch]);

  if (isLoading) return <CircularProgress />;
  return (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {goals.length > 0 &&
        goals.map((goal) => (
          <Grid key={goal._id} item xs={12} sm={12} md={12}>
            <Goal goal={goal} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Goals;
