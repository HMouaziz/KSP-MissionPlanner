import apiService from "./apiService";

const missionService = {
  getAllMissions: async () => {
    return await apiService.get("/missions");
  },
  getMission: async (id) => {
    return await apiService.get(`/missions/${id}`);
  },
  postMission: async (missionData) => {
    return await apiService.post(`/missions/`, missionData);
  },
  putMission: async (missionData) => {
    return await apiService.put(`/missions/${missionData.id}`, missionData);
  },
  deleteMission: async (id) => {
    return await apiService.delete(`/missions/${id}`);
  },
  getObjectives: async (id) => {
    return await apiService.get(`/missions/${id}/objectives`)
  },
  getStages: async (id) => {
    return await apiService.get(`/missions/${id}/stages`)
  }
};

export default missionService;
