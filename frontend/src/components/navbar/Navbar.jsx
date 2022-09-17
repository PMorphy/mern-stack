import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  let user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant='h2' align='center'>
          <Link to='/'>Goals</Link>
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <ul className={classes.menu}>
          <li>
            <Typography variant='h5'>
              <Link className={classes.menuLink} to='/login'>
                Login
                <FaSignInAlt />
              </Link>
            </Typography>
          </li>
          <li>
            <Typography variant='h5'>
              <Link to='/register'>
                Register <FaUser />
              </Link>
            </Typography>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
