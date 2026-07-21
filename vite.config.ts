import { defineConfig } from 'vite';
import {
  sallaBuildPlugin,
  sallaDemoPlugin,
  sallaTransformPlugin,
} from '@salla.sa/twilight-bundles/vite-plugins';

export default defineConfig({
  plugins: [
    sallaTransformPlugin(),
    sallaBuildPlugin(),
    sallaDemoPlugin({
      components: ['pmp-storefront'],
      grid: { columns: '1fr', gap: '0', minWidth: '320px' },
      css: 'body{margin:0;background:#07080a;color:#fff;font-family:Arial,sans-serif}.component-card{padding:0!important;box-shadow:none!important}',
    }),
  ],
  build: {
    target: 'es2020',
  },
});
