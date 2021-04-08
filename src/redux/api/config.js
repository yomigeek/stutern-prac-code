import axios from 'axios';
import { getToken } from './auth';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://rest-api-dummy.herokuapp.com/api'
})

instance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    console.log(config, 'config')
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;