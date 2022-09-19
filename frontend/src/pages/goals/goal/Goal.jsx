import React from 'react';
import { Card, Typography } from '@material-ui/core';

import useStyles from './styles';

const Goal = ({ goal }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant='h5'>{goal.text}</Typography>
    </Card>
  );
};

export default Goal;
