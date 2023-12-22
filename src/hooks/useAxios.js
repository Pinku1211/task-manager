import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://task-manager-server-red.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;