/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#B88E2F'
      },
      fontFamily:{
        poppins: 'Poppins'
      },
      screens: {
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}

