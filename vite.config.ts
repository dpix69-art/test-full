
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/test-full/',   // <— ВАЖНО: со слэшами с двух сторон
//   plugins: [react()],
// });
export default defineConfig({
  base: '/test-full/',
  publicDir: 'public', // ← жёстко укажи
});

