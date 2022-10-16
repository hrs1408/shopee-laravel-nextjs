/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        width: {
          DEFAULT: '1200px'
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
