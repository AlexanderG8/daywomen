// src/components/Galaxy/ParticleField.tsx
import { useMemo } from 'react';
import { galaxyConfig } from '@/data/familyData';

/**
 * Campo de partículas de fondo que simula neblina y polvo estelar.
 * Usa <points> con BufferGeometry para un único draw call eficiente.
 */
export const ParticleField = () => {
  const count = galaxyConfig.particleCount;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Distribución esférica aleatoria con radio variable
      const r     = 5 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);

      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#a569bd"
        size={0.05}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
};
