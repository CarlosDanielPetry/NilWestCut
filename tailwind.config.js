/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: '#D4AF37',
        dark: '#121212',
      },
      animation: {
        'slow-spin': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};