/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    svgr(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Split large third-party libraries into their own chunks so the
        // browser can cache them separately from your app code (they change
        // far less often than your components).
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'syntax-highlighter': ['react-syntax-highlighter'],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: false,
  },
});
