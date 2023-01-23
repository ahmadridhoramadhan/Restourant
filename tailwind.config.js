/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./**/**/*.html"],
  theme: {
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'half' : "50%",
    },
    extend: {},
  },
  plugins: [],
}