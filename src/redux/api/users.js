import api from './config';

// post sample
export const loginApi = (data) => {
    let request = api.post('/login', data)
    return request;
};
