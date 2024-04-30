import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

export const CelestialBody = ({ position }) => {
  const mesh = useRef();

  // This function updates per frame
  useFrame(() => {
    // Rotate celestial body for visual effect (optional)
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};
