
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["'Orbitron'", "sans-serif"],
        exo2: ["'Exo 2'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
