import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "react-drag-drop-container",
      entry: resolve(__dirname, 'lib/index.jsx'),
      fileName: 'react-drag-drop-container'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'prop-types'],
    }
  }
});
