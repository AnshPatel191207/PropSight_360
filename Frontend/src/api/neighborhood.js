import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchNeighborhoodIntelligence = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/neighborhood/intelligence`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching neighborhood intelligence:', error);
    throw error;
  }
};
