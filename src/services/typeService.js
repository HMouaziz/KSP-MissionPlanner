import apiService from "./apiService";

const typeService = {
  getAllTypes: async () => {
    return await apiService.get("/types");
  },
  getTypes: async (mission_id) => {
    return await apiService.get(`/types/${mission_id}`); //move to missions
  },
  postType: async (typeData) => {
    return await apiService.post(`/types/`, typeData);
  },
  putType: async (id, typeData) => {
    return await apiService.put(`/types/${id}`, typeData);
  },
  deleteType: async (id) => {
    return await apiService.delete(`/types/${id}`);
  },
};

export default typeService;
