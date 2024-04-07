import {useContext} from "react";
import {MissionsContext} from "@/context/MissionContext.jsx";


export const useMissions = () => useContext(MissionsContext);
