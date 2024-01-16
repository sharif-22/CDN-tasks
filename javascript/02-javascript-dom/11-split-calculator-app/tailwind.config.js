/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/**/*.{js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C1CED9",
          200: "#7B92A6",
          300: "#405F73",
          400: "#011126",
        },
      },
    },
  },
  plugins: [],
};
