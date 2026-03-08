// src/components/UI/LoadingScreen.tsx
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  visible: boolean;
}

/**
 * Pantalla de carga animada que cubre la app mientras el Canvas 3D inicializa.
 * Desaparece con un fade-out suave cuando visible pasa a false.
 */
export const LoadingScreen = ({ visible }: Props) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a1a]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Estrella pulsante */}
        <motion.div
          className="text-purple-400 text-6xl mb-6 select-none"
          animate={{
            scale:   [1, 1.25, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.div>

        {/* Texto */}
        <motion.p
          className="text-purple-300 text-xs tracking-[0.3em] uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Cargando tu galaxia…
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);
