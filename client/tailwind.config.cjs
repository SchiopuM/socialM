/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ACFF',
      },
      spacing: {
        layout: '8.75rem',
      },
    },
  },
  plugins: [],
};
