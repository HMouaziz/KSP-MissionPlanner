import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CameraAdjuster = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 10, 30);
    camera.near = 0.01;
    camera.far = 1000000;
    camera.fov = 90;
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

export default CameraAdjuster