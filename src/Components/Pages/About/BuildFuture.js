import React, { useState,useEffect } from 'react'
import sliderImg1 from './assets/sliderImg1.webp'
import sliderImg2 from './assets/sliderImg2.webp'
import Slider from 'react-slick'
import dragIcon from './assets/dragIcon.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParaResuse from '../../Layout/ParaResuse';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BuildFuture() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
    const settings = {        
        infinite: true,
        slidesToShow: 1,        
        slidesToScroll: 1,       
        autoplay: true,         
        speed: 30000,            
        autoplaySpeed: 1000,        
        cssEase: "linear", 
        pauseOnHover: true,    
        draggable: true,     
        swipeToSlide:true    
      };    
      useEffect(()=>{  
        gsap.set(".buildFutureAnima",{y:0, opacity:1})
        gsap.from(".buildFutureAnima",{
          duration:0.8,
          opacity:0,  
          y:50,
          scrollTrigger:{
          trigger:".buildFutureAnima",            
        } 
        })
      },[])
  return (
    <div className='pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-sm:pt-5xl max-xxs:pt-lg min-2xl:pt-64'>

      <div className='px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6 max-xxs:pt-6 3xl:px-3xl'>

      <div className="flex justify-between gap-2 overflow-hidden font-AlmiregoDisplayLight text-5xl leading-tight-sm max-xl:text-4xl max-lg:text-xl max-md:flex-col max-sm:text-xs max-xxs:text-base min-3xl:pt-64 min-3xl:px-3xl">
      
      <h1 className='w-2/3 max-md:w-full buildFutureAnima'>✦ We build the future.</h1>
      <div className="w-1/3 max-md:w-0"></div>
      </div>
      <ParaResuse text2="Our team's expertise is unmatched in Canada in the creation, design, and development of web and mobile applications. We have been creating delightful digital products for nearly two decades, always with the same purpose in mind: To build the best team, the best place to work, and a better world." 
      showParagraph={true} paraContainer="para-container" buildFutureClasses="px-0 flex-row-reverse" buildFutureAnima="buildFutureAnima"/>
      </div>      
      
      <div className='pt-16 pb-52 overflow-hidden  max-xl:pt-14 max-xl:pb-40 max-lg:pt-12 max-lg:pb-32 max-md:pt-8 max-md:pb-24 max-sm:pb-5xl max-xxs:pt-6 max-xxs:pb-3xl min-2xl:pb-64' >
        {isHovering && (
          <img
            src={dragIcon}
            alt="drag Icon"
            style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            className="fixed h-[5vw] w-[5vw] transform -translate-x-1/2 -translate-y-1/2 custom-cursor pointer-events-none"
          />
        )}
          <div className='slider-container cursor-none' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Slider {...settings} >
          <img src={sliderImg1} alt="slider1" className=' mr-4'/>
          <img src={sliderImg2} alt="slider2" className=' mr-4'/>        
          </Slider>
          </div>
        </div>
    </div>
   
  )
}
