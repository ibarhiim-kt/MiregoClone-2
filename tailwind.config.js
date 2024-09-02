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
        "25":'100px',
        "56":'56px',
        "22":'22px'
      },
      margin:{
        "140":"140px",
        "62":"62px",
        "59":"59px"
      },
      fontSize:{
        "88":'88px',
        "80":'80px',
        "56":'56px',
        "52":'52px',
        "36":'36px',
        "32":'32px',
        "28":'28px',        
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
      },
      screens:{
        "424":"424px",
        "390":"390px",
        "320":"320px"
      }
    },
  },
  plugins: [],
}