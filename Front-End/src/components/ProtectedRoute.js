import jwtDecode from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/loginadmin" />;
  }

  try {
    const decoded = jwtDecode(token);
    if (role && decoded.role !== role) {
      return <Navigate to="/" />;
    }
  } catch (error) {
    return <Navigate to="/loginadmin" />;
  }

  return children;
};

export default ProtectedRoute;