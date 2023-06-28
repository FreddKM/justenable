/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        orange: colors.orange,
        amber: colors.amber,
      },
    },
    screens: {
      'xxxs': '300px',
      'xxs': '360px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
