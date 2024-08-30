import React,{useEffect} from 'react'
import distinctiveCultureVideo from '../../assets/animation/distinctiveCultureVideo.mp4'
import distinctiveCultureImage from '../../assets/distinctiveCultureImage.webp'
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
    <div className='pt-64 pb-2 max-[1440px]:pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-[424px]:pt-[88px] max-[320px]:pt-[72px]'>        
        <h1 className='text-[120px] font-AlmiregoDisplayLight leading-[105%] px-10 max-[1440px]:text-[96px] max-lg:text-[68px] max-md:px-4 max-[424px]:px-2 max-[424px]:text-[40px] max-[320px]:text-[32px]'>A <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>distinctive </span>culture</h1>
      <div className='pt-16 px-[140px] flex justify-between gap-[8px] pb-2 max-xl:pt-14 max-xl:px-[72px] max-lg:pt-12 max-md:px-8 max-md:pt-8  max-md:flex-col max-[390px]:px-6 max-[320px]:pt-6'>
        <div className='w-[50%] max-md:w-[0px]'></div>
        <div className='w-[50%] font-AlmiregoRegular max-md:w-[100%]'>
        <p className='text-[21px] tracking-[0.4px] leading-[125%] max-[424px]:text-[18px] 
        max-[390px]:text-[17px] distinctiveParaAnima'>We aim to create the best place to work. Crafting digital products is more than a job to us: it's a calling. Our strategy, design, and development teams are made up of inspired and inspiring people. Our passion for our art is boundless.</p>
        <div className='mt-12 flex max-[424px]:mt-8 overflow-hidden'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1] distinctiveButtonAnima hover:bg-[#242424]'>Discover our culture</a>
      </div>  
      </div>
      </div>
      <div className='pt-16 pb-64 px-10 flex justify-between gap-2 max-[1440px]:pb-52 max-xl:pt-12 max-xl:pb-42 max-lg:pt-11  max-lg:pb-32  max-md:flex-col max-md:px-4 max-md:pb-24 max-md:pt-8  max-[424px]:px-2
       max-[320px]:pb-[72px] distinctiveCardTrigger'>
        <div className='w-[33%] overflow-hidden max-md:w-[100%] min-[2400px]:w-[30%] min-[3100px]:w-[20%] min-[4700px]:w-[15%]'>
        <video src={distinctiveCultureVideo} autoPlay loop muted className='w-full rounded-[20px]'></video>
        </div>
        <div className='w-[66%] overflow-hidden  max-md:w-[100%] distinctiveCardGsap'>
            <img src={distinctiveCultureImage} alt="distinctiveCultureImage" className='rounded-3xl w-[100%]'/>
        </div>
      </div>
    </div>
  )
}
