import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dv/config/
export default defineConfig({
  plugins: [react()],
})
