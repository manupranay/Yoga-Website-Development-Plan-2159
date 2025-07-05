/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#faf7ff',
          100: '#f3ebff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b46c1',
          900: '#581c87',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#9fb09f',
          400: '#748674',
          500: '#5a6b5a',
          600: '#475547',
          700: '#3a443a',
          800: '#313931',
          900: '#2a302a',
        },
        beige: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#faf0de',
          300: '#f5e4c1',
          400: '#efd49d',
          500: '#e7c074',
          600: '#dca850',
          700: '#c18d3c',
          800: '#9e7135',
          900: '#805d30',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        'about-pattern': "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}