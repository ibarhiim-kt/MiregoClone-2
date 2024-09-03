import React, { useEffect } from "react";
import { gsap } from "gsap";
import Arrow from './assets/arrow.svg'
import ScrollTrigger from "gsap/ScrollTrigger";
import Img1 from './assets/sliderCards/card1.webp'
import Img2 from './assets/sliderCards/card2.webp'
import Img3 from './assets/sliderCards/card3.webp'

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const sliderContent = [
    {text:"Glo Bakery"},
    {text:"Archibald"},
    {text:"Premier Tech"},
    {text:"Sinai Health System"},
    {text:"Bombardier"},
    {text:"Cineplex"},
    {text:"DAVIDs TEA"},
    {text:"Golf Canada"},
    {text:"BRP GO!"},
    {text:"Cominar"},
    {text:"Airthings"},
    {text:"Le Massif de Charlevoix"},
    {text:"The Montréal Canadiens"},
    {text:"Bell"},
    {text:"IGA"},
    {text:"SAQ"},
    {text:"Schluter"},
    {text:"TV5 Québec Canada"},
    {text:"Canadian Football League"},
    {text:"Familiprix"},
    {text:"Groupe Capitales Médias"}
  ];
  const cardSlider = [
    {name:"DuProprio",
     btn1:"Mobile Application",
     btn2:"Tablet Application",
     btn3:"Home",
     img:Img1,
     arrow:Arrow,
     mt:4
    },
    {name:"Air Transat",
      btn1:"Mobile Application",
      btn2:"Tablet Application",
      btn3:"Travel",
      img:Img2,   
      arrow:Arrow,
      mt:-1
     },
     {name:"Winnipeg Jets",
      btn1:"Mobile Application",      
      btn3:"Sports",
      img:Img3,    
      arrow:Arrow,
      mt:0
     },
     {
        name:"See all projects", 
        arrow:Arrow,
        mt:1  
     }
  ]  
  return (   
      
      <div className="pt-32 max-xl:pt-24 max-lg:pt-20 max-md:pt-16 max-424:pt-12">
           <h1 className='text-[120px] font-AlmiregoDisplayLight leading-105 max-[1440px]:text-8xl max-lg:text-[68px] max-424:text-[40px] max-320:text-32'>Made with <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>passion </span></h1>
      <div className='py-16 flex justify-between gap-2 max-xl:pt-14 max-lg:pt-12 max-md:py-8 max-md:flex-col max-320:pt-6'>
        <div className='w-1/2 max-md:w-0'></div>
        <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
        <p className='text-[21px] tracking-[0.4px] leading-[125%] max-424:text-lg pb-[51px] 
        max-390:text-[17px] distinctiveParaAnima max-xl:pb-[43px] max-lg:pb-[35px]'>Through the years, we've built digital products that millions of people use every day on phones, web browsers, tablets, connected watches, TVs, kiosks, and voice assistants.</p>
      </div>    
      </div>
      <div className="relative pt-16 -translate-y-11 -mb-36 max-xl:pt-14 max-lg:pt-12 max-md:pt-8 max-320:pt-6 flex flex-col ">
      
          {cardSlider.map((map,index)=>(
          <div className={`cursor-pointer group aspect-[7/3] sticky overflow-hidden p-8 pb-0 rounded-4xl border-2 border-white max-xl:rounded-3xl max-md:rounded-4xl max-md:aspect-[1/1] max-md:pt-7 max-md:px-7 max-424:p-6 max-424:pb-0 ${index===3?"bg-black":''}`} style={{ top:`${40 + (index + 1) * 100}px`,marginBottom:`${(4 - index)*100}px`, marginTop:`${(4-map.mt)*-100}px` }}>

            <img src={map.img} alt="" className={`absolute top-0 left-0 w-full h-full
                ${index>2?"hidden":'inline'}`}/>
            <div className={`stickyCardsOverlay ${index>2?"hidden":'inline'}`}></div>

            <div className="flex flex-col justify-between w-full h-full">           
              <div className={`flex items-center justify-between ${index<3?"absolute":"static"} left-0 top-0 w-full ${index<3?"p-8 max-md:p-7 max-424:p-6":"p-0"} leading-[155%]`}>

            <div className={`font-AlmiregoDisplayRegular text-[28px] text-white flex items-center gap-2 
              ${index<3?"max-lg:text-2xl max-424:text-xl max-320:text-lg":''}`}>
              {map.name}              
              <img src={map.arrow} alt="" className={`h-7 w-7 ${index<3?"hidden group-hover:inline":'inline'}`}/>             
            </div>

            <ul className={`${index >2?"hidden":"inline"}  items-center font-AlmiregoDisplayRegular text-lg gap-1 flex flex-row flex-wrap justify-end max-390:text-[17px]`}>
              <li className="pt-1.5 pb-[5px] px-[13px] bg-white rounded-4xl flex items-center justify-center whitespace-nowrap max-424:py-[3px]">{map.btn1}</li>
              <li className={`${index === 2?"hidden":"inline"} pt-1.5 pb-1.5 px-[13px] bg-white rounded-4xl max-md:hidden`}>{map.btn2}</li>
              <li className="pt-1.5 pb-[5px] px-[13px] bg-white rounded-4xl max-424:py-[3px]">{map.btn3}</li>
            </ul>

              <ul className={`${index < 3?"hidden":"inline"} flex items-center gap-1.5`}>
                <li className="w-8 h-8 border-2 border-white rounded-[10px] max-md:w-4 max-md:h-4 max-md:rounded-[5px] max-md:border max-424:w-3 max-424:h-3 max-424:rounded-[3px]"></li>
                <li className="w-8 h-8 rounded-[50%] bg-white max-md:w-4 max-md:h-4 max-424:w-3 max-424:h-3"></li>
              </ul>
              </div>                              
              <div className={`flex mb-20 overflow-hidden gap-4 slider font-AlmiregoDisplayRegular
                ${index < 3 ? "opacity-0 w-0":"cursor-grab"}` }>
              {sliderContent.map((map)=>(
                <h1 className={`text-[rgba(255,255,255,.3)] slide text-[64px] py-[27px] px-[45px] border-4 hover:border-transparent border-[rgba(255,255,255,.3)] rounded-[500px] flex items-center justify-center hover:bg-[rgba(255,255,255,.3)] hover:text-black max-lg:py-1.5 max-lg:px-8 max-lg:text-5xl max-lg:border-[3px] max-424:text-2xl max-424:px-4 
                  max-md:border-2 max-424:py-[3.5px]`}>{map.text}
                </h1>
              ))}
            </div>            
            </div> 
          </div>
          ))}    
          </div>            
      </div>
       
  );
};

export default StickyCards;
