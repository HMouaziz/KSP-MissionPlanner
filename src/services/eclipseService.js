import apiService from "./apiService";

const eclipseService = {
  getBodies: async () => {
    return await apiService.get("/eclipse/");
  },
  calculate: async (data) => {
    return await apiService.post("/eclipse/calculate", data);
  },
};

export {eclipseService};

