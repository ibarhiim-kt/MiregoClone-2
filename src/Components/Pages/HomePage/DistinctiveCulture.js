import React,{useEffect} from 'react'
import distinctiveCultureVideo from './assets/videos/distinctiveCultureVideo.mp4'
import distinctiveCultureImage from './assets/distinctiveCultureImage.webp'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function DistinctiveCulture() {
  useEffect(()=>{  
    gsap.set(".distinctiveParaAnima",{y:0, opacity:1})
    gsap.from(".distinctiveParaAnima",{
      duration:0.8,
      opacity:0,
      y:50,
      scrollTrigger:{
      trigger:".distinctiveParaAnima",  
                
    } 
    })
    gsap.set(".distinctiveButtonAnima",{y:0, opacity:1})
    gsap.from(".distinctiveButtonAnima",{      
      delay:0.15,
      duration:0.8,
      opacity:0,
      y:50,
      scrollTrigger:{
      trigger:".distinctiveButtonAnima",              
    } 
    })
    gsap.set(".distinctiveCardGsap",{y:0, opacity:1})
    gsap.from(".distinctiveCardGsap",{      
      duration:0.8,
      opacity:0,
      y:100,
      scrollTrigger:{
      trigger:".distinctiveCardTrigger",  
      start:"top 90%",         
    } 
    })
  },[])
  
  return (
    <div className='pb-2 dist-disc-container'>        
        <h1 className='home-h1'>A <span className='h1-span'>distinctive </span>culture</h1>
      <div className='pb-2 para-container'>
        <div className='w-1/2 max-md:w-0'></div>
        <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
        <p className='home-para distinctiveParaAnima'>We aim to create the best place to work. Crafting digital products is more than a job to us: it's a calling. Our strategy, design, and development teams are made up of inspired and inspiring people. Our passion for our art is boundless.</p>
        <div className='home-btn-container overflow-hidden'>
      <a href="#" className='home-btns distinctiveButtonAnima'>Discover our culture</a>
      </div>  
      </div>
      </div>
      <div className='pt-16 pb-52 flex justify-between gap-2 max-xl:pt-12 max-xl:pb-42 max-lg:pt-11  max-lg:pb-32 max-md:flex-col max-md:pb-24 max-md:pt-8 max-320:pb-72 distinctiveCardTrigger'>
        <div className='w-[33%] overflow-hidden max-md:w-full min-2400:w-[30%] min-3100:w-1/5 min-4700:w-[15%]'>
        <video src={distinctiveCultureVideo} autoPlay loop muted className='w-full rounded-[20px]'></video>
        </div>
        <div className='w-2/3 overflow-hidden  max-md:w-full distinctiveCardGsap'>
            <img src={distinctiveCultureImage} alt="distinctiveCultureImage" className='rounded-3xl w-full'/>
        </div>
      </div>
    </div>
    
  )
}
