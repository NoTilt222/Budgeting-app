/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./+(blocks|components|layouts|pages|ui)/**/*.+(html|js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#999b9e",
          500: "#EECD55",
          600: "#FECF4E",
        },
      },
    },
  },
  plugins: [],
};
