import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraAdjuster from "@/components/R3F/Eclipse/CameraAdjuster.jsx";
import { CelestialBody } from "@/components/R3F/Eclipse/CelestialBody.jsx";
import { Satellite } from "@/components/R3F/Eclipse/Satellite.jsx";
import * as THREE from "three";
import { SunVisual } from "@/components/R3F/Eclipse/SunVisual.jsx";
import { SunDirectionalLight } from "@/components/R3F/Eclipse/SunDirectionalLight.jsx";
import { SunLight } from "@/components/R3F/Eclipse/SunLight.jsx";
import { OrbitPoints } from "@/components/R3F/custom/OrbitPlane.jsx";
import { useRef } from "react";

export const EclipseCanvas = () => {
  const orbitPointsRef = useRef([]);
  const scale = 1e-5;
  const cameraDistance = scale * (924649202 / 4);
  const cameraMax = scale * (149598261150 * 2);
  const solarDistance = scale * 149598261150;
  const sunSize = scale * (696342000 * 2);

  const celestialBodySize = scale * 6371000;
  const celestialBodyColor = "lightblue";

  const satelliteSize = scale * 100000

  const gravitationalConstant = 6.6743e-11;
  const centralMass = 5.972e24;
  const soi = scale * 924649202;

  const semiMajorAxis = scale * 6371250;
  const semiMinorAxis = scale * 6371250;
  const inclination = 0;
  const longitudeOfAscendingNode = 0;
  const argumentOfPeriapsis = 0;

  return (
    <div id="canvas-container" className="w-[600px] h-[400px] rounded block">
      <Canvas
        antialias="true"
        className="w-full h-full rounded bg-black"
        shadows={{ type: THREE.PCFSoftShadowMap }}
      >
        <SunVisual distance={solarDistance} size={sunSize} />
        <SunDirectionalLight distance={solarDistance} />
        <SunLight distance={solarDistance} />

        <CelestialBody
          position={[0, 0, 0]}
          size={celestialBodySize}
          color={celestialBodyColor}
        />
        <OrbitPoints
          semiMajorAxis={semiMajorAxis}
          semiMinorAxis={semiMinorAxis}
          inclination={inclination}
          longitudeOfAscendingNode={longitudeOfAscendingNode}
          argumentOfPeriapsis={argumentOfPeriapsis}
          orbitPointsRef={orbitPointsRef}
        />
        <Satellite
          orbitPoints={orbitPointsRef}
          semiMajorAxis={semiMajorAxis}
          centralMass={centralMass}
          gravitationalConstant={gravitationalConstant}
          size={satelliteSize}
        />
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
        <CameraAdjuster cameraDistance={cameraDistance} cameraMax={cameraMax} />
      </Canvas>
    </div>
  );
};
