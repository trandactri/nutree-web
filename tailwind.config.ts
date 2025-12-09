import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Primary
        primary: {
          forest: '#1A4739',
          teal: '#29B6A1',
          emerald: '#2D8B70',
        },
        // Aurora Effects
        aurora: {
          green: 'rgba(45, 139, 112, 0.35)',
          teal: 'rgba(41, 182, 161, 0.28)',
          mint: 'rgba(167, 243, 208, 0.2)',
        },
        // Semantic
        background: '#FAFCFB',
        foreground: '#0F1F1A',
        muted: '#6B7B75',
        border: '#D4E5DE',
        // Nutrition
        nutrition: {
          protein: '#E91E63',
          carbs: '#FFC107',
          fat: '#9C27B0',
          calories: '#FF5722',
        },
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1A4739 0%, #29B6A1 100%)',
        'gradient-aurora': 'radial-gradient(ellipse at top left, rgba(45, 139, 112, 0.35) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(41, 182, 161, 0.28) 0%, transparent 50%)',
      },
      animation: {
        'aurora-shift': 'aurora-shift 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        'aurora-shift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, 2%) scale(1.02)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
