import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

export const Satellite = ({ orbitRadius }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.position.set(
      Math.sin(time) * orbitRadius,
      0,
      Math.cos(time) * orbitRadius
    );
  });

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="red" metalness={0.6} roughness={0.3}/>
    </mesh>
  );
};
