import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/EatO-production/', // <-- move this OUT of 'server'
  server: {
    historyApiFallback: true,
  },
})
