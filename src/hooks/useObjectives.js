import {useQuery} from "@tanstack/react-query";
import missionService from "@/services/missionService.js";

export const useObjectives = (id) => {
  return useQuery({
    queryKey: ["objectives", id],
    queryFn: missionService.getObjectives,
    enabled: !!id,
  })
};

