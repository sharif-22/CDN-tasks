/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "fff",
        secondary: "#118C8C",
        danger: "#A60A33",
        danger2: "#F25E7A",
        warn: "#F26B1D",
      },
      keyframes: {
        slideDown: {
          "0% , 100%": {
            transform: "rotate(2deg)",
          },
          "50%": {
            transform: "rotate(-2deg)",
          },
          "100%": {
            transform: "rotate(2deg)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
