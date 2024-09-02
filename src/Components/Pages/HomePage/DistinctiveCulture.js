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
    <div className='pb-2 pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-424:pt-88 max-320:pt-72'>        
        <h1 className='font-AlmiregoDisplayLight leading-105 text-96 max-lg:text-68 max-424:text-40 max-320:text-[32px]'>A <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>distinctive </span>culture</h1>
      <div className='pt-16 px-25 flex justify-between gap-2 pb-2 max-xl:pt-14 max-xl:px-8 max-lg:pt-12 max-md:px-4 max-md:pt-8 max-md:flex-col max-390:px-6 max-320:pt-6'>
        <div className='w-1/2 max-md:w-0'></div>
        <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
        <p className='text-[21px] tracking-0.4 leading-125 max-424:text-18 max-390:text-[17px] distinctiveParaAnima'>We aim to create the best place to work. Crafting digital products is more than a job to us: it's a calling. Our strategy, design, and development teams are made up of inspired and inspiring people. Our passion for our art is boundless.</p>
        <div className='mt-12 flex max-424:mt-8 overflow-hidden'>
      <a href="#" className='px-5 py-3 bg-#050307 rounded-xl text-#FFFFFF tracking-0.3
      flex items-center justify-center leading-none distinctiveButtonAnima hover:bg-#242424'>Discover our culture</a>
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
