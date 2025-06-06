import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/components/**/*.{ts,tsx}'],
      thresholds: {
        global : {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: -10
        }
      }
    },
  },
})
