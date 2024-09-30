module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '18px': '18px',
        '20px': '20px',
      },
      colors: {
        customGray: '#f5f5f5',
        customGreen: '#03c03c'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
