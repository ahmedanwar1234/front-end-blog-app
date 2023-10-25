/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        primary: '#1565D8',
dark:{
  hard: '#0D2436',
  soft: '#183B56',
  light:'#5A7184',
},
      },
      fontFamily:{
        opensans:[ 'Open Sans', "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "default", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

