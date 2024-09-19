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
      background:{
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent 50%)',
        },
      },
      padding:{ 
        "3xl":"280px",
        "2.5xl":"180px",
        "2xl":"140px",
        "xl":'100px',        
        "lg":'72px',
        "2md":'60px',        
        "md":'56px',
        "sm":'22px',
        "2xs":'18px',
        "xs":"12.387px",
        "base":"2.55px"
      },
      margin:{
        "2xl":"140px",
        "xl":"88px",
        "lg":"62px",
        "md":"71px",    
        "sm":"34px",
        'xs':"10px"
      },      
      fontSize:{
        "8xl":'120px',
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
        "md-base":"20px",
        "xs-base":"19px",       
        "small":'18px',
        "x-small":'17px',
        "xxs":'16px', 
        "xxs-base":"15px"             
      },
      screens:{        
        "6xl":"4700px",
        "5xl":"3100px",
        "4xl":"2400px",
        "3xl":"1921px", 
        "2xl":"1440px",       
        "large":"1014px",
        "md-large":"670px",
        "medium":"563px",
        "sm":"424px",
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
        "purple-primary":"#b5a6ff",
        "orange-primary":"#FF4524",
        "purple-primary":"#b5a6ff",
        "green-primary":"#3e8372"         
      },
      colors:{
        "black-primary":"#050307",
        "white-primary":"#FFFFFF",
        "gray-primary":"rgba(255,255,255,.3)",
        "cream-primary":"#F7EDDE", 
        "purple-primary":"#b5a6ff",
        "gray-secondary":"rgba(165,164,166,.33)",
        "gray-tertiary":"rgba(255,255,255,.5)"           
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
        "2md":"70px",
        "md":"15px",
        "sm":"6px"
      },
      height:{        
        "3xl":"140px",
        "2xl":"134px",
        "xl":"121.94px",
        "lg":"117.94px",        
        "md":"84px",
        "sm":"80px",
        "xs":"50px",  
        "base":"46px",        
        "sm-base":"40px",
        "xs-base":"18px"
      },
      minHeight:{
        "xl":"260px",
        "lg":"176px"
      },
      width:{
        "2xl":"140px",
        "xl":"43%",
        "lg":"33%",
        "md":"30%",
        "sm":"15%"
      },
      maxWidth:{
        "xl":"50px",
      },
      borderWidth:{
        "lg":"4px",
        "md":"3px",   
        "sm":"2px",
        "normal":"1px"
      },
      borderRadius: {
        '5xl': '500px',
        '4xl': '44px',
        '3xl': '32px',
        '2xl': '24px',
        'xl':  '20px',
        'lg': '12px',
        "md":  '9.5px'    
      },      
    },
  },
  
}