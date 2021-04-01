import api from './config';

//get sample
export const getAllData = async () => {
  const request = await api.get('/users');
  return request;
};

// // post sample

// export const addUsers = (data) => {
//     let request = axios.post('/users', data)
//     return request
// };
