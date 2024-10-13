import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(),commonjs()],
  build: {
    lib: {
      entry: 'src/index.js',  // Entry point
      name: 'design-system-paulossjunior',
      fileName: (format) => `design-system-paulossjunior.${format}.js`,
      formats: ['es', 'umd']
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
