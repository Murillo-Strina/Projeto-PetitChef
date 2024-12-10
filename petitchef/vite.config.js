import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Garante que o CSS seja local por padrão
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Gera nomes de classe únicos
      localsConvention: 'camelCase', // Permite usar nomes camelCase no JS
    },
  },
});
