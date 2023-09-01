/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primaryGreen": "#1ABC9C",
      "customRed": "#CD4347",
      "green": "#1ABC93",
      "textBlack": "#312F2F",
      "textWhite": "#F8F8F8",
      "black": "#000000",
      "gray-dark": "#273444",
      "gray": "#8492a6",
      "gray-light": "#d3dce6",
      "blue": "#00838F",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      monsterrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
