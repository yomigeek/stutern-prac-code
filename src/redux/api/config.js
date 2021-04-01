import axios from 'axios';

export const getToken = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return JSON.parse(localStorage.getItem('accessToken'));
  }
  return null;
};

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://rest-api-dummy.herokuapp.com/api'
})

instance.interceptors.request.use(
  async (config) => {
    const token = getToken();

    if (token) {
      config.headers['x-access-token'] = ``;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;