/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#4A4A4A",
        primary: "#242424",
        secondary: "#983494",
      }
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
}

