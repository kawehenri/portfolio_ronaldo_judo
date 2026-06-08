import { copyFileSync, existsSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const REPO_BASE = '/portfolio_ronaldo_judo/'

export default defineConfig(({ mode }) => ({
  base: mode === 'gh-pages' ? REPO_BASE : '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        const index = 'dist/index.html'
        if (existsSync(index)) copyFileSync(index, 'dist/404.html')
      },
    },
  ],
}))
