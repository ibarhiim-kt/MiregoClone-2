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
        "xl":'100px',
        "lg":'72px',        
        "md":'56px',
        "sm":'22px'
      },
      margin:{
        "xl":"140px",
        "lg":"62px",
        "md":"71px",    
        "sm":"34px"    
      },
      fontSize:{
        "7xl":'96px',
        "6xl":'90px',
        "5xl":'88px',
        "4xl":'80px',
        "3xl":'72px',
        "2xl":'68px',
        "xl":'56px',
        "lg":'52px',
        "md":'40px',
        "sm":'36px',
        "xs":'32px',
        "base":'28px',
        "sm-base":"24px",
        "small":'18px',
        "x-small":'17px',
        "xxs":'16px',        
        // '3.5xl': '32px'        
      },
      screens:{        
        "6xl":"4700px",
        "5xl":"3100px",
        "4xl":"2400px",
        "3xl":"1921px", 
        "2xl":"1440px",       
        "large":"1014px",
        "s":"424px",
        "xs":"390px",
        "xxs":"320px",        
      },
      lineHeight:{
        "relaxed-lg":"125%",
        "relaxed-md":"112%",
        "tight-md":"110%",
        "tight-sm":"105%"               
      },
      backgroundColor:{
        // "#050307":"#050307",
        "black-primary":"#050307",
        "black-secondary":"#242424",
        "cream-primary":"#F7EDDE"
      },
      colors:{
        // "#FFFFFF":"#FFFFFF",
        // "#050307":"#050307"
      },
      letterSpacing:{
        "tight":"0.3px",
        "normal":"0.4px"
      },
      
      gap:{
        "xl":"154px"
      },
      height:{
        "xl":"134px",
        "lg":"121.94px",
        "md":"84px",
        "sm":"50px",  
        "xs" :"41px"     
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}