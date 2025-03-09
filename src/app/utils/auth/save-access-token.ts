import axios from 'axios';
import Cookies from 'js-cookie'

export const Authorization = async (token: string) => {
    localStorage.setItem('job_portal_token', token);
    Cookies.set('job_portal_token', token, {
        expires: 7,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};