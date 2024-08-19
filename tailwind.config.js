/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        PTSerifRegular:["PTSerif-Regular"],
        Latine:["Latine"],
        Newsreader:["Newsreader_14pt-ExtraLightItalic"]
      }
    },
  },
  plugins: [],
}