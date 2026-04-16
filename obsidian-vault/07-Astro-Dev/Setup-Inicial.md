# ⚡ Setup Inicial — Astro + Tailwind + MDX

---

## Stack Técnico Seleccionado

```
Astro 4.x
  ├── @astrojs/tailwind
  ├── @astrojs/mdx
  ├── @astrojs/image (Sharp)
  ├── @astrojs/sitemap
  ├── astro-seo
  └── astro-icon
```

---

## Comandos de Instalación

```bash
# Crear proyecto
npm create astro@latest caboimage-site -- \
  --template minimal \
  --typescript strict \
  --install

cd caboimage-site

# Integrations
npx astro add tailwind mdx image sitemap

# Dependencias adicionales
npm install astro-seo sharp
npm install -D @tailwindcss/typography
```

---

## Estructura de Carpetas

```
caboimage-site/
├── public/
│   ├── images/          # Imágenes estáticas (OG, favicon, etc.)
│   ├── fonts/           # Fuentes locales
│   └── favicon.svg
│
├── src/
│   ├── assets/          # Imágenes procesadas por Astro (WebP auto)
│   │   ├── gallery/
│   │   │   ├── weddings/
│   │   │   ├── portraits/
│   │   │   └── real-estate/
│   │   └── about/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── FeaturedWork.astro
│   │   │   ├── ServicesOverview.astro
│   │   │   ├── AboutSnippet.astro
│   │   │   └── TestimonialsCarousel.astro
│   │   ├── gallery/
│   │   │   ├── MasonryGrid.astro
│   │   │   ├── Lightbox.astro
│   │   │   └── GalleryCard.astro
│   │   ├── services/
│   │   │   ├── ServiceHero.astro
│   │   │   ├── ProcessTimeline.astro
│   │   │   └── ServiceFAQ.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── ContactForm.astro
│   │       └── WhatsAppButton.astro
│   │
│   ├── content/
│   │   ├── config.ts           # Zod schemas para Content Collections
│   │   ├── services/
│   │   │   ├── wedding-photography.md
│   │   │   ├── portrait-photography.md
│   │   │   ├── real-estate-photography.md
│   │   │   ├── architecture-photography.md
│   │   │   ├── fine-art-photography.md
│   │   │   ├── advertising-photography.md
│   │   │   └── commercial-travel-photography.md
│   │   ├── gallery/
│   │   │   └── weddings.json   # Metadata de imágenes
│   │   └── blog/
│   │       ├── best-wedding-venues-los-cabos.mdx
│   │       └── ...
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro    # HTML base, SEO, fonts
│   │   ├── PageLayout.astro    # Con Header + Footer
│   │   ├── ServiceLayout.astro # Para páginas de servicios
│   │   └── BlogLayout.astro   # Para posts del blog
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro   # Genera /services/wedding-photography etc
│   │   ├── gallery/
│   │   │   ├── index.astro
│   │   │   └── [category]/
│   │   │       └── index.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   │
│   └── styles/
│       ├── global.css          # Variables CSS, reset
│       └── typography.css      # Estilos de texto
│
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Content Collections Schema (config.ts)

```typescript
import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    keywords: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    author: z.string().default('Miguel Ventura'),
  }),
});

export const collections = {
  'services': servicesCollection,
  'blog': blogCollection,
};
```

---

## Configuración Astro

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://caboimage.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
```

---

## Deploy Recomendado

### Opción A: Vercel (Recomendado)
```bash
npm i -g vercel
vercel --prod
```
- Free tier generoso
- CDN global automático
- Preview deploys en cada PR
- Analytics incluidos

### Opción B: Netlify
```bash
npm run build
# Apuntar Netlify a ./dist/
```
- Netlify Forms gratis (sin backend)
- Deploy desde GitHub

### Opción C: Cloudflare Pages
- Integración con Cloudflare disponible en este proyecto
- Performance óptima en México
- Caching en edge

---

## Referencias
- [[Estructura-Carpetas|📁 Estructura de Carpetas Detallada]]
- [[MDX-Collections|📝 MDX Collections]]
- [[../04-Nuevo-Sitio/Tech-Stack-Nuevo|🛠️ Tech Stack Nuevo]]
