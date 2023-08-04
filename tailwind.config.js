/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins',
      },
      colors: {
        primary: '#F8F7FC',
        secondary: '#7F56D9',
        blue: '#6E64E8',
        bagblue: '#E8E6F9',
        darkText: '#2F2C50',
      },
    },
  },
  plugins: [],
};
