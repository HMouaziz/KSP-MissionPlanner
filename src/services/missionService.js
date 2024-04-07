import apiService from "./apiService";

const missionService = {
  getAllMissions: async () => {
    return await apiService.get("/missions");
  },
  getMission: async (id) => {
    return await apiService.get(`/missions/${id}`);
  },
  postMission: async (id) => {
    return await apiService.post(`/missions/${id}`);
  },
  putMission: async (id) => {
    return await apiService.put(`/missions/${id}`);
  },
  deleteMission: async (id) => {
    return await apiService.delete(`/missions/${id}`);
  },
};

export default missionService;
