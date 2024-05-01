import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Satellite = ({
  orbitPoints,
  semiMajorAxis,
  delta = 1,
  size,
  gravitationalConstant = 6.67430e-11,
  centralMass = 5.972e24,
  focusPosition = new THREE.Vector3(0, 0, 0),
}) => {
  const ref = useRef();
  const indexRef = useRef(0);
  const speeds = useRef([]);
  const mu = gravitationalConstant * centralMass;

  useMemo(() => {
    if (!orbitPoints.current || orbitPoints.current.length === 0) {
      return;
    }
    const points = orbitPoints.current;
    const speedsArray = new Array(points.length).fill(0);
    for (let i = 0; i < points.length; i++) {
      const r = points[i].distanceTo(focusPosition);
      speedsArray[i] = Math.sqrt(mu * (2 / r - 1 / semiMajorAxis));
    }
    const maxSpeed = Math.max(...speedsArray);
    speeds.current = speedsArray.map((speed) => speed / maxSpeed);
  }, [orbitPoints, focusPosition, mu, semiMajorAxis]);

  useFrame(() => {
    if (
      !orbitPoints.current ||
      orbitPoints.current.length === 0 ||
      speeds.current.length === 0
    ) {
      return;
    }

    const points = orbitPoints.current;
    const pointCount = points.length;
    const currentSpeed = speeds.current[Math.floor(indexRef.current)] || 1;
    indexRef.current = (indexRef.current + currentSpeed * delta) % pointCount;
    const nextPosition = points[Math.floor(indexRef.current)];
    ref.current.position.copy(nextPosition);
  });

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="red" metalness={0.6} roughness={0.3} />
    </mesh>
  );
};

