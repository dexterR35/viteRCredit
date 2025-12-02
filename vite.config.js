import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and React DOM
          'react-vendor': ['react', 'react-dom'],
          // Split animation libraries
          'animation-vendor': ['framer-motion'],
          // Split carousel libraries
          'carousel-vendor': ['react-slick', 'slick-carousel'],
          // Split Firebase (using modular imports)
          'firebase-vendor': ['firebase/app', 'firebase/firestore'],
          // Split other heavy libraries
          'utils-vendor': ['react-scroll', 'react-helmet', 'react-helmet-async', 'react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit slightly to avoid warnings for split chunks
  },
});
