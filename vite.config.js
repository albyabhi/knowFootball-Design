import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({ 
      cache: false, // Optional: Disable caching for always fresh results
      emitWarning: true, // Show warnings in the terminal
      emitError: true,   // Show errors in the terminal
    }),
  ],
});
