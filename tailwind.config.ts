import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5f429c',
        cyan: '#3ab0cb',
        'dark-blue': '#0f0c29',
        'mid-blue': '#302b63',
        'light-blue': '#24243e',
      },
      backgroundImage: {
        'gradient-purple-cyan': 'linear-gradient(135deg, #5f429c, #3ab0cb)',
        'gradient-cyan-purple': 'linear-gradient(135deg, #3ab0cb, #5f429c)',
        'gradient-bg': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config