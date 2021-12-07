import axios from 'axios';

import { getToken, setToken } from '../utils/jwt';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

axiosInstance.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response && response.data,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            const tokens = getToken();
            if (!tokens) {
                window.location.href = '/auth/login';
                return Promise.reject(error);
            }
            try {
                originalRequest._retry = true;
                const newTokens = await axiosInstance.post('/accounts/refreshToken', {
                    refreshToken: tokens.refreshToken
                });
                console.log(newTokens);
                setToken(newTokens);
                originalRequest.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
                console.log(originalRequest);
                return axiosInstance(originalRequest);
            } catch (error) {
                setToken(null);
                window.location.href = '/auth/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
