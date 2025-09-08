// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/https://github.com/dpix69-art/test-full/',          // ← замени на имя репозитория
//   plugins: [react()],
//   optimizeDeps: { exclude: ['lucide-react'] },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test-full/',   // <— ВАЖНО: со слэшами с двух сторон
  plugins: [react()],
});
