import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],

  server: {
    port: 23000,
    open: true,
  },
  resolve: {
    alias: [
      // eslint-disable-next-line no-undef
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
