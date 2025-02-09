/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {       
        primary: "#C34271",
        secondary: "#F070A1",
        background1: "#16FFBD",
        background2: "#12C998",
        accent: "#439F76",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'], // Define your cursive font
      },
    },
  },
  plugins: [],
};
