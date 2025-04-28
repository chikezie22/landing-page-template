/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#0EAF4B"
        },
        "added-items":"#FF0000"
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        montserrat: [ "Montserrat", 'sans-serif']
      },
      transitionTimingFunction: {
        'custom': "cubic-bezier(0, 1.32, 0.22, 0.9)", 
      },
      backgroundImage: {
        'hero-bg' : "url('/assets/images/hero.png')"
      },
    },
  },
  plugins: [],
}

