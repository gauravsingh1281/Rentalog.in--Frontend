/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'background-color, border-color, color',
        'shadow': 'box-shadow',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryGreen: "#1ABC9C",
      customRed: "#CD4347",
      green: "#cd4347",
      "green-dark": "#047558",
      textBlack: "#312F2F",
      textWhite: "#F8F8F8",
      black: "#000000",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "light-blue": "#e8f8f4",
    },
    fontFamily: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        monsterrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"], 
        roboto: ["Roboto", "sans-serif"], 
      },
      
    },
    boxShadow: {
      widget: '3px 3px #b9c3c1',
      'widget-hover': '5px 5px #b9c3c1',
    },
  },
  plugins: [],
};
