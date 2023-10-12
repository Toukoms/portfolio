/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        montserrat: ['var(--font-montserrat)'],
        "bebas-neue": ['var(--font-bebas-neue)'],
      }
    },
  },
  plugins: [],
}

