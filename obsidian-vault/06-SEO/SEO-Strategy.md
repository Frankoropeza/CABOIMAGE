# 🔍 Estrategia SEO — Cabo Image

---

## Objetivo SEO

> Posicionar caboimage.com como **el referente de fotografía de bodas en Los Cabos** en Google, capturando búsquedas internacionales de parejas que planean su boda en destino.

---

## Keywords Principales

### Tier 1 — Alto Volumen / Alta Conversión

| Keyword | Volumen Est. | Dificultad | Intención |
|---------|-------------|------------|-----------|
| wedding photographer Los Cabos | 2,400/mes | Media | Comercial |
| Los Cabos wedding photography | 1,900/mes | Media | Comercial |
| Cabo San Lucas wedding photographer | 1,600/mes | Media | Comercial |
| destination wedding photographer Mexico | 800/mes | Alta | Comercial |

### Tier 2 — Long Tail / Alta Conversión

| Keyword | Volumen Est. | Dificultad | Página |
|---------|-------------|------------|--------|
| best wedding photographer Los Cabos | 400/mes | Media | /services/wedding |
| Los Cabos wedding photography packages | 300/mes | Baja | /services/wedding |
| San José del Cabo photographer | 200/mes | Baja | /about |
| Palmilla resort wedding photographer | 150/mes | Baja | /blog post |
| Esperanza Auberge wedding photography | 120/mes | Baja | /blog post |

### Tier 3 — Real Estate / Arquitectura

| Keyword | Volumen Est. | Página |
|---------|-------------|--------|
| real estate photographer Los Cabos | 200/mes | /services/real-estate |
| luxury real estate photography Cabo | 100/mes | /services/real-estate |
| architectural photography Los Cabos | 80/mes | /services/architecture |

---

## Schema Markup Plan

### Homepage
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cabo Image",
  "image": "https://caboimage.com/og-image.jpg",
  "description": "Professional wedding and portrait photographer in Los Cabos, Baja California Sur, Mexico.",
  "url": "https://caboimage.com",
  "telephone": "+52-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Cabos",
    "addressRegion": "Baja California Sur",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.8905,
    "longitude": -109.9167
  },
  "areaServed": ["Los Cabos", "Cabo San Lucas", "San José del Cabo"],
  "priceRange": "$$$$",
  "sameAs": [
    "https://instagram.com/caboimage",
    "https://facebook.com/caboimage"
  ]
}
```

### Service Pages
```json
{
  "@type": "Service",
  "serviceType": "Wedding Photography",
  "provider": {"@id": "https://caboimage.com/#business"}
}
```

### Blog Posts
```json
{
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "Miguel Ventura"
  }
}
```

---

## Open Graph / Social Media

### Plantilla de Meta Tags (Astro)
```astro
---
// En cada página
const { title, description, image } = Astro.props;
---
<title>{title} | Cabo Image</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Estrategia de Contenido Blog

### Posts de Alto Impacto SEO (Año 1)

| Post | Keyword objetivo | Volumen |
|------|-----------------|---------|
| "Best Wedding Venues in Los Cabos 2025" | best wedding venues los cabos | 600/mes |
| "How to Choose Your Los Cabos Wedding Photographer" | los cabos wedding photographer tips | 300/mes |
| "Palmilla Resort Wedding: Complete Guide" | Palmilla resort wedding | 150/mes |
| "Esperanza Auberge Wedding Photography" | Esperanza wedding photography | 120/mes |
| "Los Cabos Wedding Planning Guide" | los cabos wedding planning | 400/mes |
| "Golden Hour at The Arch, Cabo San Lucas" | arch cabo san lucas photos | 200/mes |
| "Luxury Real Estate Photography in Los Cabos" | real estate photographer cabo | 200/mes |

---

## Estrategia Local SEO

### Google Business Profile
- [ ] Crear/reclamar perfil de Google Business
- [ ] Categoría principal: "Wedding Photographer"
- [ ] Categorías secundarias: Photographer, Commercial Photographer
- [ ] Fotos: mínimo 30 fotos de alta calidad
- [ ] Reseñas: estrategia de solicitud post-boda
- [ ] Posts semanales en GBP

### Citations (Directorios)
- [ ] Yelp
- [ ] WeddingWire
- [ ] The Knot
- [ ] Junebug Weddings
- [ ] Green Wedding Shoes
- [ ] Style Me Pretty
- [ ] Instagram (optimizar bio)

---

## Métricas de Éxito (6 meses)

| Métrica | Actual | Objetivo 6 meses |
|---------|--------|-----------------|
| Organic traffic | ~100/mes | 1,000/mes |
| "wedding photographer los cabos" | Sin ranking | Top 5 |
| Google Business views | Desconocido | 500/mes |
| Contact form submissions | Desconocido | 20/mes |
| Lighthouse SEO score | ~50 | 100 |

---

## Referencias
- [[Keywords-Principales|🔑 Keywords Detalladas]]
- [[../04-Nuevo-Sitio/Arquitectura|🏗️ Arquitectura del Sitio]]
- [[../05-Contenido/Copy-Homepage|✍️ Copy Homepage]]
