import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 1. Impor 'fileURLToPath' dan 'URL' dari 'url'
// Kita akan menggunakan ini untuk menggantikan 'path' dan '__dirname'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 2. Perbarui blok 'resolve' untuk alias '@'
  resolve: {
    alias: {
      // 3. Ini adalah cara modern (ESM) untuk menunjuk ke folder '/src'
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  // 4. Blok 'server' untuk proxy API (ini tetap sama)
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
