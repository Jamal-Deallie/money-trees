import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material/';
import { Navbar, MainButton, Logo } from './styles';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';

export default function Navigation() {
  const token = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    //remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //navigate to homepage
    navigate('/');
    //remove user from state
    dispatch(logOut());
  };

  return (
    <>
      <Navbar>
        <Link to='/'>
          <Logo>Money Trees</Logo>
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
