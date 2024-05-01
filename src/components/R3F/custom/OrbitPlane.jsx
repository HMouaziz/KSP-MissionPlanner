import { useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export const OrbitPoints = ({
  semiMajorAxis,
  semiMinorAxis,
  inclination,
  longitudeOfAscendingNode,
  argumentOfPeriapsis,
  segments = 500,
  orbitPointsRef,
}) => {
  const { scene } = useThree();

  const inclinationRadians = inclination * (Math.PI / 180);
  const nodeRadians = longitudeOfAscendingNode * (Math.PI / 180);
  const periapsisRadians = argumentOfPeriapsis * (Math.PI / 180);
  const eccentricity = Math.sqrt(1 - semiMinorAxis ** 2 / semiMajorAxis ** 2);


  const points = useMemo(() => {
    const points = [];
    const angleStep = (Math.PI * 2) / segments;
    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      const r =
        (semiMajorAxis * (1 - eccentricity ** 2)) /
        (1 + eccentricity * Math.cos(angle));
      const x = r * Math.cos(angle);
      const z = r * Math.sin(angle);

      if (!isNaN(x) && !isNaN(z)) {
        const position = new THREE.Vector3(
          x *
            (Math.cos(nodeRadians) * Math.cos(periapsisRadians) -
              Math.sin(nodeRadians) *
                Math.sin(periapsisRadians) *
                Math.cos(inclinationRadians)) -
            z *
              (Math.cos(nodeRadians) * Math.sin(periapsisRadians) +
                Math.sin(nodeRadians) *
                  Math.cos(periapsisRadians) *
                  Math.cos(inclinationRadians)),
          z * Math.sin(inclinationRadians),
          x *
            (Math.sin(nodeRadians) * Math.cos(periapsisRadians) +
              Math.cos(nodeRadians) *
                Math.sin(periapsisRadians) *
                Math.cos(inclinationRadians)) +
            z *
              (Math.sin(nodeRadians) * Math.sin(periapsisRadians) -
                Math.cos(nodeRadians) *
                  Math.cos(periapsisRadians) *
                  Math.cos(inclinationRadians)),
        );
        points.push(position);
      }
    }
    return points;
  }, [
    segments,
    semiMajorAxis,
    eccentricity,
    nodeRadians,
    periapsisRadians,
    inclinationRadians,
  ]);

  useEffect(() => {
    if (points.length > 0) {
      const pointMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: "white",
      });
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const orbitPoints = new THREE.Points(geometry, pointMaterial);
      scene.add(orbitPoints);
      return () => scene.remove(orbitPoints);
    }
  }, [points, scene]);

  useEffect(() => {
    orbitPointsRef.current = points;
  }, [points, orbitPointsRef]);

  return null;
};
