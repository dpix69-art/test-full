import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ВАЖНО: если репозиторий называется иначе — замени имя тут
  base: '/test-full/',
  // Явно укажем публичную папку, чтобы Vite скопировал её в билд
  publicDir: 'public',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
