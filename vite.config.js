import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mon-portfolio/', // Utilisez le nom du dépôt ici, pour que GitHub Pages sache où chercher les ressources
  build: {
    outDir: 'dist', // Assurez-vous que le dossier de sortie est 'dist'
  },
})
