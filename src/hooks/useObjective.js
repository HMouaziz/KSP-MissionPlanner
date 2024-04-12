import {useQuery} from "@tanstack/react-query";
import missionService from "@/services/missionService.js";

export const useObjective = (id) => {
  return useQuery({
    queryKey: ["objectives", id],
    queryFn: ({queryKey}) => {
      const [, id] = queryKey;
      return missionService.getObjectives(id);
    },
    enabled: !!id,
  })
};

