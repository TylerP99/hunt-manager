/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "darkBlue": "#11224D",
        "blue": "#193A6F",
        "lightBlue": "#2C599D",
        "lighterBlue": "#5B84C4",
        "orange": "#F98125",
        "lightOrange": "#FB9B50",
      },
    },
  },
  plugins: [],
}
