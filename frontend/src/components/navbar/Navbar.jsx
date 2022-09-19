import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant='h2' align='center'>
          {user && <Link to='/'>GoalSetter</Link>}
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <ul className={classes.menu}>
          {user ? (
            <li>
              <button className={classes.button} onClick={handleLogout}>
                Logout
                <FaSignOutAlt />
              </button>
            </li>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
