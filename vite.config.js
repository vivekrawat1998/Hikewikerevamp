import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [  tailwindcss()],
  server: {
    host: true, // allow external access
    allowedHosts: [
      "0144-2401-4900-84c9-b3c8-91c7-b136-9386-fa73.ngrok-free.app"
    ]
  }
})