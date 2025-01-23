/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbrown: "#2e2b22",
        olive: "#a2b08c",
        beige: "#dad7c6",
        gray: "#887e74",
      },
    },
  },
  plugins: [],
}