/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#FF566A',
        'user': '#F1F1F1',
        'search':"#F5F7FA",
        'reqtext':'#343C6A',
      },
    },
  },
  plugins: [],
}