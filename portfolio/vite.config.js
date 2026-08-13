import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  // GitHub Pages用のベースパス
  base: '/My_Portfolio/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        news: resolve(process.cwd(), 'news.html'),
      },
    },
  },
})