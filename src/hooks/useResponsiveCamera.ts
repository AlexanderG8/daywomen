// src/hooks/useResponsiveCamera.ts
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

/**
 * Ajusta la posición Z de la cámara según el ancho de pantalla.
 * Debe llamarse dentro de un componente que esté dentro del Canvas de R3F.
 */
export const useResponsiveCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    const isMobile = size.width < 768;
    camera.position.z = isMobile ? 28 : 20;
  }, [size.width, camera]);
};
