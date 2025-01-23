/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1F1F1F",
        orange: "#FF4C00",
        beige: "#CDCABB",
      },
    },
  },
  plugins: [],
}