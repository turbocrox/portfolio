import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
  build: {
    chunkSizeWarningLimit: 600, // increase warning limit if needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react'
            }
            if (id.includes('three')) {
              return 'vendor_three'
            }
            if (id.includes('tailwindcss')) {
              return 'vendor_tailwindcss'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
