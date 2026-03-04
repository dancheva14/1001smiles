import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages: use your repo name (e.g. '1001smiles'). Use '/' for user/org pages.
  base: '/1001smiles/',
})
