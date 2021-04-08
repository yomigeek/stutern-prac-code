import api from './config';

//get sample
export const getAllStories = async () => {
  const request = await api.get('/getStories');
  return request;
};

// // post sample

// export const addUsers = (data) => {
//     let request = axios.post('/users', data)
//     return request
// };
