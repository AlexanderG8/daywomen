import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Three.js es inherentemente grande (~307 KB gzip). Límite ajustado para apps 3D.
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-three':  ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
  },
})
