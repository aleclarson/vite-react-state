import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    isolate: false,
    env: {
      TEST: 'vite-react-state',
    },
  },
})
