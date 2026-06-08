import { copyFileSync, existsSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/portfolio_ronaldo/' : '/',
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
})
