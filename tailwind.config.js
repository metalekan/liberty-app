/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
      clash: ['Bungee', 'cursive']
    }
  },
  plugins: [],
}