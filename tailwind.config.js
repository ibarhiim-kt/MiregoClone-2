/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        // PTSerifRegular:["PTSerif-Regular"],
        // Latine:["Latine"],
        Newsreader:["Newsreader_14pt-LightItalic"],
        // Lato:["Lato-light"],
        // AnekDevanagari:["AnekDevanagari-Light"],
        // AnekDevanagariRegular:["AnekDevanagari-Regular"],
        AlmiregoRegular:["AlmiregoRegular"],
        AlmiregoDisplayRegular:["AlmiregoDisplayRegular"],
        AlmiregoDisplayLight:["AlmiregoDisplayLight"],
        AlmiregoDisplayBold:["AlmiregoDisplayBold"]
      }
    },
  },
  plugins: [],
}