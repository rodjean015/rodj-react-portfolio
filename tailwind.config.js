/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode based on a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specifies the paths to your content files
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradientBG 5s ease infinite', // Defines the gradient animation
      },
      keyframes: {
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' }, // Starting position
          '50%': { backgroundPosition: '100% 50%' }, // Midway position
          '100%': { backgroundPosition: '0% 50%' }, // Ending position
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adds Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
};
