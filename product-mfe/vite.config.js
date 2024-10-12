import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'productMFE',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5003,
  },
  build: {
    target: 'esnext'
  },
});



