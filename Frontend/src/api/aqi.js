import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchAQI = async (params) => {
  try {
    const response = await api.get('/aqi', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
