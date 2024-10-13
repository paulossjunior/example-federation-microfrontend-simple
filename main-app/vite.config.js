import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mainApp',
      remotes: {
        designSystem: 'http://localhost:5001/assets/remoteEntry.js',
        authMFE: 'http://localhost:5002/assets/remoteEntry.js',
        productMFE: 'http://localhost:5003/assets/remoteEntry.js',
        salesMFE: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5000,
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
