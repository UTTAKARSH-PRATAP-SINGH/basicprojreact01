import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true, // Automatically opens the browser when Vite starts
  },
  plugins: [react()],
})
