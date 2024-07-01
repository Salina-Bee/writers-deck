/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B3B58',
        secondary: {
          100: '#1C8185',
          200: '#176569'
        },
        banner: {
          100: "#27273B",
          200: "#0A273B"
        }
      },
      fontFamily: {
        body: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}

