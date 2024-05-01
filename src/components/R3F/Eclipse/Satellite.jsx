import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Satellite = ({
  semiMajorAxis,
  semiMinorAxis,
  inclination,
  longitudeOfAscendingNode,
  argumentOfPeriapsis = 0, // Default value set to 0
}) => {
  const ref = useRef();
  const thetaRef = useRef(0);
  const previousPosition = useRef(new THREE.Vector3());
  const lerpFactor = 0.1;

  const eccentricity = Math.sqrt(1 - semiMinorAxis ** 2 / semiMajorAxis ** 2);
  const inclinationRadians = inclination * (Math.PI / 180);
  const nodeRadians = longitudeOfAscendingNode * (Math.PI / 180);
  const periapsisRadians = argumentOfPeriapsis * (Math.PI / 180);

  useFrame(({ clock }) => {
    const delta = clock.getDelta();
    const areaSpeed = 1000;
    const r =
      (semiMajorAxis * (1 - eccentricity ** 2)) /
      (1 + eccentricity * Math.cos(thetaRef.current));
    const dTheta = (areaSpeed * delta) / (r * r);
    thetaRef.current += dTheta;

    const futureTheta = thetaRef.current + dTheta;
    const futureR =
      (semiMajorAxis * (1 - eccentricity ** 2)) /
      (1 + eccentricity * Math.cos(futureTheta));

    const futureXOrbit = futureR * Math.cos(futureTheta);
    const futureZOrbit = futureR * Math.sin(futureTheta);

    const futureX =
      futureXOrbit *
        (Math.cos(nodeRadians) * Math.cos(periapsisRadians) -
          Math.sin(nodeRadians) *
            Math.sin(periapsisRadians) *
            Math.cos(inclinationRadians)) -
      futureZOrbit *
        (Math.cos(nodeRadians) * Math.sin(periapsisRadians) +
          Math.sin(nodeRadians) *
            Math.cos(periapsisRadians) *
            Math.cos(inclinationRadians));
    const futureY = futureZOrbit * Math.sin(inclinationRadians);
    const futureZ =
      futureXOrbit *
        (Math.sin(nodeRadians) * Math.cos(periapsisRadians) +
          Math.cos(nodeRadians) *
            Math.sin(periapsisRadians) *
            Math.cos(inclinationRadians)) +
      futureZOrbit *
        (Math.sin(nodeRadians) * Math.sin(periapsisRadians) -
          Math.cos(nodeRadians) *
            Math.cos(periapsisRadians) *
            Math.cos(inclinationRadians));

    const futurePosition = new THREE.Vector3(futureX, futureY, futureZ);

    // Calculate the satellite's position in the orbital plane coordinates
    const xOrbit = r * Math.cos(thetaRef.current);
    const zOrbit = r * Math.sin(thetaRef.current);

    // Calculate position for elliptical and inclined orbit with orientation corrections
    const currentPosition = new THREE.Vector3(
      xOrbit *
        (Math.cos(nodeRadians) * Math.cos(periapsisRadians) -
          Math.sin(nodeRadians) *
            Math.sin(periapsisRadians) *
            Math.cos(inclinationRadians)) -
        zOrbit *
          (Math.cos(nodeRadians) * Math.sin(periapsisRadians) +
            Math.sin(nodeRadians) *
              Math.cos(periapsisRadians) *
              Math.cos(inclinationRadians)),
      zOrbit * Math.sin(inclinationRadians),
      xOrbit *
        (Math.sin(nodeRadians) * Math.cos(periapsisRadians) +
          Math.cos(nodeRadians) *
            Math.sin(periapsisRadians) *
            Math.cos(inclinationRadians)) +
        zOrbit *
          (Math.sin(nodeRadians) * Math.sin(periapsisRadians) -
            Math.cos(nodeRadians) *
              Math.cos(periapsisRadians) *
              Math.cos(inclinationRadians)),
    );

    previousPosition.current.lerp(futurePosition, lerpFactor);
    ref.current.position.lerp(previousPosition.current, lerpFactor);
    previousPosition.current.copy(currentPosition);
  });

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="red" metalness={0.6} roughness={0.3} />
    </mesh>
  );
};
