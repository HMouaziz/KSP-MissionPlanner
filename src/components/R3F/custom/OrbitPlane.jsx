import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const OrbitPlane = ({ a, b, segments= 1000 , position = [0, 0, 0], rotation = [0, 0, 0]  }) => {
  const { scene } = useThree();

  const planes = useMemo(() => {
    const angleStep = Math.PI * 2 / segments;
    const planes = [];
    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      const x = a * Math.cos(angle);
      const z = b * Math.sin(angle);
      const rotationY = -angle + Math.PI / 2; // Orient the plane tangent to the curve

      const planeGeometry = new THREE.PlaneGeometry(0.2, 0.1);  // Small segment size
      const planeMaterial = new THREE.MeshStandardMaterial({ color: "white", side: THREE.DoubleSide });
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      planeMesh.position.set(x, 0, z);
      planeMesh.rotation.y = rotationY;
      planeMesh.receiveShadow = true;

      planes.push(planeMesh);
    }
    return planes;
  }, [a, b, segments]);

  useMemo(() => {
    const group = new THREE.Group();
    group.position.set(...position);
    group.rotation.set(...rotation);
    planes.forEach(plane => group.add(plane));
    scene.add(group);

    return () => {
      planes.forEach(plane => group.remove(plane));
      scene.remove(group);
    };
  }, [planes, scene, position, rotation]);

  return null;
};
