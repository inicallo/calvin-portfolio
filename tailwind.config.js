/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#CF1919',
        secondary: '#64748b',
        dark1: '#020617',
      }, 
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

