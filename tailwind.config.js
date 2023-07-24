/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxxs': '300px',
      'xxs': '360px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

