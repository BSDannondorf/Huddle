import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Huddle/', // Replace 'Huddle' with your repo name if deploying to GitHub Pages
  build: {
    rollupOptions: {
      input: './src/main.jsx', // Explicitly specify your entry point
    },
  },
});