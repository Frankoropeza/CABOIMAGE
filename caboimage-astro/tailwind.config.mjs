/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  darkMode: 'class',

  theme: {
    extend: {
      // ── BRAND COLORS ──────────────────────────────────────────────
      // Inspiración: arena dorada de Los Cabos, Pacífico oscuro, atardecer en el Arco
      colors: {
        // Backgrounds
        'cabo-black':   '#080808',
        'cabo-surface': '#141414',
        'cabo-card':    '#1A1A1A',

        // Borders
        'cabo-border':  '#242424',
        'cabo-divider': '#2A2A2A',

        // Text
        'cabo-white':   '#F5F0EB',
        'cabo-muted':   '#B0A99F',
        'cabo-subtle':  '#6B6B6B',

        // Brand accent — Arena dorada de Los Cabos
        'cabo-gold': {
          DEFAULT: '#C8A97E',
          light:   '#D9C09D',
          dark:    '#A8895E',
          muted:   '#C8A97E40',
        },

        // State colors
        'cabo-success': '#9FC87E',
        'cabo-info':    '#7EB8C8',
        'cabo-warning': '#C8C07E',
      },

      // ── TYPOGRAPHY ────────────────────────────────────────────────
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.005em'}],
      },

      // ── SPACING ───────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      // ── LAYOUT ────────────────────────────────────────────────────
      maxWidth: {
        'site':    '1440px',
        'content': '800px',
        'narrow':  '640px',
      },

      // ── ANIMATION ─────────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: '300ms',
        fast:    '150ms',
        slow:    '500ms',
        xslow:   '800ms',
      },

      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':  'cubic-bezier(0.7, 0, 0.84, 0)',
        'spring':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-in':   'fade-in 0.6s ease-out forwards',
        'fade-up':   'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fade-down 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in':  'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer':   'shimmer 2.5s linear infinite',
      },

      // ── BORDERS ───────────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ── SHADOWS ───────────────────────────────────────────────────
      boxShadow: {
        'gold-sm': '0 0 15px rgba(200,169,126,0.15)',
        'gold-md': '0 0 30px rgba(200,169,126,0.2)',
        'gold-lg': '0 0 60px rgba(200,169,126,0.25)',
        'image':   '0 25px 60px rgba(0,0,0,0.5)',
      },

      // ── ASPECT RATIOS ─────────────────────────────────────────────
      aspectRatio: {
        'photo':     '4 / 3',
        'portrait':  '3 / 4',
        'landscape': '16 / 9',
        'square':    '1 / 1',
        'cinematic': '21 / 9',
      },

      // ── BACKDROP ──────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
