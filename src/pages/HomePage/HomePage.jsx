import { Canvas } from "@react-three/fiber";
import SolarSystem from "@/components/Canvas/SolarSystem.jsx";
import { Grid, OrbitControls } from "@react-three/drei";
import CameraAdjuster from "@/components/Canvas/CameraAdjuster.jsx";

export const HomePage = () => {
  return (
    <div id="canvas-container" className='w-screen h-[calc(100vh-40px)] block'>
      <Canvas antialias="true" className="w-full h-full bg-black">
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1} color={"#ffffff"} />
        <directionalLight color="white" position={[0, 0, 10]} />

        <SolarSystem />
        <Grid color="#ffffff" colorCenterLine="red" />
        <OrbitControls enablePan={false} />
        <CameraAdjuster />
      </Canvas>
    </div>
  );
};
