
export const SunVisual = ({ distance, size }) => (
  <mesh position={[distance, 0, 5]}>
    <sphereGeometry args={[size, 32, 32]} />
    <meshStandardMaterial color="yellow" emissive="yellow" intensity={2} />
  </mesh>
);



