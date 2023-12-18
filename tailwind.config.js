/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#03C988",
        secondary: "#BDD2B6",
        default: "#f6fffaad",
        gray: {
          200: "#F6F6F6",
          300: "#dfdfdf",
        },
      },
      gridTemplateRows: {
        7: "repeat(7, 60px)",
      },
    },
  },
  plugins: [],
};
