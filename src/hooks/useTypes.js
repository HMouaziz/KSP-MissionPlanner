import {useContext} from "react";
import {TypesContext} from "@/context/TypeContext.jsx";



export const useTypes = () => useContext(TypesContext);
