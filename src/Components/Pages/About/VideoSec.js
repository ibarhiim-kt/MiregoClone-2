import React, { useEffect } from 'react'
import aboutVideo from './assets/aboutVideo.mp4'
import aboutSecImg from './assets/videoSecImg.webp'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function VideoSec() {
  
  useEffect(()=>{
  gsap.set(".videoSecCardGsap",{y:0, opacity:1})
    gsap.from(".videoSecCardGsap",{      
      duration:0.8,
      opacity:0,
      y:100,
      scrollTrigger:{
      trigger:".videoSecCardTrigger",  
      start:"top 90%",         
    } 
    })
  },[])
  return (
    <div>
      <div className='py-16 px-10 flex justify-between gap-2 max-xl:py-14 max-lg:py-12 max-md:flex-col max-md:px-4  max-md:py-8 max-sm:px-2 max-xxs:py-6 5xl:justify-start 5xl:gap-[42px] 
       min-6xl:gap-[60px] videoSecCardTrigger'>
        <div className='w-lg overflow-hidden  max-md:w-full videoSecCardGsap'>
            <img src={aboutSecImg} alt="videoCultureImage" className='rounded-xl w-full'/>
        </div>
        <div className='w-[66%] overflow-hidden max-md:w-full 5xl:w-xl  6xl:w-lgW]'>
        <video src={aboutVideo} autoPlay loop muted className='w-full rounded-xl'></video>
        </div >                              
      </div>
    </div>
  )
}
