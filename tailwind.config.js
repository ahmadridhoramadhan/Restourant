/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./**/**/**/*.html", "./**/**/**/**/*.html"],
  theme: {
    extend: {
      backgroundSize:{
        'half' : "50%",
      },
      colors: {
        primary: '#fca311',
        secondary: '#14213d',
        tertiary: '#e5e5e5',
      },
    },
  },
  plugins: [],
}