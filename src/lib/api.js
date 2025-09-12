import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.amigooo.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login/', credentials);
    return response.data; // { refresh, access, token_expiry, user_id, require_password_change }
  } catch (error) {
    throw error.response?.data || { error: 'Une erreur est survenue' };
  }
};