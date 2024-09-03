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
        "sm":'22px',
        "xs":"12.387px",
        "base":"2.55px"
      },
      margin:{
        "2xl":"140px",
        "xl":"88px",
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
        "xs-base":"19px",       
        "small":'18px',
        "x-small":'17px',
        "xxs":'16px',              
      },
      screens:{        
        "6xl":"4700px",
        "5xl":"3100px",
        "4xl":"2400px",
        "3xl":"1921px", 
        "2xl":"1440px",       
        "large":"1014px",
        "medium":"563px",
        "s":"424px",
        "xs":"390px",
        "xxs":"320px",        
      },
      lineHeight:{
        "relaxed-xl":"155%",
        "relaxed-lg":"125%",
        "relaxed-md":"112%",
        "tight-md":"110%",
        "tight-sm":"105%",
        'tight-xs': "1.175",       
        "normal":"100%"               
      },
      backgroundColor:{        
        "black-primary":"#050307",
        "black-secondary":"#242424",
        "cream-primary":"#F7EDDE",               
      },
      colors:{
        "white-primary":"#FFFFFF",
        "gray-primary":"rgba(255,255,255,.3)"         
        // "#050307":"#050307"
      },
      borderColor:{
        "black-primary":"#272425",
        "gray-primary":"rgba(255,255,255,.3)",
        "cream-primary":"#e0dfe0"
      },
      letterSpacing:{
        "tight":"0.3px",
        "normal":"0.4px"
      },      
      gap:{
        "xl":"154px",
        "md":"15px"
      },
      height:{
        "2xl":"134px",
        "xl":"121.94px",
        "lg":"117.94",        
        "md":"84px",
        "sm":"80px",
        "xs":"50px",  
        "base":"46px",
        "sm-base":"40px"
      },
      width:{
        "lg":"33%",
        "md":"30%",
        "sm":"15%"
      },
      borderWidth:{
        "lg":"4px",
        "md":"3px",
        "sm":"2px",
        "normal":"1px"
      },
      borderRadius: {
        '5xl': '500px',
        '4xl': '32px',
        '3xl':'20px',
         "xl": '9.5px'
      },
      
    },
  },
  plugins: [],
}