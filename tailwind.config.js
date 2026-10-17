/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#c4a35a',
          DEFAULT: '#8b6914',
          dark: '#6b5110',
        },
        cream: {
          light: '#faf8f5',
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d5',
        },
        navy: {
          dark: '#2c2416',
          muted: '#5c4d3c',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
