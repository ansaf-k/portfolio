/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        red: "#E50010",
        beige: "#E5C9B6",
        gray: "#2C2C2C",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}