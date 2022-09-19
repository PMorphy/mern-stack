import React, { useState, useRef } from 'react';
import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';
import { createGoal } from '../../features/goals/goalSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const GoalForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const inputRef = useRef();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      toast.error('Please Enter a Description of Your Goal');
      return;
    }

    dispatch(createGoal({ text }));
    setText('');
    inputRef.current.focus();
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography className={classes.header} variant='h4'>
        Enter a Goal
      </Typography>
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
              ref={inputRef}
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
