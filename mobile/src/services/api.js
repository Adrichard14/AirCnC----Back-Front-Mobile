import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.100.247.66:3333',
});

export default api;