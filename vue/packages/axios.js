import axios from 'axios';
import Vue from 'vue';

var axiosInstance = axios.create({
    baseURL: window.basePath || '/'
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default function (Vue) {

    Vue.axios = axiosInstance;

    Object.defineProperties(Vue.prototype, {
        $http: {
            get: () => {
                return Vue.axios
            }
        }
    })

}