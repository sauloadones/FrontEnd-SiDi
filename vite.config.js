import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@api': '/src/services',
        '@components': '/src/components',
      },
    },
  }
})
