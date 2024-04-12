import {createContext} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import objectiveService from "@/services/objectiveService.js";

export const ObjectivesContext = createContext();

export const ObjectivesProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { mutate: addObjective } = useMutation({
    mutationFn: objectiveService.postObjective,
    onSuccess: () => {
      queryClient.invalidateQueries(["objectives"]);
    },
  });

  const { mutate: updateObjective } = useMutation({
    mutationFn: objectiveService.putObjective,
    onSuccess: () => {
      queryClient.invalidateQueries(["objectives"]);
    },
  });

  const { mutate: deleteObjective } = useMutation({
    mutationFn: objectiveService.deleteObjective,
    onSuccess: () => {
      queryClient.invalidateQueries(["objectives"]);
    },
  });

  const value = {
    addObjective,
    updateObjective,
    deleteObjective,
  };

  return (
    <ObjectivesContext.Provider value={value}>
      {children}
    </ObjectivesContext.Provider>
  );
};
