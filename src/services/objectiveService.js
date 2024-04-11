import apiService from "./apiService";

const objectiveService = {
  getAllObjectives: async () => {
    return await apiService.get("/objectives");
  },
  getObjectives: async (id) => {
    return await apiService.get(`/objectives/${id}`);
  },
  postObjectives: async (objectiveData) => {
    return await apiService.post(`/objectives/`, objectiveData);
  },
  putObjectives: async (id, objectiveData) => {
    return await apiService.put(`/objectives/${id}`, objectiveData);
  },
  deleteObjectives: async (id) => {
    return await apiService.delete(`/objectives/${id}`);
  },
};

export default objectiveService;
