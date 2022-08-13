const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins, sans serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#e76f51",
      },
    },
  },
  plugins: [],
};
