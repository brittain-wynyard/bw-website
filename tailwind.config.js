/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'transparent': 'transparent',
        'bw-white': '#FAF5F0',
        'bw-black': '#232323',
        'bw-green': '#004926',
        'bw-grey': '#CCCCCC'
      },
      fontFamily: {
        'sans': ['Untitled', 'Helvetica', 'Arial', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
