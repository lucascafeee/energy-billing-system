import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ajuste a URL base conforme necessário
});

export default api;
