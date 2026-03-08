// src/components/UI/WelcomeBanner.tsx
import { motion } from 'framer-motion';

interface Props {
  text?: string;
}

/**
 * Banner superior que celebra el Día Internacional de la Mujer.
 * Aparece con fade + slide desde arriba con un delay de 0.5s.
 * El texto es opcional — por defecto muestra el mensaje del día de la mujer.
 */
export const WelcomeBanner = ({ text = '✦ Feliz Día Internacional de la Mujer ✦' }: Props) => (
  <motion.div
    className="absolute top-4 left-1/2 -translate-x-1/2 z-30
               bg-[#1A1A2E]/80 backdrop-blur-md border border-purple-500/30
               rounded-full px-4 sm:px-6 py-2 text-center
               max-w-[90vw]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6 }}
  >
    <span className="text-purple-300 text-xs sm:text-sm font-medium">
      {text}
    </span>
  </motion.div>
);
