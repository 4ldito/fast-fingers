import { defineConfig } from 'vite'
import preact from '@preact/preset-vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, 'src/store'),
      '@const': path.resolve(__dirname, 'src/const'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    }
  }
})
