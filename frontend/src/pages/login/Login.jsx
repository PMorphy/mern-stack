import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
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
  email: '',
  password: ''
};

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    dispatch(login(userData));
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
          Log In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <div className={classes.inputs}>
              <TextField
                name='email'
                label='Email Address'
                onChange={handleChange}
                value={email}
                type='email'
                fullWidth
                autoFocus
              />
              <TextField
                name='password'
                label='Password'
                onChange={handleChange}
                value={password}
                type='password'
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
              Log In
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
