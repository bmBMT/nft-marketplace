import { LocalStorage } from "@/services";
import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL + '/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${LocalStorage.get('token')}`
  return config;
})

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
        LocalStorage.set('token', response.data.accessToken)
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axios(originalRequest);
      } catch (e) {
      }
    }
    throw error;
  }
);

export default $api;