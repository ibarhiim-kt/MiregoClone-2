/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{        
        // Newsreader:["Newsreader_14pt-LightItalic"],        
        AlmiregoRegular:["AlmiregoRegular"],
        AlmiregoDisplayRegular:["AlmiregoDisplayRegular"],
        AlmiregoDisplayLight:["AlmiregoDisplayLight"],
        AlmiregoLight:["AlmiregoLight"],
        AlmiregoDisplayBold:["AlmiregoDisplayBold"],
        NewsreaderItalic:["newsreader-italic"]
      }
    },
  },
  plugins: [],
}