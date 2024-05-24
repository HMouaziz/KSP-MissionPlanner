import { DirectionalLight } from "three";
import {extend} from "@react-three/fiber";

extend(DirectionalLight)

export const SunDirectionalLight = ({ distance }) => {
  return (
    <directionalLight
      color={"#ffffff"}
      intensity={1.5}
      position={[distance, 0, 5]}
      castShadow={true}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-near={0.1}
      shadow-camera-far={500}
      shadow-camera-left={-50}
      shadow-camera-right={50}
      shadow-camera-top={50}
      shadow-camera-bottom={-50}
      shadow-bias={-0.0001}
      shadow-radius={10}
    />
  );
};
