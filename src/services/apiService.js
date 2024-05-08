import axios from 'axios';

const requestClient = axios.create({
  baseURL: 'http://localhost:5050/api/v1',
  // Add auth header here !!!!
});

const apiService = {
  async get(url) {
    try {
      const response = await requestClient.get(url);
      return response.data.data;
    } catch (error) {
      console.error('API call failed. Error: ', error);
      throw error;
    }
  },
  async post(url, data) {
    try {
      const response = await requestClient.post(url, data);
      return response.data.data;
    } catch (error) {
      console.error('API call failed. Error: ', error);
      throw error;
    }
  },
  async put(url, data) {
    try {
      const response = await requestClient.put(url, data);
      return response.data.data;
    } catch (error) {
      console.error('API call failed. Error: ', error);
      throw error;
    }
  },
  async delete(url) {
    try {
      const response = await requestClient.delete(url);
      return response.data.data;
    } catch (error) {
      console.error('API call failed. Error: ', error);
      throw error;
    }
  },
};

export default apiService;
