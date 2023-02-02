/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
     fontFamily: {
      'mytest': ['Arial', 'sans-serif'],
    }
  },
  plugins: [],
}
