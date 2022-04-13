const colors = require("tailwindcss/colors");

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
  },
  plugins: [],
};
