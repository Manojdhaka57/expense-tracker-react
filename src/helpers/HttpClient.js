import axios from 'axios';
import { LOCAL_STORAGE_OBJECT, clearLocalStorage } from '../utils/authUtils';

const HttpClient = (function () {
  let axiosInstance = null;
  class HttpClient {
    constructor() {
      axiosInstance = axios.create({
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        withCredentials: false,
      });

      axiosInstance.interceptors.request.use(
        (config) => {
          const token =
            localStorage.getItem(LOCAL_STORAGE_OBJECT.ACCESS_TOKEN) || '';
          config.baseURL = this.getApiBaseURL(config);
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        },
        {
          synchronous: true,
        }
      );

      axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error?.response?.status === 401) {
            clearLocalStorage();
            return Promise.reject(error);
          }
          return Promise.reject(error);
        }
      );
    }
    async get(url, params = {}, headers = {}, options = {}) {
      const response = await axiosInstance.get(url, {
        params,
        headers,
        ...options,
      });
      return response;
    }

    async post(url, payload = {}, headers = {}, params = {}, options = {}) {
      const response = await axiosInstance.post(url, payload, {
        params,
        headers,
        ...options,
      });
      return response;
    }

    async put(url, payload = {}, headers = {}) {
      const response = await axiosInstance.put(url, payload, {
        headers,
      });
      return response;
    }

    async patch(url, payload = {}, headers = {}) {
      const response = await axiosInstance.put(url, payload, {
        headers,
      });
      return response;
    }

    async delete(url, payload = {}, headers = {}) {
      const response = await axiosInstance.delete(
        url,
        { data: payload },
        { headers }
      );
      return response;
    }

    getApiBaseURL = (config) => {
      return process.env.REACT_APP_API_BASE_URL;
    };
  }
  return new HttpClient();
})();
export default HttpClient;
