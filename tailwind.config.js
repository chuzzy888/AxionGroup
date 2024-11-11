/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#002B5C",
        lightRed: "#D32F2F",
        lightRedHover: "#C62828",
        white: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
