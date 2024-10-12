import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'authMFE',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './src/components/Login.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5002,
  },
});
