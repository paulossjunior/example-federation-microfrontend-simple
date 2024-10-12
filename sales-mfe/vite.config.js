import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'salesMFE',
      filename: 'remoteEntry.js',
      exposes: {
        './Sales': './src/components/Sales.vue',
      },
      shared: ['vue'],
    }),
  },
  server: {
    port: 5004,
  },
});