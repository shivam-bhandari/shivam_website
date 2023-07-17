import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  base: "/shivam-website/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})