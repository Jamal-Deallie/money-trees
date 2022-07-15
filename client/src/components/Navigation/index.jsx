import { Link, useNavigate } from 'react-router-dom';
import { Navbar, MainButton, Logo } from './styles';
import { useDispatch } from 'react-redux';
import { logOut, selectToken } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const signOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
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
  );
}
