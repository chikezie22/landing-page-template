/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors:{
        primary:{
          DEFAULT: '#FF40C6',
          dark:'#1E1E1E',
          active:'#B80382'
        },
        secondary:'#606060',
        "hero-bg":"#F2F2F2",
      },
      keyframes:{
        blink: {
          '50%': { opacity: 0 },
          '100%': { opacity : 1 },
        },
        fade:{
          '50%': { color: "theme('colors.primary.DEFAULT')" },
          '100%': { color : "theme('colors.primary.dark')" },
        }
      },
      animation : {
        cursor: "blink 1000ms infinite",
        "fade-in": "fade 100ms forwards"
      }
      
    },
  },
  plugins: [],
}

