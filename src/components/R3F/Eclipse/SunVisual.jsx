
export const SunVisual = ({ distance }) => (
  <mesh position={[distance, 0, 5]}>
    <sphereGeometry args={[3, 32, 32]} />
    <meshStandardMaterial color="yellow" emissive="yellow" intensity={2} />
  </mesh>
);



