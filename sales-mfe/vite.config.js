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
  ],
  server: {
    port: 5004,
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