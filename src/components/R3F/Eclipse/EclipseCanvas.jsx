import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraAdjuster from "@/components/R3F/Eclipse/CameraAdjuster.jsx";
import { CelestialBody } from "@/components/R3F/Eclipse/CelestialBody.jsx";
import { Satellite } from "@/components/R3F/Eclipse/Satellite.jsx";
import * as THREE from "three";
import { SunVisual } from "@/components/R3F/Eclipse/SunVisual.jsx";
import { SunDirectionalLight } from "@/components/R3F/Eclipse/SunDirectionalLight.jsx";
import { SunLight } from "@/components/R3F/Eclipse/SunLight.jsx";
import { OrbitPoints} from "@/components/R3F/custom/OrbitPlane.jsx";
import {useRef} from "react";

export const EclipseCanvas = () => {
  const orbitPointsRef = useRef([]);
  return (
    <div id="canvas-container" className="w-[600px] h-[400px] rounded block">
      <Canvas
        antialias="true"
        className="w-full h-full rounded bg-black"
        shadows={{ type: THREE.PCFSoftShadowMap }}
      >
        <SunVisual distance={150} />
        <SunDirectionalLight distance={150} />
        <SunLight distance={150} />

        <CelestialBody position={[0, 0, 0]} />
        <OrbitPoints
          semiMajorAxis={10}
          semiMinorAxis={10}
          inclination={0}
          longitudeOfAscendingNode={0}
          argumentOfPeriapsis={0}
          orbitPointsRef={orbitPointsRef}
        />
        <Satellite orbitPoints={orbitPointsRef} semiMajorAxis={10} />
        <OrbitControls nableZoom={true} enablePan={false} enableRotate={true} />
        <CameraAdjuster />
      </Canvas>
    </div>
  );
};
