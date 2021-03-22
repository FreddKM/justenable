const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // screens: {
      //   light: { raw: "(prefers-color-scheme: light)" },
      //   dark: { raw: "(prefers-color-scheme: dark)" },
      // },
      colors: {
        // Build your palette here
        transparent: "transparent",
        // current: "currentColor",
        // gray: colors.trueGray,
        // red: colors.red,
        // 'blue': colors.lightBlue,
        // yellow: colors.amber,
        orange: colors.orange,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    // function ({ addBase, config }) {
    //   addBase({
    //     body: {
    //       color: config("theme.colors.black"),
    //       backgroundColor: config("theme.colors.white"),
    //     },
    //     "@screen dark": {
    //       body: {
    //         color: config("theme.colors.white"),
    //         backgroundColor: config("theme.colors.black"),
    //       },
    //     },
    //   });
    // },
  ],
};
