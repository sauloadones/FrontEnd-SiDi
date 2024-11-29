import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.148.104.158:3000',
});

// Attach token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
