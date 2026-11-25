import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
// Sitio 100% estático: Vercel lo sirve sin funciones serverless.
export default defineConfig({
  site: 'https://nabil-allis-portfolio.vercel.app',
  integrations: [tailwind()],
  output: 'static',
})
