import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Projeto-PetitChef/',  
  build: {
    outDir: 'dist', 
    emptyOutDir: true, 
    chunkSizeWarningLimit: 1000,
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
});
