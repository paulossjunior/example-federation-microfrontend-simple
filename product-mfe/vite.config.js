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
        './ProductListCRUD': './src/view/ProductList.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5003,
    publicDir: 'public', // Certifique-se de que este caminho está correto
    cors: {
      origin: '*', // Permite que qualquer origem acesse o recurso
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
    },
    headers: {
      'Access-Control-Allow-Origin':  '*', // Permite requisições de qualquer origem
    },
  },
  build: {
    target: 'esnext'
  },
});



