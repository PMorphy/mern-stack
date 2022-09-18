import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';
const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinnerWrapper}>
      <CircularProgress className={classes.spinner} />
    </div>
  );
};

export default Spinner;
