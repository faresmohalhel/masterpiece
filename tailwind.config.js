/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0ea5e9",
        "secondary-color": "#5bc091",
        "primary-text": "#1f2937",
        gold: "#fbbf24",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
});
