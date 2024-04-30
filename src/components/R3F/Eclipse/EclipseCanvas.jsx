import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraAdjuster from "@/components/R3F/Eclipse/CameraAdjuster.jsx";
import { CelestialBody } from "@/components/R3F/Eclipse/CelestialBody.jsx";
import { Satellite } from "@/components/R3F/Eclipse/Satellite.jsx";
import * as THREE from "three";
import {SunVisual} from "@/components/R3F/Eclipse/SunVisual.jsx";
import {SunDirectionalLight} from "@/components/R3F/Eclipse/SunDirectionalLight.jsx";
import {SunLight} from "@/components/R3F/Eclipse/SunLight.jsx";
import {OrbitPlane} from "@/components/R3F/custom/OrbitPlane.jsx";


export const EclipseCanvas = () => {
  const orbitRadius = 10;
  return (
    <div id="canvas-container" className="w-[600px] h-[400px] rounded block">
      <Canvas
        antialias="true"
        className="w-full h-full rounded bg-black"
        shadows={{type: THREE.PCFSoftShadowMap}}
      >
        <SunVisual/>
        <SunDirectionalLight/>
        <SunLight/>


        <CelestialBody position={[0, 0, 0]}/>
        <Satellite orbitRadius={orbitRadius}/>
        <OrbitPlane a={orbitRadius} b={orbitRadius} />
        <OrbitControls nableZoom={true} enablePan={false} enableRotate={true}/>
        <CameraAdjuster/>

      </Canvas>
    </div>
  );
};
