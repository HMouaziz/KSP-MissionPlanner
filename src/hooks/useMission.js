import {useQuery} from "@tanstack/react-query";
import * as missionService from "@/services/missionService.js";

export const useMission = (missionId) => {
  return useQuery({
    queryKey: ["missions"],
    queryFn: missionService.getAllMissions,
    select: (missions) => missions.find((mission) => mission.id === missionId),
    enabled: !!missionId,
  });
};