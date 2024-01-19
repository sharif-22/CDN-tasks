/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./assets/**/*.{js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#F2F2F2",
          black: "#262626",
          100: "#F25C05",
          200: "#F24405",
          300: "#8C3908",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
