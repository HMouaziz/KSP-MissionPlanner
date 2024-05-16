import {createContext} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import typeService from "@/services/typeService.js";

export const TypesContext = createContext();

export const TypesProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // const types = useQuery({
  //   queryKey: ["types"],
  //   queryFn: typeService.getAllTypes,
  // });

  const { mutate: addType } = useMutation({
    mutationFn: typeService.postType,
    onSuccess: () => {
      queryClient.invalidateQueries(["types"]);
    },
  });

  const { mutate: updateType } = useMutation({
    mutationFn: typeService.putType,
    onSuccess: () => {
      queryClient.invalidateQueries(["types"]);
    },
  });

  const { mutate: deleteType } = useMutation({
    mutationFn: typeService.deleteType,
    onSuccess: () => {
      queryClient.invalidateQueries(["types"]);
    },
  });

  const value = {
    // types,
    addType,
    updateType,
    deleteType,
  };

  return (
    <TypesContext.Provider value={value}>
      {children}
    </TypesContext.Provider>
  );
};
