import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // phải viết cái này để chạy đc, ko vite ko chịu chạy redux
  optimizeDeps: {
    legacy: true,
    include: ['redux-thunk'],
  }
})
