import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Use axios instance with credentials for cookies
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const register = async (userData) => {
  const response = await api.post('/register', userData);
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/logout');
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await api.post('/forgotpassword', { email });
  return response.data;
};

export const resetPassword = async (token, password) => {
  const response = await api.put(`/resetpassword/${token}`, { password });
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/profile');
  return response.data;
};

export const mobileLogin = async (phone, otp) => {
  const response = await api.post('/mobile-login', { phone, otp });
  return response.data;
};
