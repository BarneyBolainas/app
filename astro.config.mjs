import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://github.com/BarneyBolainas/app', // Cambia esto con tu URL de GitHub
  build: {
    target: 'es2020',
  },
});
