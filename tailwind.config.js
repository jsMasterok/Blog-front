/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   white:"#fff",
    //   main: {
    //     dark: "#000000",
    //     light: "#DEF5E5",
    //   },
    //   secondary: {
    //     dark: "#FB2576",
    //     light: "#BCEAD5",
    //   },
    //   text: {
    //     dark: "#3F0071",
    //     light: "#9ED5C5",
    //   },
    //   tone: {
    //     dark: "#150050",
    //     light: "#8EC3B0",
    //   },
    // },
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),

    // ...
  ],
};
