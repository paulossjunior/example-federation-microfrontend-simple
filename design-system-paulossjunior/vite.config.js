import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',  // Entry point
      name: 'DesignSystem',
      fileName: (format) => `index.${format}.js`
    },
    outDir: 'dist',  // Output directory
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
