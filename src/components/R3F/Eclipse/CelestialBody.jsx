import {useRef} from "react";

export const CelestialBody = ({ position, size, color }) => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <sphereGeometry args={[size,32,32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
