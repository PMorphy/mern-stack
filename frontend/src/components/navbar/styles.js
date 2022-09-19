import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px'
  },
  heading: {
    color: 'rgba(10,203,125, 1)',
    textDecoration: 'none'
  },
  image: {
    marginLeft: '15px',
    maxHeight: '55px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center'
  },
  menu: {
    display: 'flex',
    gap: '40px'
  },
  menuLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px'
  },
  button: {
    padding: '0.5rem',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'space-between',
    color: 'rgba(10,203,125, 1)',
    fontWeight: '500',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    fontFamily: 'Roboto'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: '48px'
    },
    appBar: {
      padding: '10px 30px'
    }
  },

  [theme.breakpoints.down('xs')]: {
    heading: {
      fontSize: '24px'
    },
    appBar: {
      padding: '10px 20px'
    }
  }
}));
