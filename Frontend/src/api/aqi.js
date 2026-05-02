import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchAQI = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/aqi`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
