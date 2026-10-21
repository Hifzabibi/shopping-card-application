
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beautyPink: "#E91E63",
        deepRose: "#C2185B",
        softPink: "#F8BBD0",
        blush: "#FCE4EC",
        lightBlush: "#FFF5F8",
        darkText: "#2B2528",
        mutedText: "#777277",
        beautyBorder: "#F1DDE4",
      },
    },
  },
  plugins: [],
};
