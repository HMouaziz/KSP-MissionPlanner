import { HemisphereLight } from "three";
import {extend} from "@react-three/fiber";

extend(HemisphereLight)

export const SunLight = ({ distance }) => {
  return (
    <hemisphereLight
      skyColor={"#ffffff"}
      groundColor={"#b1e1ff"}
      intensity={0.1}
      position={[distance, 0, 0]}
    />
  );
};
