import React,{ useEffect } from 'react'
import digitalTrends from './assets/digitalTrends.webp'
import arrow from './assets/arrow.svg'
import githubCopilot from './assets/githubCopilot.webp'
import basicNeeds from './assets/basicNeeds.webp'
import symbol from './assets/symbol.svg'
import yoshua from './assets/yoshua.webp'
import ParaResuse from '../../Layout/ParaResuse'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function DiscoverVision() {  

  const cards = [
    {
      btn1:'Sport',
      btn2:'Report',
      read:'Read',
      arrow: arrow,
      image:digitalTrends,
      para:'Digital trends for augmented reality in professional sports'
    },
    {
      btn1:'Development',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Using GitHub Copilot and generative AI to accelerate software development'
    },
    {
      image:yoshua,
      name:'Yoshua Bengio',
      para:'Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.'
    },
    {
      btn1:'Work',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'The future of work: three basic needs shaping the next evolution of work'
    }
  ]
  useEffect(()=>{  
    gsap.set(".discoverParaAnima",{y:0, opacity:1})
    gsap.from(".discoverParaAnima",{
      duration:0.8,
      opacity:0,  
      y:50,
      scrollTrigger:{
      trigger:".discoverParaAnima",            
    } 
    })
    gsap.set(".discoverButtonAnima",{y:0, opacity:1})
    gsap.from(".discoverButtonAnima",{      
      delay:0.15,
      duration:0.8,
      opacity:0,
      y:50,
      scrollTrigger:{
      trigger:".discoverParaAnima",         
    } 
    })
    gsap.set(".cardsGsap",{y:0, opacity:1})
    gsap.from(".cardsGsap",{      
      duration:0.8,
      opacity:0,
      y:70,
      scrollTrigger:{
      trigger:".cardsGsap",       
    } 
    })
  },[])
  return (
    <div className='dist-disc-container'>
      <h1 className='home-h1'>Building for the future</h1>      
        <ParaResuse secondaryText="Over the past decade and a half, mobile and cloud computing have transformed countless industries. But emerging technologies will drive even greater change in the years to come. Want to take a peek at what tomorrow holds? From a diversity of angles, our experts share insights on the digital future." buttonText="Discover our vision of the future" showParagraph={true} showButton={true} buttonLink='#' discoverClasses="overflow-hidden" discoverParaAnima="discoverParaAnima" paraContainer="para-container" discoverButtonAnima="discoverButtonAnima"/>
      {/* <div className='para-container overflow-hidden'> 
        <div className='w-1/2 max-md:w-0'></div>
        <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
        <p className='home-para discoverParaAnima'>Over the past decade and a half, mobile and cloud computing have transformed countless industries. But emerging technologies will drive even greater change in the years to come. Want to take a peek at what tomorrow holds? From a diversity of angles, our experts share insights on the digital future.</p>
        <div className='home-btn-container discoverButtonAnima'>
      <a href="#" className='home-btns'>Discover our vision of the future</a>
      </div>  
      </div>
      </div> */}
      
      <div className='pt-32 grid grid-cols-4 gap-8 max-2xl:grid-cols-3 max-lg:grid-cols-2 
       max-md:grid-cols-1 max-md:pt-16 cardsGsap'>
      {cards.map((map,index)=>(
        <>
        <a className='group' key={index} >
          <div className={`relative overflow-hidden border-[1.5px] ${index===2?'rounded-[34px]':'rounded-[44px]'} ${index===3?'max-2xl:mt-[-52.8px] max-[1376px]:mt-[-84.8px] max-[1311px]:mt-[-116.8px] max-[1188px]:mt-[-148.8px] max-[1143px]:mt-[-118.8px] max-[1112px]:mt-[-150.8px] max-[1076px]:mt-[-182.8px] max-lg:mt-0':''} ${index===2?'max-[986px]:mt-[-30px] max-[778px]:mt-0':''}
          ${index=== 0 ? 'border-black-primary':'border-cream-primary'} text-white cursor-pointer font-AlmiregoRegular `}>
           {index<2 || index == 3 ?(
            <>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>
             
            <img src={map.image} alt="digitalTrends" className='h-full w-full max-w-full object-cover'/>
            </div>
            <div className='py-8 px-6 relative text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='flex items-center max-w-[80%] gap-1 text-xxs'>
                  <li className='discover-vision-li'>{map.btn1}</li>
                  <li className='discover-vision-li'>{map.btn2}</li>
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-[15px] mr-1 group-hover:mr-2 duration-300">{map.read}</p> 
                    <img src={map.arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-sm-base leading-relaxed-lg">{map.para}</p>
              </div>               
            </div>
            </>
           ):(            
            <div className='py-8 px-6 text-transparent top-0 left-0 w-full h-full flex flex-col bg-black-secondary'>
              <div className='relative my-2xl bg-clip-text max-2xl:my-16' style={{ background:'linear-gradient(251deg, #b5a6ff 2.43%, #f7edde 98.82%)', WebkitBackgroundClip: 'text',textIndent:'60px'}}>
                <img src={symbol} alt="symbol" className='absolute top-[12px] left-0 w-[52px]'/>
                <p className="text-md leading-normal max-2xl:text-xs max-lg:text-md">{map.para}</p>
              </div>
              <div className='items-center inline-flex text-white gap-md'>
                <img src={map.image} alt="Yoshua Bengio" className='w-[44px] h-[44px] rounded-full overflow-hidden object-cover'/>
                <p className='text-[15px]'>{map.name}</p>
              </div>
          </div>
           )
           }          
          </div>
        </a>          
      </>
         ))}
        </div>          
    </div>
      )
}