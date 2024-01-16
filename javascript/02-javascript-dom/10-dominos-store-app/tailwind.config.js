/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/**/*{js,jsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
