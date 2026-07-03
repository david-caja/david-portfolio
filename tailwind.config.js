/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       
      colors: {
        primary: '#00ff95', // Le vert néon signature du design
        darkBg: '#070707',  // Le noir profond du fond
      },
    },
  },
  plugins: [],
}