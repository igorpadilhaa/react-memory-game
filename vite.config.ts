import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: globalThis.process.env.VITE_BASE || '/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
