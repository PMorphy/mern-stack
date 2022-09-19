import React, { useState } from 'react';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
import { createGoal } from '../../features/goals/goalSlice';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const GoalForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <div className={classes.inputs}>
            <TextField
              name='text'
              label='Goal'
              onChange={handleChange}
              value={text}
              type='text'
              fullWidth
              autoFocus
            />
          </div>

          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}
          >
            Add Goal
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default GoalForm;
