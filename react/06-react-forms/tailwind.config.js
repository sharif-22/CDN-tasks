/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,json}"],
  theme: {
    extend: {
      keyframes: {
        rubberBand: {
          "0% , 100%": {
            transform: "scale(0.9)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        rubberBand: "rubberBand 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
