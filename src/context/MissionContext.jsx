import {createContext} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import missionService from "@/services/missionService.js";


export const MissionsContext = createContext();

export const MissionsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const missions = useQuery({
    queryKey: ["missions"],
    queryFn: missionService.getAllMissions,
  });

  const { mutate: addMission } = useMutation({
    mutationFn: missionService.postMission,
    onSuccess: () => {
      queryClient.invalidateQueries(["missions"]);
    },
  });

  const { mutate: updateMission } = useMutation({
    mutationFn: missionService.putMission,
    onSuccess: () => {
      queryClient.invalidateQueries(["missions"]);
    },
  });

  const { mutate: deleteMission } = useMutation({
    mutationFn: missionService.deleteMission,
    onSuccess: () => {
      queryClient.invalidateQueries(["missions"]);
    },
  });

  const value = {
    missions,
    addMission,
    updateMission,
    deleteMission,
  };

  return (
    <MissionsContext.Provider value={value}>
      {children}
    </MissionsContext.Provider>
  );
};