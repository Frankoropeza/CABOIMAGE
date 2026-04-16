# Cabo Image — Astro Website

Professional photography website for **Cabo Image by Miguel Ventura**, Los Cabos, BCS, Mexico.

Built with [Astro](https://astro.build) · [Tailwind CSS](https://tailwindcss.com) · [MDX](https://mdxjs.com)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Fill in your .env values (WhatsApp number, email, etc.)

# 4. Start development server
npm run dev
# → http://localhost:4321
```

## Build & Deploy

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
caboimage-astro/
├── public/                    # Static files (favicon, robots.txt, images/)
├── src/
│   ├── content/               # ← All editable content lives here
│   │   ├── config.ts          # Content collection schemas (Zod)
│   │   ├── services/          # 7 service .md files
│   │   ├── blog/              # Blog posts (.mdx)
│   │   ├── gallery/           # Gallery metadata (.json)
│   │   └── testimonials/      # Testimonials (.json)
│   ├── layouts/               # Page layout wrappers
│   │   ├── BaseLayout.astro   # HTML shell + SEO + fonts
│   │   ├── PageLayout.astro   # Standard page (Header + Footer)
│   │   ├── ServiceLayout.astro # Service pages
│   │   └── BlogLayout.astro   # Blog post pages
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── ui/                # Button, ContactForm, WhatsApp, SectionHeader
│   │   ├── services/          # ServiceCard
│   │   ├── gallery/           # GalleryGrid (with lightbox)
│   │   └── blog/              # BlogCard
│   ├── pages/                 # URL routes
│   │   ├── index.astro        # Homepage (design pending)
│   │   ├── about.astro        # About Miguel
│   │   ├── contact.astro      # Contact / inquiry form
│   │   ├── 404.astro          # Not found page
│   │   ├── services/
│   │   │   ├── index.astro    # Services overview
│   │   │   └── [slug].astro   # Dynamic service pages
│   │   ├── gallery/
│   │   │   ├── index.astro    # Gallery hub
│   │   │   └── [category].astro # Category galleries
│   │   └── blog/
│   │       ├── index.astro    # Blog index
│   │       └── [slug].astro   # Individual posts
│   └── styles/
│       └── global.css         # Tailwind + custom CSS
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind + brand colors
├── tsconfig.json              # TypeScript paths
└── .env.example               # Environment variables template
```

## Content Editing

### Add a Blog Post
Create a new `.mdx` file in `src/content/blog/`:

```md
---
title: "Your Post Title"
description: "Short description for SEO"
pubDate: 2025-06-01
tags: ["weddings", "los-cabos"]
category: "weddings"
heroImage: "/images/blog/your-image.jpg"
---

Your content here in Markdown...
```

### Update Service Content
Edit any `.md` file in `src/content/services/`. The frontmatter controls SEO, the body is the prose content.

### Add Gallery Images
1. Put images in `public/images/gallery/[category]/`
2. Update `src/content/gallery/[category].json` with the metadata

### Add Testimonials
Edit `src/content/testimonials/testimonials.json` — add a new object to the array.

## Brand Colors (Tailwind classes)

| Class | Color | Use |
|-------|-------|-----|
| `bg-cabo-black` | `#080808` | Page backgrounds |
| `bg-cabo-surface` | `#141414` | Section backgrounds |
| `bg-cabo-card` | `#1A1A1A` | Card backgrounds |
| `text-cabo-white` | `#F5F0EB` | Primary text |
| `text-cabo-muted` | `#B0A99F` | Body text |
| `text-cabo-gold` | `#C8A97E` | Brand accent |
| `border-cabo-border` | `#242424` | Default borders |

## Deploy Options

### Vercel (Recommended)
```bash
npm i -g vercel && vercel --prod
```

### Netlify
Connect GitHub repo → Build command: `npm run build` → Publish dir: `dist/`

### Cloudflare Pages
Connect GitHub repo → Build command: `npm run build` → Publish dir: `dist/`

---

## Next Steps (Design Phase)

- [ ] Build `Hero.astro` component for homepage
- [ ] Build `FeaturedWork.astro` component
- [ ] Build `ServicesOverview.astro` component
- [ ] Build `AboutSnippet.astro` component
- [ ] Build `Testimonials.astro` component
- [ ] Add real photography images to `/public/images/`
- [ ] Fill in `.env` with actual contact info
- [ ] Update social media URLs in Footer.astro
- [ ] Set up Google Business Profile
- [ ] Configure Formspree or Netlify Forms

---

*Built for Cabo Image · caboimage.com*
