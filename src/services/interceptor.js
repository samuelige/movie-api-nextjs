import axios from 'axios';
import { baseURL } from './helper';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error?.response?.status === 401) {
    //   const { pathname } = window.location;
    //   window.location.href = `/401?redirect=${pathname}`;
    // }
    return Promise.reject(error);
  }
);
export default api;
