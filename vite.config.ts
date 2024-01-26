import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },

  plugins: [react(), ViteImageOptimizer({})],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./**/*.test.ts', './**/*.test.tsx'],
    setupFiles: './tests/setup.ts',
  },
});
