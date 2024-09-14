/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09080d",
        muted: "#85a3b9",
        grey: "#1b2730",
        lightgrey: "#dbeaee",
        darkgrey: "#28343e",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
