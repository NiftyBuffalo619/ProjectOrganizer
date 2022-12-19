/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#3b4446',
        },
        blue: {
          900: '#132D46'
        },
        lime: {
          900: '#2dbe60'
        },
      }
    },
  },
  plugins: [],
}
