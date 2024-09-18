import React, { useEffect } from 'react'
import ParaResuse from '../../Layout/ParaResuse'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(()=>{
  gsap.set(".projectsParaAnima",{y:0, opacity:1})
    gsap.from(".projectsParaAnima",{
      duration:0.8,
      opacity:0,
      y:50,
      scrollTrigger:{
      trigger:".projectsParaAnima",        
    } 
    })    
  },[])
  return (
    <div className='overflow-hidden'>
    <div className='px-2xl py-32 max-xl:px-lg max-xl:py-24 max-lg:py-20 max-md:px-8 max-md:py-16 max-sm:py-12 max-xs:px-6 3xl:px-3xl projectsParaAnima'>           
        <ParaResuse primaryText="Over the years, we've built over 300 digital products that improve the daily lives of millions of " spanText="people" spanClasses="font-NewsreaderItalic tracking-[-1.75px] "/>
    <div className='home-btn-container'>
        <a href="#" className='home-btns font-AlmiregoDisplayRegular'>Watch our reel</a>
    </div>
    </div>
    </div>
  )
}
