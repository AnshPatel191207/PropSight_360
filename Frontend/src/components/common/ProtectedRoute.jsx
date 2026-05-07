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

  // CRITICAL: If there's a token in the URL, save it to localStorage IMMEDIATELY 
  // before rendering children. This avoids race conditions where child components 
  // (like NeighborhoodIntelligence) try to fetch data before the useEffect 
  // has a chance to dispatch and save the token.
  if (urlToken && localStorage.getItem('token') !== urlToken) {
    localStorage.setItem('token', urlToken);
  }

  useEffect(() => {
    if (urlToken && reduxToken !== urlToken) {
      dispatch(setToken(urlToken));
    }
  }, [urlToken, reduxToken, dispatch]);
  
  // A user is authenticated if they have a token in Redux OR if there's one in the URL
  const isAuthenticated = !!reduxToken || !!urlToken || !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
