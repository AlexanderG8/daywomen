// src/components/Card/FamilyCard.tsx
import { motion, AnimatePresence } from 'framer-motion';
import type { FamilyMember } from '@/types';

interface Props {
  member: FamilyMember | null;
  onClose: () => void;
}

/**
 * Tarjeta emergente con información de la familiar seleccionada.
 * Incluye overlay oscuro con blur y animación spring de entrada/salida.
 */
export const FamilyCard = ({ member, onClose }: Props) => (
  <AnimatePresence>
    {member && (
      <>
        {/* Overlay oscuro con blur — cierra la tarjeta al hacer clic */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        />

        {/* Contenedor centrado de la tarjeta */}
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ scale: 0.5, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 60 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
          <div className="
            bg-[#1A1A2E]/95 border border-purple-500/30 rounded-2xl
            p-6 max-w-sm w-full text-center
            shadow-2xl shadow-purple-900/50
          ">
            {/* Foto de perfil circular */}
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                className="
                  w-24 h-24 rounded-full mx-auto mb-4 object-cover
                  ring-4 ring-purple-400 ring-offset-2 ring-offset-[#1A1A2E]
                "
              />
            )}

            {/* Emoji representativo */}
            <div className="text-4xl mb-2">{member.emoji}</div>

            {/* Nombre y parentesco */}
            <h2 className="text-white text-2xl font-bold mb-1">{member.name}</h2>
            <p className="text-purple-300 text-sm mb-4">{member.relationship}</p>

            {/* Mensaje personalizado */}
            <p className="text-gray-300 text-sm leading-relaxed italic" style={{ margin: '5px' }}>
              &ldquo;{member.message}&rdquo;
            </p>

            {/* Botón de cierre */}
            <button
              onClick={onClose}
              className="
                p-5 px-8 py-2 bg-purple-600 hover:bg-purple-500
                text-white rounded-full text-sm transition-colors
                cursor-pointer inline-flex items-center gap-2
              "
              style={
                {
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingTop: '2px',
                  paddingBottom: '2px',
                  margin: '5px auto',
                }
              }
            >
              <span>Cerrar</span>
              <span>✦</span>
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
