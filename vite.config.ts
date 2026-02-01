import { defineConfig } from 'vite';

export default defineConfig({
  base: '/salenaversary/', // 👈 important for GH Pages
  build: {
    outDir: 'dist',
  },
});
