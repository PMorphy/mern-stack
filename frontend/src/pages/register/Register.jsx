import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../features/auth/authSlice';
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
import Spinner from '../../components/spinner/Spinner';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      const userData = {
        name: `${firstName} ${lastName}`,
        email,
        password
      };

      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user || isSuccess) navigate('/');

    dispatch(reset());
  }, [user, user?.token, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spinner />;

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
                  required
                />
                <TextField
                  name='lastName'
                  label='Last Name'
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>

              <TextField
                name='email'
                label='Email Address'
                onChange={handleChange}
                type='email'
                value={formData.email}
                required
                fullWidth
              />
              <TextField
                name='password'
                label='Password'
                onChange={handleChange}
                type='password'
                value={formData.password}
                required
                fullWidth
              />
              <TextField
                name='confirmPassword'
                label='Confirm Password'
                onChange={handleChange}
                type='password'
                value={formData.confirmPassword}
                required
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
