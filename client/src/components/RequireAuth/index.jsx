import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

export default function RequireAuthorization() {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
}
