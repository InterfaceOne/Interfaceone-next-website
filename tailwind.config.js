/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./pages/**/**/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        gold: "#FFC400",
      },

      textColor: {
        gold: "#FFC400",
      },
      borderColor: {
        gold: "#FFC400",
      },
    },
  },
  variants: {
    brightness: ['hover', 'focus'],

  },
  plugins: [],
};

