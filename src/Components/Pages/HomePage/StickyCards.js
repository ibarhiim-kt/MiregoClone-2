import React from "react";
import { gsap } from "gsap";
import Arrow from './assets/arrow.svg'
import ScrollTrigger from "gsap/ScrollTrigger";
import Img1 from './assets/sliderCards/card1.webp'
import Img2 from './assets/sliderCards/card2.webp'
import Img3 from './assets/sliderCards/card3.webp'
import ParaResuse from "../../ReusableCode/ParaResuse";

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
      
      <div className="pt-32 max-xl:pt-24 max-lg:pt-20 max-md:pt-16 max-sm:pt-12">
           <h1 className='home-h1'>Made with <span className='h1-span'>passion </span></h1>
           <ParaResuse text2="Through the years, we've built digital products that millions of people use every day on phones, web browsers, tablets, connected watches, TVs, kiosks, and voice assistants." stickyCardsPadding="pb-[51px] max-xl:pb-[43px] max-lg:pb-[35px]" showParagraph={true}  buttonLink='#' stickyCardsClasses="py-16 flex justify-between gap-2 max-xl:pt-14 max-lg:pt-12 max-md:py-8 max-md:flex-col max-xxs:pt-6" stickyCardsParaAnima="stickyCardsParaAnima" />
      {/* <div className='py-16 flex justify-between gap-2 max-xl:pt-14 max-lg:pt-12 max-md:py-8 max-md:flex-col max-xxs:pt-6'>
        <div className='w-1/2 max-md:w-0'></div>
        <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
        <p className='home-para pb-[51px]  max-xl:pb-[43px] max-lg:pb-[35px]'>Through the years, we've built digital products that millions of people use every day on phones, web browsers, tablets, connected watches, TVs, kiosks, and voice assistants.</p>
      </div>    
      </div> */}
      <div className="relative pt-16 -translate-y-11 -mb-36 max-xl:pt-14 max-lg:pt-12 max-md:pt-8 max-xxs:pt-6 flex flex-col ">
      
          {cardSlider.map((map,index)=>(
          <div className={`cursor-pointer group aspect-[7/3] sticky overflow-hidden p-8 pb-0 rounded-3xl border-2 border-white max-xl:rounded-xl max-md:rounded-3xl max-md:aspect-[1/1] max-md:pt-7 max-md:px-7 max-sm:p-6 max-sm:pb-0 ${index===3?"bg-black":''}`} style={{ top:`${40 + (index + 1) * 100}px`,marginBottom:`${(4 - index)*100}px`, marginTop:`${(4-map.mt)*-100}px` }}>

            <img src={map.img} alt="" className={`absolute top-0 left-0 w-full h-full
                ${index>2?"hidden":'inline'}`}/>
            <div className={`stickyCardsOverlay ${index>2?"hidden":'inline'}`}></div>
          
            <div className="flex flex-col justify-between w-full h-full">           
              <div className={`flex items-center justify-between ${index<3?"absolute":"static"} left-0 top-0 w-full ${index<3?"p-8 max-md:p-7 max-sm:p-6":"p-0"} leading-relaxed-xl`}>
            
            <div className={`font-AlmiregoDisplayRegular text-base text-white-primary flex items-center gap-2 
              ${index<3?"max-lg:text-sm-base max-sm:text-[20px] max-xxs:text-small":''}`}>
              {map.name}
            <img src={map.arrow} alt="" className={`h-7 w-7 ${index<3?"hidden group-hover:inline":'inline'}`}/>
            </div>

            <ul className={`${index >2?"hidden":"inline"}  items-center font-AlmiregoDisplayRegular text-small gap-1 flex flex-row flex-wrap justify-end max-xs:text-x-small`}>
              <button className="sticky-cards-li">{map.btn1}</button>
              <li className={`${index === 2?"hidden":"inline"} sticky-cards-li max-md:hidden`}>{map.btn2}</li>
              <li className="sticky-cards-li">{map.btn3}</li>
            </ul>               
            <ul className={`${index < 3?"hidden":"inline"} flex items-center gap-1.5`}>
                <li className="w-8 h-8 border-2 border-white rounded-[10px] max-md:w-4 max-md:h-4 max-md:rounded-[5px] max-md:border max-sm:w-3 max-sm:h-3 max-sm:rounded-[3px]"></li>
                <li className="w-8 h-8 rounded-full bg-white max-md:w-4 max-md:h-4 max-sm:w-3 max-sm:h-3"></li>
              </ul>
              </div>                              
              <div className={`flex mb-20 overflow-hidden gap-4 slider font-AlmiregoDisplayRegular
                ${index < 3 ? "opacity-0 w-0":"cursor-grab"}`}>
              {sliderContent.map((map)=>(
                <h1 className={`text-gray-primary slide text-[64px] py-4 px-[45px] border-4 hover:border-transparent border-gray-primary rounded-5xl flex items-center justify-center hover:bg-gray-primary hover:text-black max-lg:py-1.5 max-lg:px-8 max-lg:text-[48px] max-lg:border-[3px] max-sm:text-2xl max-sm:px-4 max-md:border-2 max-sm:py-[3.5px]`}>{map.text}
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
