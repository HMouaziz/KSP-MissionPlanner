import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CameraAdjuster = ({ cameraDistance, cameraMax }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 10, cameraDistance);
    camera.near = 0.01;
    camera.far = cameraMax;
    camera.fov = 90;
    camera.updateProjectionMatrix();
  }, [camera, cameraDistance, cameraMax]);

  return null;
};

export default CameraAdjuster