import { copyFileSync, existsSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  // Com domínio customizado (ronaldojudo.site) o site é servido na raiz /
  base: mode === 'gh-pages' ? '/' : '/',
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
