import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Tayfun-Portfolio/',
  plugins: [react()],
  server: {
    historyApiFallback: true,
  }
})
