import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  resolve: {
    alias: [{
      find: "@", replacement: path.resolve(__dirname, "src")
    }]
  },
});
