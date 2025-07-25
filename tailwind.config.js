/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '32px',
      },
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
