/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#127C71',
          tealDark: '#0d5d55',
          tealLight: '#E8F5F3',
          orange: '#F89B29',
          orangeLight: '#FFF8ED',
          bgLight: '#F7FAFC',
        }
      }
    },
  },
  plugins: [],
}