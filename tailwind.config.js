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
        // primary: "#06923E",
        primary: "#0ABAB5",
        secondary: "#BDD2B6",
        default: "#f6fffaad",

        green: {
          500: "#2FAB73",
        },
        // white: {
        //   300: "#F8F8F8",
        //   500: "#fff",
        // },
        gray: {
          100: "#EEEFF2",
          200: "#F5F7F8",
          300: "#e9e9e9",
          400: "#AFB5C0",
          500: "#DDDDDD",
        },
      },
      gridTemplateRows: {
        7: "repeat(7, 60px)",
      },
    },
    boxShadow: {
      sm: "rgba(0, 0, 0, 0.12) 2px 2px 10px, rgba(0, 0, 0, 0.14) 2px 2px 2px",
      DEFAULT:
        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange:
        "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
