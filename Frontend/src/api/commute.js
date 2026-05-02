import axios from 'axios';

const API_URL = 'http://localhost:5000/api/commute';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const generateCommuteAudit = async (auditData) => {
  const response = await api.post('/audit', auditData);
  return response.data;
};
