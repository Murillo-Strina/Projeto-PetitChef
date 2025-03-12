import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', 
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCase', 
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, 
  },
  base: '/',
});