import { defineCollection, z } from 'astro:content';

// ─── SERVICES COLLECTION ──────────────────────────────────────────────────────
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required
    title: z.string(),
    description: z.string(),

    // SEO
    seoTitle: z.string(),
    seoDescription: z.string(),
    keywords: z.array(z.string()),

    // Display
    tagline: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    coverImage: z.string().optional(),

    // Metadata
    order: z.number(),
    featured: z.boolean().default(false),
    active: z.boolean().default(true),

    // Content sections
    galleryCategory: z.string().optional(),
    ctaText: z.string().default('Book a Consultation'),
    ctaUrl: z.string().default('/contact'),

    // Gallery subcategories (for wedding service)
    subcategories: z
      .array(
        z.object({
          name: z.string(),
          slug: z.string(),
          description: z.string(),
        })
      )
      .optional(),

    // FAQ for service pages
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),

    // Schema.org service type
    schemaType: z.string().default('Service'),
  }),
});

// ─── BLOG COLLECTION ──────────────────────────────────────────────────────────
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),

    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),

    // Display
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    draft: z.boolean().default(false),

    // Taxonomy
    tags: z.array(z.string()).default([]),
    category: z
      .enum([
        'weddings',
        'venues',
        'tips',
        'behind-the-scenes',
        'real-estate',
        'los-cabos',
      ])
      .default('los-cabos'),

    // Author
    author: z.string().default('Miguel Ventura'),
    authorImage: z.string().optional(),

    // Related
    relatedPosts: z.array(z.string()).optional(),
    relatedService: z.string().optional(),

    // Social
    ogImage: z.string().optional(),
  }),
});

// ─── GALLERY COLLECTION ───────────────────────────────────────────────────────
const galleryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    order: z.number(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number().optional(),
        height: z.number().optional(),
        caption: z.string().optional(),
        venue: z.string().optional(),
        year: z.number().optional(),
      })
    ),
  }),
});

// ─── TESTIMONIALS COLLECTION ──────────────────────────────────────────────────
const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    service: z.string(),
    rating: z.number().min(1).max(5).default(5),
    quote: z.string(),
    date: z.string(),
    venue: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const collections = {
  services: servicesCollection,
  blog: blogCollection,
  gallery: galleryCollection,
  testimonials: testimonialsCollection,
};
