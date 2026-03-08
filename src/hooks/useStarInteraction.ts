// src/hooks/useStarInteraction.ts
import { useState, useCallback } from 'react';
import type { FamilyMember, InteractionState, StarInteraction } from '@/types';

/**
 * Centraliza la lógica de interacción con las estrellas de la galaxia.
 *
 * - state:        'idle' cuando no hay estrella activa,
 *                 'selected' cuando el usuario hizo clic en una.
 * - activeMember: la familiar actualmente seleccionada, o null.
 * - setActive:    selecciona una familiar (clic) o la limpia (null → cierra tarjeta).
 *
 * Uso en App.tsx:
 *   const interaction = useStarInteraction();
 *   <GalaxyScene onStarClick={interaction.setActive} />
 *   <FamilyCard member={interaction.activeMember} onClose={() => interaction.setActive(null)} />
 */
export const useStarInteraction = (): StarInteraction => {
  const [activeMember, setActiveMember] = useState<FamilyMember | null>(null);

  const state: InteractionState = activeMember !== null ? 'selected' : 'idle';

  const setActive = useCallback((member: FamilyMember | null) => {
    setActiveMember(member);
  }, []);

  return { state, activeMember, setActive };
};
