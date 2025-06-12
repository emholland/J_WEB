import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/static/',
 build: {
    outDir: resolve(__dirname, '../backend/backend/static'),
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/index-[hash].js',
        assetFileNames: 'assets/index-[hash][extname]',
      }
    }
  }
})
