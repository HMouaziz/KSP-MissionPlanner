
export const SunVisual = () => (
  <mesh position={[100, 0, 5]}>
    <sphereGeometry args={[3, 32, 32]} />
    <meshStandardMaterial color="yellow" emissive="yellow" intensity={2} />
  </mesh>
);



