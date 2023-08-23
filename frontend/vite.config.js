import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Specify the public directory
  alias: {
    '@/components': '/src/components', // Set up module aliases
  },
  build: {
    outDir: 'dist', // Specify the build output directory
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Configure SCSS preprocessing options
        additionalData: '@import "variables.scss";',
      },
    },
  },
})
