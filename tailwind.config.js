/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./+(blocks|components|layouts|pages|ui)/**/*.+(html|js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#FDFDE2",
          400: "#FFF9BA",
          500: "#FECF4E",
        },
      },
    },
  },
  plugins: [],
};
