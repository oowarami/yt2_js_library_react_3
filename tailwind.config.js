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
        'secondary': '#B88E2F',
        'box': '#F4F5F7',
        'box-light':'#F9F1E7',
        'med-gray':'#898989',
        'light-gray':'#B0B0B0',
        'inspiration': '#FCF8F3'
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

