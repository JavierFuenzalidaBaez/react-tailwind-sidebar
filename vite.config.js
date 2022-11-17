import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@resources': path.resolve(__dirname, 'src/resources'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
  },
  plugins: [react()],
})
