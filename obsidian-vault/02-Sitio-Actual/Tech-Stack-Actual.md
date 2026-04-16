# ⚙️ Tech Stack Actual — caboimage.com

---

## Stack de Producción

| Capa | Tecnología | Estado |
|------|-----------|--------|
| CMS | WordPress | ⚠️ Funcional pero desactualizado |
| Page Builder | WPBakery Page Builder | ❌ Genera HTML pesado |
| Tema | BeTheme (betheme-child) | ⚠️ Tema genérico |
| Formularios | Contact Form 7 | ✅ Funcional |
| Performance | LiteSpeed Lazy Load | ✅ Parcialmente optimizado |
| JavaScript | jQuery + WPBakery JS | ❌ Bundle pesado |
| Imágenes | WordPress default | ⚠️ Sin optimización automática |

---

## Problemas del Stack Actual

```
WordPress + WPBakery
├── HTML generado: 300+ líneas de divs anidados por sección
├── JS bundle: ~500KB sin minificación
├── CSS bloqueante: múltiples hojas de estilo
├── Tiempo de carga estimado: 3-6 segundos
├── Core Web Vitals: LCP > 3s (FAIL)
└── Mantenimiento: requiere actualizaciones constantes
```

---

## Stack Propuesto — Nuevo Sitio

| Capa | Tecnología | Beneficio |
|------|-----------|-----------|
| Framework | Astro 4.x | SSG, 0 JS por default, ultra rápido |
| Contenido | MDX + Markdown | Fácil edición, Git-based |
| Estilos | Tailwind CSS | Utility-first, bundle mínimo |
| Galerías | Astro Image + Sharp | WebP automático, responsive |
| Animaciones | Framer Motion / CSS | Sin overhead |
| Formularios | Netlify Forms / Resend | Sin backend |
| Deploy | Vercel / Netlify / Cloudflare Pages | CDN global, gratis |
| CMS Headless | Decap CMS / Tina CMS | Miguel puede editar contenido |
| Analytics | Umami / Plausible | Privacy-first |
| SEO | Astro SEO component | Schema automático |

---

## Comparativa de Performance

| Métrica | Actual (WP) | Objetivo (Astro) |
|---------|-------------|-----------------|
| LCP | ~4s | < 1.2s |
| FID/INP | ~200ms | < 50ms |
| CLS | ~0.3 | < 0.05 |
| Lighthouse Score | ~55-65 | > 95 |
| Bundle JS | ~500KB | < 50KB |
| Imágenes | Sin WebP | WebP + AVIF automático |

---

## Arquitectura de Contenido en MDX

```
src/
├── content/
│   ├── config.ts         # Zod schemas
│   ├── services/         # Un .md por servicio
│   │   ├── wedding.md
│   │   ├── portrait.md
│   │   ├── real-estate.md
│   │   ├── fine-art.md
│   │   ├── advertising.md
│   │   └── commercial-travel.md
│   ├── galleries/        # Metadata de galerías
│   │   ├── wedding-portfolio.md
│   │   └── ...
│   └── blog/             # Posts del blog
│       ├── los-cabos-wedding-venues.md
│       └── ...
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── services/
│   │   └── [slug].astro  # Dynamic routing
│   ├── gallery/
│   │   └── [category].astro
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
└── components/
    ├── Header.astro
    ├── Footer.astro
    ├── GalleryGrid.astro
    ├── ServiceCard.astro
    └── ContactForm.astro
```

---

## Referencias
- [[Auditoria-Completa|← Auditoría Completa]]
- [[../07-Astro-Dev/Setup-Inicial|⚡ Setup Inicial Astro]]
- [[../07-Astro-Dev/Estructura-Carpetas|📁 Estructura de Carpetas]]
