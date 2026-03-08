// src/components/Galaxy/GalaxyScene.tsx
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';
import { StarMesh } from './StarMesh';
import { ParticleField } from './ParticleField';
import { galaxyConfig } from '@/data/familyData';
import { useResponsiveCamera } from '@/hooks/useResponsiveCamera';
import type { FamilyMember } from '@/types';

interface Props {
  members: FamilyMember[];
  onStarClick: (member: FamilyMember) => void;
}

/**
 * Componente interno que consume hooks de R3F (deben estar dentro del Canvas).
 */
const SceneContent = ({ members, onStarClick }: Props) => {
  useResponsiveCamera();

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#A569BD" />

      <Stars radius={80} depth={50} count={3000} factor={4} fade />
      <Sparkles count={50} scale={20} size={2} speed={0.3} color="#A569BD" />
      <ParticleField />

      {members.map(member => (
        <StarMesh key={member.id} member={member} onClick={onStarClick} />
      ))}

      <OrbitControls
        enableZoom
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={8}
        maxDistance={35}
      />
    </>
  );
};

/**
 * Canvas principal de la galaxia 3D.
 * Orquesta luces, estrellas, partículas y controles de cámara.
 */
export const GalaxyScene = ({ members, onStarClick }: Props) => (
  <Canvas
    camera={{ fov: galaxyConfig.cameraFov, position: [0, 0, 20] }}
    dpr={[1, 2]}
    gl={{ antialias: true }}
    style={{ background: 'transparent' }}
  >
    <Suspense fallback={null}>
      <SceneContent members={members} onStarClick={onStarClick} />
    </Suspense>
  </Canvas>
);
