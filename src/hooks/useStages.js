import {useQuery} from "@tanstack/react-query";
import missionService from "@/services/missionService.js";

export const useStages = (id) => {
  return useQuery({
    queryKey: ["stages", id],
    queryFn: missionService.getStages,
    enabled: !!id,
  })
}