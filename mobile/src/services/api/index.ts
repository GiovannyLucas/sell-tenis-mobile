import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.57.42.210:4000',
});

export default api;
