import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

export const OrbitPlane = ({ semiMajorAxis, semiMinorAxis, inclination, longitudeOfAscendingNode, segments = 1000 }) => {
  const { scene } = useThree();

  // Convert angles from degrees to radians
  const inclinationRadians = inclination * (Math.PI / 180);
  const nodeRadians = longitudeOfAscendingNode * (Math.PI / 180);

  const planes = useMemo(() => {
    const angleStep = Math.PI * 2 / segments;
    const planes = [];
    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      const x = semiMajorAxis * Math.cos(angle);
      const z = semiMinorAxis * Math.sin(angle);
      const rotationY = -angle + Math.PI / 2; // Orient the plane tangent to the curve

      const planeGeometry = new THREE.PlaneGeometry(0.2, 0.1);
      const planeMaterial = new THREE.MeshStandardMaterial({ color: "white", side: THREE.DoubleSide });
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      planeMesh.position.set(x, 0, z);
      planeMesh.rotation.y = rotationY;
      planeMesh.receiveShadow = true;

      planes.push(planeMesh);
    }
    return planes;
  }, [semiMajorAxis, semiMinorAxis, segments]);

  useMemo(() => {
    const group = new THREE.Group();
    group.position.set(0, 0, 0);
    // Apply inclination and rotation for the ascending node
    group.rotation.set(0, -nodeRadians, inclinationRadians);
    planes.forEach(plane => group.add(plane));
    scene.add(group);

    return () => {
      planes.forEach(plane => group.remove(plane));
      scene.remove(group);
    };
  }, [planes, scene, inclinationRadians, nodeRadians]);

  return null;
};
