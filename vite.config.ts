import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react()],
    // No GitHub Pages o site fica em /capcom/. Na Vercel (ou local) fica na raiz.
    // GITHUB_ACTIONS é definido automaticamente pelo GitHub durante o workflow.
    base: env.GITHUB_ACTIONS ? '/capcom/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  }
})
