import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const generateReport = async (topic) => {
  const response = await API.post('/api/generate-report', {
    topic,
  });

  return response.data;
};
