/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29C26F'
      },
    },
    colors: {
      primary: {
        200: '#FFFFFF',
        400: '#B64D80',
        500: '#CD6899',
        600: '#99235C',
      },
      grayscale: {
        25: '#E4E2DD',
        50: '#CD6899',
        100: '#EFEFEF',
        200: '#FDFDFF',
        950: '#823A5D',
      },
    },
  },
  plugins: [],
};
