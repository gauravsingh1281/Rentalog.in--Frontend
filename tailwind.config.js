/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "450px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primaryGreen": "#1ABC9C",
      "customRed": "#CD4347",
      "green": "#1ABC93",
      "green-dark": "#047558",
      "textBlack": "#312F2F",
      "textWhite": "#F8F8F8",
      "black": "#000000",
      "gray-dark": "#273444",
      "gray": "#8492a6",
      "gray-light": "#d3dce6",
      "light-blue":"#e8f8f4"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif","Arial"],
      serif: ["Merriweather", "serif"],
      monsterrat: ["Montserrat", "sans-serif"],
    },
    boxShadow: {
      'widget': '5px 5px #e5fcc2;',
      'widget-hover': '3px 3px #e5fcc2;',
    },
  },
  plugins: [],
};
