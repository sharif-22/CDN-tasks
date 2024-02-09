/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,html}"],
  theme: {
    extend: {
      keyframes: {
        rubberBand: {
          "0% , 100%": {
            transform: "scaleX(1)",
          },
          "50%": {
            transform: "scaleX(1.5)",
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
