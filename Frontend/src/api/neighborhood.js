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

export const fetchNeighborhoodIntelligence = async (params) => {
  try {
    const response = await api.get('/neighborhood/intelligence', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching neighborhood intelligence:', error);
    throw error;
  }
};
