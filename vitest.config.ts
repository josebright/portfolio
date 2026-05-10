import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'e2e', '.next'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/lib/**/*.ts', 'src/app/api/**/*.ts'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/**/*.d.ts', 'src/lib/fonts.ts'],
      thresholds: {
        'src/lib/**': { lines: 85, functions: 80, branches: 75, statements: 85 },
        'src/app/api/**': { lines: 75, functions: 75, branches: 70, statements: 75 },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
