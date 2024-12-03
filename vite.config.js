import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Huddle/', // If deploying to GitHub Pages, adjust as necessary
});
