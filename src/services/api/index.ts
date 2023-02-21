import axios, { AxiosHeaders } from 'axios';
import { AuthResponse } from '../AuthService';

const API_URL = 'http://localhost:5095/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((config) => {
  (config.headers as AxiosHeaders).set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  console.log(config.headers);
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>('/Values/registration');
        localStorage.setItem('token', response.data.accessToken!);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('401');
      }
    }
    throw error;
  }
);

export default $api;
