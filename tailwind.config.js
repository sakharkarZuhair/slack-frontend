// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'calc-screen': 'calc(100vh - 50px)', // Add custom height
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#611f69', // Main primary color
          light: '#7a2f85', // Light version
          dark: '#4a1750', // Dark version
        },
        secondary: {
          DEFAULT: '#f4ede4', // Main secondary color
          light: '#fbf9f7', // Lighter version
          dark: '#e0d6cd', // Darker version
        },
        tertiary: {
          DEFAULT: '#696969', // Main tertiary color
          light: '#828282', // Light version
          dark: '#4f4f4f', // Dark version
        },
      },
    },
  },
  plugins: [],
}
