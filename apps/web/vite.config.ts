import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@nb-antd-pro/components': path.resolve(
        __dirname,
        '../../packages/components/src'
      ),
    },
  },
});
