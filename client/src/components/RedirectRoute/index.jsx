import { useLocation, Navigate, Outlet } from 'react-router-dom';


export default function RedirectRoute() {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();

  return token ? (
    <Navigate to='/dashboard' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
