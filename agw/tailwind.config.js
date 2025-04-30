/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0EAF4B",
        },
        "added-items": "#FF0000",
        card:"#F3F3F3",
        cart:"#70798B",
        orange: "#FB8A2E",
        "tsm-dark":'#444444',
        'tsm-dark-1': "#262626",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0, 1.32, 0.22, 0.9)",
      },
      backgroundImage: {
        'hero-bg': "url('/assets/images/hero.png')",
        'dark-gradient': 'linear-gradient(to bottom, #1E1C1C 0%, #232121D9 20%, #272525CC 40%, #343333B3 60%, #46454599 80%, #5A5A5A80 100%)',
        'tsm-gradient': 'linear-gradient(to bottom, #8A888866 50%, #5A5A5A00 100%)',
      },
    },
  },
  plugins: [],
}
