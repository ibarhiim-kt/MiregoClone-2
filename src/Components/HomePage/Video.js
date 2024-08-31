import React, { useState,useEffect } from 'react'
import video from '../../assets/animation/video.mp4'
import go from '../../assets/go.svg'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Video() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);  };
  const handleMouseLeave = () => {
    setIsHovering(false);    
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y:0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  const cardsAnima = ['.animaCard1','.animaCard2','.animaCard3','.animaCard4']
  const cards = [
    {number:"15",
      text:"years experience creating digital products.",
      plus:"+"
    },
    {
      number:"300",
      text:"digital products launched since our inception.",
      plus:"+"
    },
    {
      number:"40",
      text:"prizes and awards.",
      plus:"+"
    },
    {
      number:"14M",
      text:"users of our products. ",
      plus:"+"
    }
  ]
  useEffect(()=>{  
  gsap.to(".gsapVideoAnima",{
    duration:1.5,
    width:"100%",
    scrollTrigger:{
    trigger:".gsapVideoAnima",          
    }
  })
  cardsAnima.forEach((card,index)=>{
  gsap.set(card,{y:0,opacity:1})
      gsap.from(card,{
      duration:0.8,
      opacity:0,
      y:50,
      delay:index*0.2, 
      scrollTrigger:{
      trigger:".cardsTrigger",         
    } 
        })
    })
},[])
  return (
    <div className='px-10 max-md:px-4 max-[424px]:px-2 gsapVideoTrigger' >
      {isHovering &&(
      <img src={go} alt="Go svg" style={{height:"7.5vw",width:"7.5vw", left:`${cursorPosition.x}px`, top:`${cursorPosition.y}px`}} 
      className={`custom-cursor`}/>)}
    <div className='flex justify-between mb-8 uppercase tracking-[0.3px] opacity-0'>
        <span>Digital</span>
        <span>Visionaries</span>
    </div>
    <div className='flex items-center justify-center w-full '>
    <button className='flex justify-center items-center overflow-hidden w-[20%] rounded-[32px] videoAnimation max-lg:rounded-[24px] gsapVideoAnima cursor-none' onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}>
      <video src={video} autoPlay muted playsInline loop className='min-w-[300px] w-full h-[95vh] object-cover max-md:h-[80vh]
      '></video>
      </button>
    </div>
    
    <div className='flex gap-2 pt-2 font-AlmiregoDisplayLight max-[1024px]:flex-wrap max-md:flex-col cardsTrigger overflow-hidden'>
    {cards.map((map,index)=>(
      <div className={`bg-[#f7edde] p-8 w-[25%] rounded-[32px] max-[1024px]:rounded-[24px] max-[1024px]:w-[calc(50%-4px)] max-md:w-[100%] max-md:p-[28px] max-[424px]:p-[24px] ${index === 0 ? 'animaCard1': index === 1 ? 'animaCard2':index===2 ?'animaCard3' : 'animaCard4' }`}>
        <div className={`${index === 0 ? 'animaCard1': index === 1 ? 'animaCard2':index===2 ?'animaCard3' : 'animaCard4' }`}>
        <p className=' mb-4 leading-[105%] mt-[38px] max-md:mt-[21px] max-[424px]:mt-[15px] max-[320px]:mt-[8px] animaCard1'>
        <span className='text-[88px] tracking-[-1.75px] max-xl:text-[72px] max-md:text-[56px]
         max-[424px]:text-[40px] max-[320px]:text-[32px] '>{map.number}</span>
        <sup className='text-[48.4px] relative top-[-0.75em] max-[1024px]:text-[39.6px] max-md:text-[30.8px] max-[424px]:text-[22px] max-[320px]:text-[17.6px]'>{map.plus}</sup>
        </p>
        <p className="text-[21px] leading-[125%] mt-11 tracking-[0.4px] font-AlmiregoRegular max-md:text-[18px] max-md:mt-[26.6px] max-[424px]:mt-[22.2px] max-[390px]:text-[17px] max-[320px]:mt-[21.2px]"><br></br>{map.text}</p>
        </div>
      </div>        
    ))}
    </div>
    
    </div>
  )
}
