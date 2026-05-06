import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../features/authSlice';

const ProtectedRoute = ({ children }) => {
  const { token: reduxToken } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Check for token in URL (Google Auth redirect case)
  const queryParams = new URLSearchParams(location.search);
  const urlToken = queryParams.get('token');

  useEffect(() => {
    if (urlToken && !reduxToken) {
      dispatch(setToken(urlToken));
    }
  }, [urlToken, reduxToken, dispatch]);
  
  // A user is authenticated if they have a token in Redux OR if there's one in the URL
  const isAuthenticated = !!reduxToken || !!urlToken;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
