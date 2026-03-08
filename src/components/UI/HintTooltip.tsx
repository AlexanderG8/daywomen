// src/components/UI/HintTooltip.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Guía de uso interactivo en la parte inferior de la pantalla.
 * Se oculta automáticamente después de 5 segundos con fade-out suave.
 */
export const HintTooltip = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center w-[90vw] max-w-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-400 text-xs">
            🖱️ Arrastra para rotar · Scroll para zoom · Haz clic en una estrella ✦
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
