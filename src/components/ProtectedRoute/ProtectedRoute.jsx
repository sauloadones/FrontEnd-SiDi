import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('authToken'); // Check if token exists

  if (!token) {
    // Redirect to login if no token
    return <Navigate to="/login" replace />;
  }

  // If there's a token, render the children (protected components)
  return <Outlet />;
};

export default ProtectedRoute;