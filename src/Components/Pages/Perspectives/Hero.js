import React, {useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero({filteredCards}) {
  useEffect(()=>{
    gsap.set(".perspectives-h1-gsap",{y:0, opacity:1})
    gsap.from(".perspectives-h1-gsap",{      
      duration:0.8,
      opacity:0,
      y:100,
      scrollTrigger:{
      trigger:".perspectives-h1-gsap",  
      start:"top 90%",          
    } 
    })
  },[filteredCards])
  return (
    <div className='mb-32'>
    <div className='flex flex-col gap-8 max-md:gap-6 perspectives-h1-gsap'>
      <h1 className='text-8xl font-AlmiregoDisplayLight leading-[115%] max-2xl:text-7xl max-lg:text-2xl max-sm:text-md max-xxs:text-xs'>Perspectives</h1>
      <p className='text-xs font-AlmiregoDisplayRegular leading-[118%] max-lg:text-base max-sm:text-[22px] max-xxs:text-m'>Our vision of the future of organizations through digital products.</p>
    </div>    
    </div>
  )
}
