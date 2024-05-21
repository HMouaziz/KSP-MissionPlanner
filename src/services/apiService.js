import axios from 'axios';
import logError from "@/utils/logError.js";

const requestClient = axios.create({
  baseURL: 'http://localhost:5050/api/v1',
  withCredentials: true
});

const apiService = {
  async get(url) {
    try {
      const response = await requestClient.get(url);
      return response.data.data;
    } catch (error) {
      logError(error);
      throw error;
    }
  },
  async post(url, data= {}, config = {}) {
    try {
      const response = await requestClient.post(url, data, config);
      return response.data.data;
    } catch (error) {
      logError(error);
      throw error;
    }
  },
  async put(url, data, config= {}) {
    try {
      const response = await requestClient.put(url, data, config);
      return response.data.data;
    } catch (error) {
      logError(error);
      throw error;
    }
  },
  async delete(url) {
    try {
      const response = await requestClient.delete(url);
      return response.data.data;
    } catch (error) {
      logError(error);
      throw error;
    }
  },
};

export default apiService;
