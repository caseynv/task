const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '200px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
