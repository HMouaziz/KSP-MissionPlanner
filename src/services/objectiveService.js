import apiService from "./apiService";

const objectiveService = {
  getAllObjectives: async () => {
    return await apiService.get("/missions/objectives");
  },
  getObjectives: async (id) => {
    return await apiService.get(`/missions/objectives/${id}`);
  },
  postObjective: async (objectiveData) => {
    return await apiService.post(`/missions/objectives/`, objectiveData);
  },
  putObjective: async (objectiveData) => {
    return await apiService.put(`/missions/objectives/${objectiveData.id}`, objectiveData);
  },
  deleteObjective: async (id) => {
    return await apiService.delete(`/missions/objectives/${id}`);
  },
};

export default objectiveService;
