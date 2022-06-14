import { useLocation, Navigate, Outlet } from 'react-router-dom';


export default function RequireAuthorization() {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
}
