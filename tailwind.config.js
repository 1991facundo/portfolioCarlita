/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#E5E2C8',
      },
      fontFamily: {
        amsterdam: ['"Amsterdam two"', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
