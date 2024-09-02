/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{                     
        AlmiregoRegular:["AlmiregoRegular"],
        AlmiregoDisplayRegular:["AlmiregoDisplayRegular"],
        AlmiregoDisplayLight:["AlmiregoDisplayLight"],
        AlmiregoLight:["AlmiregoLight"],
        AlmiregoDisplayBold:["AlmiregoDisplayBold"],
        NewsreaderItalic:["newsreader-italic"]
      },
      screens: {
        's': '424px',
        'm': '390px',
        'xs': '320px',
      },
      borderRadius: {
        '4xl': '32px',
      },
      fontSize:{
        '3.5xl': '32px'
      }
    },
  },
  plugins: [],
}