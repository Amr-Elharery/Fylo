/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67dbda",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        "2xl": "1400px",
      },
      keyframes: {
        moveRight: {
          "0%": {
            translate: "0 0",
          },
          "50%": {
            translate: "5px 0",
          },
          "100%": {
            translate: "0 0",
          },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
