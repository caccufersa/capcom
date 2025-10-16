import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './', // Use relative paths so the site works on subpath hosting (GitHub Pages, custom folders)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})
