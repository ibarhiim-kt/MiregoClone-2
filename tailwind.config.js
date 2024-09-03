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
        "72":'72px',
        "25":'100px',
        "56":'56px',
        "22":'22px'
      },
      margin:{
        "140":"140px",
        "62":"62px",
        "59":"59px",        
      },
      fontSize:{
        "96":'96px',
        "88":'88px',
        "80":'80px',
        "72":'72px',
        "68":'68px',
        "56":'56px',
        "52":'52px',
        "40":'40px',
        "36":'36px',
        "32":'32px',
        "28":'28px',
        "24":"24px",
        "18":'18px',
        "16":'16px'  
      },
      lineHeight:{
        "125":"125%",
        "112":"112%",
        "110":"111%",
        "105":"105%"       
        
      },
      backgroundColor:{
        "#050307":"#050307",
        "#242424":"#242424",
        "#F7EDDE":"#F7EDDE"
      },
      colors:{
        "#FFFFFF":"#FFFFFF",
        "#050307":"#050307"
      },
      letterSpacing:{
        "0.3":"0.3px",
        "0.4":"0.4px"
      },
      screens:{        
        "min-4700":"4700px",
        "min-3100":"3100px",
        "min-2400":"2400px",
        "min-1921":"1921px", 
        "min-1440":"1440px",       
        "1014":"1014px",
        "424":"424px",
        "390":"390px",
        "320":"320px",        
      },
      gap:{
        "154":"154px"
      },
      height:{
        "134":"134px",
        "121.94":"121.94px",
        "84":"84px",
        "50":"50px",
        
      }
    },
  },
  plugins: [],
}