import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base must match the GitHub Pages repo name so assets resolve at
// https://ashishdevlekar.github.io/My-Personal-Portfolio/
export default defineConfig({
  base: '/My-Personal-Portfolio/',
  plugins: [react(), tailwindcss()],
})
