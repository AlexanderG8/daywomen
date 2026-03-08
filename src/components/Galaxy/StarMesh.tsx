// src/components/Galaxy/StarMesh.tsx
import { useRef, useState } from 'react';
import { useFrame }         from '@react-three/fiber';
import { Html }             from '@react-three/drei';
import * as THREE           from 'three';
import type { FamilyMember } from '@/types';

interface Props {
  member:  FamilyMember;
  onClick: (member: FamilyMember) => void;
}

export const StarMesh = ({ member, onClick }: Props) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef  = useRef<THREE.Mesh>(null);
  const ringRef  = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Flotado suave y único por estrella (fase basada en posición X)
    if (groupRef.current) {
      const floatY = Math.sin(t * 0.7 + member.position[0] * 0.5) * 0.12;
      groupRef.current.position.set(
        member.position[0],
        member.position[1] + floatY,
        member.position[2],
      );
    }

    // Pulso del núcleo cristal
    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 1.5) * 0.08;
      const scale = hovered ? 1.4 * pulse : pulse;
      coreRef.current.scale.setScalar(scale * member.size);
    }

    // Rotación del anillo orbital en dos ejes
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.4;
      ringRef.current.rotation.z = t * 0.25;
    }
  });

  return (
    <group ref={groupRef}>

      {/* ── Halo de brillo exterior ─────────────────────────────── */}
      <mesh>
        <sphereGeometry args={[0.62, 16, 16]} />
        <meshBasicMaterial
          color={member.color}
          transparent
          opacity={hovered ? 0.13 : 0.06}
          depthWrite={false}
        />
      </mesh>

      {/* ── Anillo orbital ──────────────────────────────────────── */}
      <mesh ref={ringRef} scale={member.size}>
        <torusGeometry args={[0.58, 0.018, 8, 48]} />
        <meshBasicMaterial
          color={member.color}
          transparent
          opacity={hovered ? 0.9 : 0.45}
        />
      </mesh>

      {/* ── Núcleo de gema cristal (icosahedro facetado) ────────── */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.35, 0]} />
        <meshPhysicalMaterial
          color={member.color}
          emissive={member.color}
          emissiveIntensity={hovered ? 1.5 : 0.7}
          roughness={0.05}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* ── Área de clic invisible (mayor que el núcleo) ─────────── */}
      <mesh
        onClick={() => onClick(member)}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.55, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* ── Badge de nombre y parentesco ─────────────────────────── */}
      <Html distanceFactor={12} center position={[0, 0.72, 0]}>
        <div
          style={{
            background:     'rgba(10, 8, 24, 0.82)',
            border:         `1px solid ${member.color}50`,
            borderRadius:   '999px',
            padding:        '3px 10px 3px 7px',
            display:        'flex',
            alignItems:     'center',
            gap:            '5px',
            opacity:        hovered ? 1 : 0.75,
            transition:     'opacity 0.3s, box-shadow 0.3s',
            boxShadow:      hovered ? `0 0 14px ${member.color}55` : 'none',
            backdropFilter: 'blur(6px)',
            pointerEvents:  'none',
            userSelect:     'none',
            whiteSpace:     'nowrap',
          }}
        >
          {/* Emoji */}
          {member.emoji && (
            <span style={{ fontSize: '13px', lineHeight: 1 }}>
              {member.emoji}
            </span>
          )}

          {/* Nombre + parentesco apilados */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.35 }}>
            <span
              style={{
                color:         '#ffffff',
                fontSize:      '10px',
                fontWeight:    600,
                letterSpacing: '0.04em',
                textShadow:    `0 0 10px ${member.color}`,
              }}
            >
              {member.nickname ?? member.name}
            </span>
            <span
              style={{
                color:      member.color,
                fontSize:   '8.5px',
                fontWeight: 400,
                opacity:    0.9,
              }}
            >
              {member.relationship}
            </span>
          </div>
        </div>
      </Html>

    </group>
  );
};
