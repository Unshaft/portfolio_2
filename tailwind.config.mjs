import { defineConfig } from 'tailwindcss/helpers';
import colors from 'tailwindcss/colors';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 0.6s ease-out forwards',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        // 👇 On garde les couleurs par défaut + les tiennes
        ...colors,
        charcoal: '#264653',
        gold: '#B48E00',
        slate: '#E0E1E4',
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
