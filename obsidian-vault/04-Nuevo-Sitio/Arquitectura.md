# 🏗️ Arquitectura del Nuevo Sitio — Astro

---

## Principios de Diseño

1. **Photography First** — Las imágenes mandan, el texto las acompaña
2. **Performance First** — Lighthouse > 95 en todas las páginas
3. **SEO First** — Cada página optimizada para su keyword principal
4. **Bilingual Ready** — Inglés primario, español secundario
5. **Conversion Focused** — Cada página tiene un CTA claro
6. **Content Editable** — Miguel puede actualizar contenido vía MDX/CMS headless

---

## Sitemap Completo

```
caboimage.com/
│
├── / (Homepage)
│   ├── Hero — "Los Cabos Wedding Photographer"
│   ├── Featured Gallery — mejores 6-9 imágenes
│   ├── Services Overview — 7 servicios en cards
│   ├── About Snippet — Miguel Ventura + link a About
│   ├── Testimonials Carousel
│   ├── Instagram Feed
│   └── CTA — "Book a Consultation"
│
├── /about
│   ├── Historia de Miguel
│   ├── Filosofía fotográfica
│   ├── Equipo y proceso
│   └── CTA booking
│
├── /services (Overview)
│   ├── Cards de los 7 servicios
│   └── Link a cada servicio individual
│
├── /services/wedding-photography ⭐
│   ├── Hero gallery
│   ├── Descripción del servicio
│   ├── Las 8 categorías de cobertura
│   ├── Venues de Los Cabos
│   ├── Proceso: consulta → boda → entrega
│   ├── Testimonials específicos de bodas
│   └── CTA + Formulario de cotización
│
├── /services/portrait-photography
├── /services/real-estate-photography
├── /services/architecture-photography
├── /services/fine-art-photography
├── /services/advertising-photography
├── /services/commercial-travel-photography
│
├── /gallery (Hub de galerías)
│   ├── Filtro por categoría
│   └── Grid masonry de mejores imágenes
│
├── /gallery/weddings
│   ├── /gallery/weddings/details
│   ├── /gallery/weddings/getting-ready
│   ├── /gallery/weddings/ceremony
│   ├── /gallery/weddings/bride-and-groom
│   ├── /gallery/weddings/brides
│   ├── /gallery/weddings/love
│   └── /gallery/weddings/groups
│
├── /gallery/portraits
├── /gallery/real-estate
├── /gallery/fine-art
│
├── /blog
│   ├── /blog/[slug] — Posts individuales
│   └── Temas sugeridos:
│       ├── "Best Wedding Venues in Los Cabos 2025"
│       ├── "How to Choose Your Los Cabos Wedding Photographer"
│       ├── "Los Cabos Wedding Planning Guide"
│       ├── "Palmilla Resort Wedding Photography"
│       └── "Golden Hour Photography in Cabo"
│
├── /contact
│   ├── Formulario inteligente (tipo de servicio, fecha, presupuesto)
│   ├── Información de contacto
│   ├── Mapa de Los Cabos
│   └── WhatsApp link
│
└── /es/ (Versión en español — Fase 2)
```

---

## Páginas Prioritarias para Lanzamiento (MVP)

| Prioridad | Página | Razón |
|-----------|--------|-------|
| 1 | `/` | Primera impresión |
| 2 | `/services/wedding-photography` | Principal generador de leads |
| 3 | `/gallery/weddings` | Prueba social visual |
| 4 | `/contact` | Conversión |
| 5 | `/about` | Confianza |
| 6 | `/gallery` (hub) | Exploración |
| 7-13 | Servicios individuales | SEO de largo plazo |
| 14+ | Blog posts | SEO de contenido |

---

## Diseño de Layouts

### Layout Homepage
```
[NAVBAR — Logo + Nav minimalista]
[HERO — Full screen image con overlay text]
[FEATURED WORK — Grid 3x2 con hover effects]
[SERVICES — 7 cards con iconos elegantes]
[ABOUT — 50/50 imagen + texto]
[TESTIMONIALS — Carousel con fotos de bodas]
[INSTAGRAM — 6-9 últimas fotos]
[FOOTER — Links + Redes + Copyright]
```

### Layout Service Page
```
[HERO — Imagen del servicio + Headline]
[INTRO — 2-3 párrafos + quote]
[GALLERY PREVIEW — 6 mejores imágenes]
[PROCESS — Timeline del proceso]
[TESTIMONIALS — Específicos del servicio]
[FAQ — 5-7 preguntas frecuentes]
[CTA FORM — Formulario de cotización]
```

### Layout Gallery
```
[HEADER — Categoría + descripción]
[MASONRY GRID — Lightbox al hacer click]
[NAVIGATION — Entre categorías]
```

---

## Colores Propuestos

```
Primarios:
  --color-bg: #0A0A0A        (negro casi puro)
  --color-text: #F5F0EB      (blanco cálido)
  --color-accent: #C8A97E    (dorado arena — Los Cabos)

Secundarios:
  --color-surface: #141414   (negro suave)
  --color-muted: #6B6B6B     (gris medio)
  --color-border: #2A2A2A    (borde sutil)
```

> Inspiración: La arena dorada del desierto de Los Cabos, el oscuro del océano Pacífico, el calor del atardecer en el arco de Cabo San Lucas.

---

## Tipografía Propuesta

```
Headings: Cormorant Garamond (serif elegante)
Body: Inter (sans-serif limpio)
Accent/Quotes: Playfair Display (serif dramático)
```

---

## Referencias
- [[Sitemap|📄 Sitemap Detallado]]
- [[Componentes-Astro|⚡ Componentes Astro]]
- [[../07-Astro-Dev/Setup-Inicial|🛠️ Setup Inicial]]
- [[../02-Sitio-Actual/Problemas-y-Oportunidades|🎯 Problemas y Oportunidades]]
