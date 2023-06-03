/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  mode : 'jit',
  theme: {
    container:{
      center: true,
      padding : {
        default : '1rem',
        sm : '2rem',
        md : '3rem',
        lg : '4rem'
      }
    },
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
      circle: 'circle',
    },
    extend: {
      colors : {
        primary : {
          default : '#00AD85',
          black : '#222831',
          gray : '#393E46',
          white : '#EEEEEE' 
        }
      }
    },
  },
  plugins: [],
}

