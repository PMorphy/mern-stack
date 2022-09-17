import React, { useState, useEffect } from 'react';
import {
  Typography,
  Container,
  Paper,
  Avatar,
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Register = () => {
  const classes = useStyles();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState(initialState);
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5' style={{ color: 'rgba(60,213,155, 1)' }}>
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <div className={classes.inputs}>
              <div className={classes.nameInputs}>
                <TextField
                  name='firstName'
                  label='First Name'
                  onChange={handleChange}
                  value={formData.firstName}
                  autoFocus
                />
                <TextField
                  name='lastName'
                  label='Last Name'
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>

              <TextField
                name='email'
                label='Email Address'
                onChange={handleChange}
                type='email'
                value={formData.email}
                fullWidth
              />
              <TextField
                name='password'
                label='Password'
                onChange={handleChange}
                type='password'
                value={formData.password}
                fullWidth
              />
              <TextField
                name='confirm-password'
                label='Confirm Password'
                onChange={handleChange}
                type='password'
                value={formData.confirmPassword}
                fullWidth
              />
            </div>

            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              Register
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
