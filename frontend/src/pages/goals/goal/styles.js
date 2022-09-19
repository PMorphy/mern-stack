import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: '0.5rem',
    lineHeight: '20px',
    color: 'white',
    backgroundColor: '#ff6dab',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'red'
    }
  }
}));
