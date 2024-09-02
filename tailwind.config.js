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
        NewsreaderItalic:["newsreader-italic"],        
      },
      padding:{
        "25":'100px'
      },
      margin:{
        "140":"140px",
        "62":"62px"
      },
      fontSize:{
        "88":'88px',
        "56":'56px'
      },
      lineHeight:{
        "110":"111%",
        "112":"112%"
      },
      backgroundColor:{
        "#050307":"#050307",
        "#242424":"#242424",
      },
      colors:{
        "#FFFFFF":"#FFFFFF"
      },
      letterSpacing:{
        "0.3":"0.3px"
      }
    },
  },
  plugins: [],
}