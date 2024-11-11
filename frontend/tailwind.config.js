/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B3B58',
        bgLight: {
          100: "#FFFAFA",
          200: "#F5F5F5",
          300: "#FFFFF0",
          400: "#F0FFFF",
          500: "#F5FFFA"
        },
        secondary: {
          100: '#1C8185',
          200: '#176569'
        },
        banner: {
          100: "#27273B",
          200: "#0A273B"
        },
        card: {
          100: "#a471b0",
          200: "#7c5585",
        }
      },
      fontFamily: {
        body: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}

