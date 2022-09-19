import React, { useEffect } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Goals from '.././goals/Goals';
import GoalForm from '.././goalForm/GoalForm';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}
          className={classes.mainContainer}
        >
          <Grid item xs={12} md={6}>
            <Goals />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <GoalForm />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
