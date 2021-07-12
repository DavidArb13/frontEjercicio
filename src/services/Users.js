import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1'

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/login`, { email, password });
  return data;
};

export const register = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/users`, { email, password });
  return data;
};
