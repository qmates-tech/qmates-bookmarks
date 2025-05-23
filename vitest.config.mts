import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    isolate: true,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
  },
})
