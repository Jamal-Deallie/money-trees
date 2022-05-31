import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material/';
import { Navbar, MainButton } from './styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

export default function Navigation() {
  const token = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    //remove token from localStorage
    localStorage.removeItem('token');
    //navigate to homepage
    navigate('/');
    //remove user from state
    dispatch(logout());
  };

  return (
    <>
      <Navbar position='static' color='warning' sx={{ height: '7rem' }}>
        <Link to='/'>
          <Typography
            variant='h2'
            sx={{
              fontFamily: 'balboa, sans-serif',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'primary.main',
            }}>
            Money Trees
          </Typography>
        </Link>

        {token ? (
          <MainButton onClick={signOut}>SIGN OUT</MainButton>
        ) : (
          <Link to='/signin'>
            <MainButton>SIGN IN</MainButton>
          </Link>
        )}
      </Navbar>
    </>
  );
}
