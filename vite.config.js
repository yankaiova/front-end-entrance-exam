import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base: '/front-end-entrance-exam/',
  plugins: [eslintPlugin()],
});
