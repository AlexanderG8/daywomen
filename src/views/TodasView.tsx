// src/views/TodasView.tsx
import { motion } from 'framer-motion';

// Posiciones fijas para que no varíen entre renders
const STARS = [
  { left: '8%', top: '12%', size: '1rem', delay: 0.0 },
  { left: '20%', top: '70%', size: '0.7rem', delay: 0.6 },
  { left: '35%', top: '18%', size: '1.2rem', delay: 1.1 },
  { left: '55%', top: '80%', size: '0.8rem', delay: 0.3 },
  { left: '68%', top: '10%', size: '1rem', delay: 0.9 },
  { left: '80%', top: '55%', size: '0.7rem', delay: 0.4 },
  { left: '90%', top: '25%', size: '1.1rem', delay: 1.4 },
  { left: '12%', top: '45%', size: '0.6rem', delay: 0.7 },
];

export default function TodasView() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a1a] flex flex-col items-center justify-center text-center px-6">

      {/* Estrellas decorativas flotantes */}
      {STARS.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-purple-400 select-none pointer-events-none"
          style={{ left: s.left, top: s.top, fontSize: s.size, opacity: 0.25 }}
          animate={{ y: [0, -14, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        >
          ✦
        </motion.span>
      ))}

      {/* Contenido principal */}
      <div className="max-w-lg w-full">

        {/* Emoji central animado */}
        <motion.div
          className="text-5xl mb-6 select-none"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌸
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Feliz Día a Todas las Mujeres
        </motion.h1>

        {/* Separador */}
        <motion.div
          className="h-px bg-purple-400/50 mx-auto mb-6"
          style={{ width: '4rem' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* Mensaje */}
        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          "A cada mujer que con su fuerza, amor y valentía hace del mundo
          un lugar más luminoso. Hoy y siempre, gracias por existir."
        </motion.p>

        {/* Fecha */}
        <motion.p
          className="text-purple-300 text-xs mt-8 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          ✦ Atte. Xander El Father ✦
        </motion.p>

      </div>
    </main>
  );
}
