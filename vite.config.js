import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    port: 3000, // Change the port to 3000
    host: true,  // This exposes the server to the network
  },
  plugins: [react()],
})
