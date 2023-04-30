/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0ea5e9",
        "primary-text": "#1f2937",
        gold: "#fbbf24",
        white: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
