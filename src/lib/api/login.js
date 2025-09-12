import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.198.103.196:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login/', credentials);
    console.log("✅ Réponse API login:", response.data); // 👉 affichage réponse
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Erreur API login:", error.response?.data || error.message);
      throw error.response?.data || { error: 'Une erreur est survenue' };
    } else {
      console.error("❌ Erreur inattendue:", error);
      throw { error: 'Erreur inconnue' };
    }
  }
};
