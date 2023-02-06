/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gras': '#33ff33',
      },
      backgroundImage: {
        'bg-grid': "url('./images/grid.jpg')",
      }
    },
  },
  plugins: [],
}

