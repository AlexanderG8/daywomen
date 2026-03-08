// src/types/index.ts

/** Representa a cada mujer de la familia como una estrella en la galaxia */
export interface FamilyMember {
  /** Identificador único, e.g. 'abuela-rosa' */
  id: string;
  /** Nombre completo para mostrar en la tarjeta */
  name: string;
  /** Apodo cariñoso opcional que aparece sobre la estrella */
  nickname?: string;
  /** Dedicatoria personalizada que se muestra en la tarjeta */
  message: string;
  /** Ruta a /public/images/nombre.webp — opcional */
  photo?: string;
  /** Color hex de la estrella, e.g. '#A569BD' */
  color: string;
  /** Radio visual de la estrella entre 0.5 y 1.5 */
  size: number;
  /** Coordenadas X, Y, Z en el espacio 3D */
  position: [number, number, number];
  /** Emoji representativo, e.g. '👵', '🌸' */
  emoji?: string;
  /** Parentesco: 'Abuela', 'Mamá', 'Hermana', etc. */
  relationship: string;
}

/** Configuración general de la escena 3D */
export interface GalaxyConfig {
  /** Radio de distribución de las estrellas familiares */
  radius: number;
  /** Cantidad de partículas del fondo */
  particleCount: number;
  /** Velocidad de auto-rotación en radianes por frame */
  rotationSpeed: number;
  /** Campo de visión de la cámara en grados */
  cameraFov: number;
}

/** Estado de interacción del usuario con las estrellas */
export type InteractionState = 'idle' | 'hovering' | 'selected';

/** Contexto completo de interacción con las estrellas */
export interface StarInteraction {
  /** Estado actual de la interacción */
  state: InteractionState;
  /** Miembro activo (hover o seleccionado), null si ninguno */
  activeMember: FamilyMember | null;
  /** Setter para activar o limpiar el miembro activo */
  setActive: (member: FamilyMember | null) => void;
}
