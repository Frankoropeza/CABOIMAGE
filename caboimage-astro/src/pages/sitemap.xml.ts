// sitemap.xml.ts — Static sitemap generator
// Generates /sitemap.xml with all public routes

import type { APIRoute } from 'astro';

const SITE = 'https://caboimage.com';
const NOW = new Date().toISOString().split('T')[0];

const pages = [
  // Core pages
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },

  // Services
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/wedding-photography', priority: '1.0', changefreq: 'monthly' },
  { url: '/services/portrait-photography', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/real-estate-photography', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/architecture-photography', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/fine-art-photography', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/advertising-photography', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/commercial-travel-photography', priority: '0.7', changefreq: 'monthly' },

  // Gallery
  { url: '/gallery', priority: '0.9', changefreq: 'weekly' },
  { url: '/gallery/weddings', priority: '1.0', changefreq: 'weekly' },
  { url: '/gallery/weddings--details', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/weddings--getting-ready', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/weddings--ceremony', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/weddings--bride-and-groom', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/weddings--brides', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/weddings--love', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/weddings--groups', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/portraits', priority: '0.7', changefreq: 'monthly' },
  { url: '/gallery/real-estate', priority: '0.7', changefreq: 'monthly' },
  { url: '/gallery/fine-art', priority: '0.7', changefreq: 'monthly' },

  // Blog
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog/best-wedding-venues-los-cabos', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/how-to-choose-wedding-photographer-los-cabos', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/los-cabos-wedding-planning-guide', priority: '0.8', changefreq: 'monthly' },
];

function sitemap(pages: { url: string; priority: string; changefreq: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.url}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export const GET: APIRoute = () => {
  return new Response(sitemap(pages), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
