// src/api/axiosConfig.js
import axios from 'axios';

const url = process.env.REACT_APP_API_URL_PROD;
const axiosInstance = axios.create({
 baseURL: `${url}`,
 withCredentials: true, // ако използваш cookies
});

axiosInstance.interceptors.response.use(
 (response) => response,
 (error) => {
  if (error.response?.status === 401) {
   localStorage.clear();
   window.location.href = '/';
  }
  return Promise.reject(error);
 }
);

export default axiosInstance;
