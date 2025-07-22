/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-angular': 'conic-gradient(from 0deg,rgb(253, 194, 0) 35%,rgb(255, 255, 255) 93%, #FFFFFF 94%,rgb(95, 25, 247) 95%)',
      },
      colors: {
        navajowhite: "#efcfa2"
      }
      
    },
  },
  plugins: [],
};