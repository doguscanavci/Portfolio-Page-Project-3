/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4731D3',
        primaryLight: '#8F88FF',
        primaryDark: '#171043',
      },
    },
  },
  plugins: [],
}