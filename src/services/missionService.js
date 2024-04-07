import apiService from './apiService';

const missionService = {
  async getAllMissions() {
    return await apiService.get('/missions');
  },
  async getMission(id) {
    return await apiService.get(`/missions/${id}`);
  },
  async postMission(id) {
    return await apiService.post(`/missions/${id}`);
  },
  async putMission(id) {
    return await apiService.put(`/missions/${id}`);
  },
  async deleteMission(id) {
    return await apiService.delete(`/missions/${id}`);
  },
};

export default missionService;
