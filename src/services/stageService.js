import apiService from "./apiService";

const stageService = {
  getAllStages: async () => {
    return await apiService.get("/stages");
  },
  getStages: async (id) => {
    return await apiService.get(`/stages/${id}`);
  },
  postStage: async (stageData) => {
    return await apiService.post(`/stages/`, stageData);
  },
  putStage: async (id, stageData) => {
    return await apiService.put(`/stages/${id}`, stageData);
  },
  deleteStage: async (id) => {
    return await apiService.delete(`/stages/${id}`);
  },
};

export default stageService;
