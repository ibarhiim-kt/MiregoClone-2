import React, { useEffect } from "react";
import { gsap } from "gsap";
import Arrow from '../../assets/arrow.svg'
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Img1 from '../../assets/sliderCards/card1.webp'
import Img2 from '../../assets/sliderCards/card2.webp'
import Img3 from '../../assets/sliderCards/card3.webp'
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

  return (   
      
      <div className="pt-32">
           <h1 className='text-[120px] font-AlmiregoDisplayLight leading-[105%] px-10 max-[1440px]:text-[96px] max-lg:text-[68px] max-md:px-4 max-[424px]:px-2 max-[424px]:text-[40px] max-[320px]:text-[32px]'>Made with <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>passion </span></h1>
      <div className='py-16 px-10 flex justify-between gap-[8px] max-xl:pt-14 max-xl:px-[72px] max-lg:pt-12 max-md:px-8 max-md:pt-8  max-md:flex-col max-[390px]:px-6 max-[320px]:pt-6'>
        <div className='w-[50%] max-md:w-[0px]'></div>
        <div className='w-[50%] font-AlmiregoRegular max-md:w-[100%]'>
        <p className='text-[21px] tracking-[0.4px] leading-[125%] max-[424px]:text-[18px] 
        max-[390px]:text-[17px] distinctiveParaAnima'>Through the years, we've built digital products that millions of people use every day on phones, web browsers, tablets, connected watches, TVs, kiosks, and voice assistants.</p>
      </div>    
      </div>
      <div className="mb-[240px] relative px-10 pt-16">
      
      {/* style={{ backgroundImage: `url(${map.img})`, backgroundSize:"cover"}} */}
          {cardSlider.map((map,index)=>(
          <div className={`cursor-pointer mb-[-120px]  sticky overflow-hidden p-8 pb-0 rounded-[32px] border-[2px] border-[white] ${index === 0?"top-[97px]": index === 1?"top-[196px]":index === 2?"top-[296px]":         ''} ${index===3?"top-[396px] bg-black":''}`} >
            <img src={map.img} alt=""  className="absolute top-0 left-0 w-full h-full object-cover"/>
           
            <div className="flex items-center justify-between absolute left-0 top-0 w-full p-8">
            <div className="font-AlmiregoDisplayRegular group text-[28px] text-white flex items-center ">
              {map.name}              
              <img src={map.arrow} alt="" className={`ml-2 w-[28px] opacity-0 group-hover:opacity-1
              ${index===3?'opacity-1':''}`}/>              
            </div>
            <ul className={`${index >2?"hidden":"inline"} flex items-center  font-AlmiregoDisplayRegular text-[18px] gap-[4px]`}>
              <li className="py-[5px] px-[13px] bg-[#fff] rounded-[32px]">{map.btn1}</li>
              <li className={`${index === 2?"hidden":"inline"} py-[5px] px-[13px] bg-[#fff] rounded-[32px]`}>{map.btn2}</li>
              <li className="py-[5px] px-[13px] bg-[#fff] rounded-[32px]">{map.btn3}</li>
            </ul>
              <ul className={`${index < 3?"hidden":"inline"} flex items-center gap-[6px]`}>
                <li className="h-[32px] w-[32px] border-[2px] border-white rounded-[10px]"></li>
                <li className="h-[32px] w-[32px] rounded-[50%] bg-white"></li>
              </ul>
              </div>                         
            <div className="mt-[349.32px]">             
              <div className={`flex cursor-grab mb-[80px] overflow-hidden gap-[5px] slider font-AlmiregoDisplayRegular
                ${index < 3 ? "opacity-0":"inline"}`}>
              {sliderContent.map((map)=>(
                <h1 className={`text-[rgba(255,255,255,.3)] slide text-[64px] py-[27px] px-[45px] border-[4px] border-[rgba(255,255,255,.3)] rounded-[500px] flex items-center justify-center hover:bg-[rgba(255,255,255,.3)] hover:border-[rgba(255,255,255,.3)] hover:text-black`}>{map.text}
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

export default HeroSection;
