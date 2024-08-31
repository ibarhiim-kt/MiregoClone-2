import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Img1 from '../assets/images/card1.webp';
import Img2 from '../assets/images/card2.webp';
import Img3 from '../assets/images/card3.webp';
import Arrow from '../assets/images/arrow.svg'
gsap.registerPlugin(ScrollTrigger);
// import Img4 from '../assets/images/card4.png';

const HeroSection = () => {
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
     arrow:Arrow
    },
    {name:"Air Transat",
      btn1:"Mobile Application",
      btn2:"Tablet Application",
      btn3:"Travel",
      img:Img2,    
      arrow:Arrow
     },
     {name:"Winnipeg Jets",
      btn1:"Mobile Application",      
      btn3:"Sports",
      img:Img3,  
      arrow:Arrow    
     },
     {
        name:"See all projects",  
        arrow:Arrow      
     }     
  ]  
  useEffect(()=>{
    
    gsap.to(".gsapAnima",{  
      y:-2000,
      scrollTrigger:{
        trigger:".gsapTrigger",
        markers:true,
        start:"top 52%",        
        scrub:true
      }
    })
  })

  return (   
      
      <div className="px-10">
           <p className="text-[68px] lg:text-8xl font-[Almirego-Light] lg:py-7">
        Made with <span className="font-[NewsReader-Italic] font-light">passion</span>
      </p>
      <div className="flex flex-col md:flex-row justify-evenly md:py-4 pb-8">
        <div className="hidden md:block w-1/2"></div>
        <div className="font-[Almirego] text-[21px] w-full md:w-1/2">
          Through the years, we've built digital products that millions of people use every day on phones,
          web browsers, tablets, connected watches, TVs, kiosks, and voice assistants.
        </div>
      </div>    
      <div className="relative">
      
      {/* style={{ backgroundImage: `url(${map.img})`, backgroundSize:"cover"}} */}
          {cardSlider.map((map,index)=>(
          <div className={`cursor-pointer group mb-[-120px] bg-[red] gsapAnima sticky overflow-hidden p-8 rounded-[32px] border-[2px] border-[white] ${index === 0?"top-[97px]": index === 1?"top-[196px]":index === 2?"top-[296px]":''} ${index===3?"top-[396px] bg-black gsapTrigger":''}`}> 
            <img src={map.img} alt="" className="absolute top-0 left-0 w-full h-full object-cover"/>
            
            <div className="flex items-center justify-between absolute left-0 top-0 w-full p-8">
            <div className="font-[Almirego-Display] text-[28px] text-white flex items-center">
              {map.name}
              <img src={map.arrow} alt="" className={`h-[23px] w-[23px] ${index<3?"hidden group-hover:inline":'inline'}`}/>
            </div>
            <ul className={`${index >2?"hidden":"inline"} flex items-center font-[Almirego-Display] text-[18px] gap-[4px]`}>
              <li className="py-[5px] px-[13px] bg-[#fff] rounded-[32px]">{map.btn1}</li>
              <li className={`${index === 2?"hidden":"inline"} py-[5px] px-[13px] bg-[#fff] rounded-[32px]`}>{map.btn2}</li>
              <li className="py-[5px] px-[13px] bg-[#fff] rounded-[32px]">{map.btn3}</li>
            </ul>
              <ul className={`${index < 3?"hidden":"inline"} flex items-center gap-[6px]`}>
                <li className="h-[32px] w-[32px] border-[2px] border-white rounded-[10px]"></li>
                <li className="h-[32px] w-[32px] rounded-[50%] bg-white"></li>
              </ul>
              </div>                         
            <div className="mt-[399px]">             
              <div className={`flex cursor-grab mb-[80px] overflow-hidden gap-[5px] slider font-[Almirego-Display] 
                ${index < 3 ? "opacity-0":"inline"} `}>
              {sliderContent.map((map)=>(
                <h1 className={`text-[rgba(255,255,255,.3)] slide text-[64px] py-[27px] px-[45px] border-[4px] border-[rgba(255,255,255,.3)] rounded-[500px] flex items-center justify-center hover:bg-[rgba(255,255,255,.3)] hover:border-[rgba(255,255,255,.3)] hover:text-black`}>{map.text}
                </h1>
              ))}
            </div>
            </div>
          </div>
          ))}    
          </div>
          <div className="mt-[-500px]">
      <p className="text-[68px] lg:text-8xl font-[Almirego-Light] lg:py-7 ">
        Made with <span className="font-[NewsReader-Italic] font-light">passion</span>
      </p>
      <div className="flex flex-col md:flex-row justify-evenly md:py-4 pb-8">
        <div className="hidden md:block w-1/2"></div>
        <div className="font-[Almirego] text-[21px] w-full md:w-1/2">
          Through the years, we've built digital products that millions of people use every day on phones,
          web browsers, tablets, connected watches, TVs, kiosks, and voice assistants.
        </div>
      </div>  
      </div>        
      </div>
       
  );
};

export default HeroSection;
