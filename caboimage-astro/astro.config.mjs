import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; // temporarily disabled — using static sitemap.xml.ts

// https://astro.build/config
export default defineConfig({
  site: 'https://caboimage.com',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    // sitemap disabled — static sitemap via src/pages/sitemap.xml.ts
  ],

  image: {
    // Sharp for local image optimization (WebP, AVIF)
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      { protocol: 'https', hostname: 'caboimage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // Output: 'static' for full SSG (best performance)
  output: 'static',

  // Trailing slash behavior
  trailingSlash: 'never',

  // Build optimizations
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },

  // Markdown config
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  // Vite config
  vite: {
    build: {
      cssMinify: true,
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '',
        },
      },
    },
  },
});
