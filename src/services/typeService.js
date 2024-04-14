import apiService from "./apiService";

const typeService = {
  getAllTypes: async () => {
    return await apiService.get("/types");
  },
  getTypes: async (id) => {
    return await apiService.get(`/types/${id}`);
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
