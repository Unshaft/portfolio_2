import { defineConfig } from 'tailwindcss/helpers';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadein: 'fadein 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-delay-1': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        'slide-up-delay-2': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'slide-up-delay-3': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        charcoal: '#264653',
        gold: '#B48E00',
        'gold-light': '#D4AB2F',
        oldgold: '#A07300',
        slate: '#E0E1E4',
        slate_harder: '#e0e1e4af',
        midnight: '#0B1121',
        'midnight-light': '#111827',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #B48E00, #D4AB2F, #A07300)',
        'dark-mesh': 'radial-gradient(at 20% 80%, rgba(180, 142, 0, 0.08) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(38, 70, 83, 0.1) 0%, transparent 50%)',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};
