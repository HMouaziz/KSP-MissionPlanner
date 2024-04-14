import {useContext} from "react";
import {ObjectivesContext} from "@/context/ObjectiveContext.jsx";

export const useObjectives = () => useContext(ObjectivesContext);

