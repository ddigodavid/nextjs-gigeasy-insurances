import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
  test: {
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
      include: ['src'],
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        'src/styles',
        'src/types',
        'src/**.*',
      ],
    },
    environment: 'jsdom',
    env: {
      TZ: 'UTC',
    },
    setupFiles: ['./src/test/vitest-setup.ts'],
    exclude: [...configDefaults.exclude, 'legacy'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
