import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure the base path is correctly set to resolve /src to the right location
      '/src/': new URL('./src/', import.meta.url).pathname
    }
  }
});
