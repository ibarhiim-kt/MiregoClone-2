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
        '424': '424px',
        '390': '390px',
        '320': '320px',
      },
      borderRadius: {
        '4xl': '32px',
      },
      fontSize:{
        '3.5xl': '32px'
      },
      colors:{
        '#f7edde':'#f7edde',
        '#050307':'#050307',
        '#242424':'#242424' 
      },
      lineHeight:{
        '105':'105%'
      }
    },
  },
  plugins: [],
}