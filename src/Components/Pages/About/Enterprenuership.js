import React,{useEffect} from 'react'
import profilePics from './assets/profilePics.svg'
import ParaResuse from '../../ReusableCode/ParaResuse'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Enterprenuership() {
  const cardsAnima = ['.enterpreneurCard1', '.enterpreneurCard2', '.enterpreneurCard3', '.enterpreneurCard4'];
    const aboutCards = [
        {number:"15",
          text:"years experience creating digital products.",
          plus:"+",          
        },
        {
          number:"300",
          text:"digital products launched since our inception.",
          plus:"+",          
        },
        {
          number:"40",
          text:"prizes and awards.",
          plus:"+",          
        },
        {
          number:"14M",
          text:"users of our products. ",
          plus:"+",          
        }
      ]

      useEffect(()=>{  
        gsap.set(".enterpreneurshipParaAnima",{y:0, opacity:1})
        gsap.from(".enterpreneurshipParaAnima",{
          duration:0.8,
          opacity:0,  
          y:50,
          scrollTrigger:{
          trigger:".enterpreneurshipParaAnima",            
        } 
        })
        gsap.set(".ourCultureAnima",{y:0, opacity:1})
        gsap.from(".ourCultureAnima",{
          duration:0.8,
          opacity:0,  
          y:50,
          scrollTrigger:{
          trigger:".ourCultureAnima",            
        } 
        })
        cardsAnima.forEach((card, index) => {
          gsap.set(card, { y: 0, opacity: 1 });
          gsap.from(card, {
            duration: 0.8,
            opacity: 0,
            y: 50,
            delay: index * 0.2,
            scrollTrigger: {
            trigger: ".enterprenuerCardsTrigger",
            }
          });
        });
      })
  return (
    <div className='pt-32 max-xl:pt-24 max-lg:pt-20 max-md:pt-16 max-sm:pt-12 text-cream-primary'>
    <div className="flex justify-between gap-2 font-AlmiregoDisplayLight text-5xl leading-tight-sm  max-xl:text-4xl max-lg:text-xl max-md:flex-col max-sm:text-xs max-xxs:text-base overflow-hidden">
      
    <h1 className='w-2/3 max-md:w-full enterpreneurshipParaAnima'>✲ Entrepreneurship is in our DNA</h1>
    <div className="w-lg max-md:w-0"></div>
    </div>
    <ParaResuse text2="From day one, we've had a unique culture and DNA. We learn by doing. We think while we're building. We don't just buy software, we build it. We have a rigorous process for identifying the right things to build and the ideal way to build them. And with each iteration, we help create digital businesses driven by new digital products and services." showParagraph={true} paraContainer="para-container" enterprenuershipClasses="flex-row-reverse px-0" enterpreneurshipParaAnima="enterpreneurshipParaAnima"/>
    
    <div className='flex gap-2 pt-16 font-AlmiregoDisplayLight enterprenuerCardsTrigger overflow-hidden text-black max-xl:pt-14  max-lg:pt-12 max-lg:flex-wrap max-md:pt-8 max-md:flex-col'>
    {aboutCards.map((map,index)=>(
      <div className={`p-8 w-1/4 rounded-3xl  max-lg:rounded-2xl max-lg:w-[calc(50%-4px)] max-md:w-full max-md:p-7 max-sm:p-6 ${index === 0 ? 'enterpreneurCard1 bg-[#FF4524]': index === 1 ? 'enterpreneurCard2 bg-[#F7EDDE]':index===2 ?'enterpreneurCard3 bg-[#3E8372]' : 'enterpreneurCard4 bg-[#B5A6FF]' }`}>
        <div className={`enterprenureCard${index+1}`}>
        <p className=' mb-4 leading-tight-sm animaCard1'>
        <span className='text-5xl leading-normal tracking-[-1.75px] max-xl:text-3xl max-md:text-xl
         max-sm:text-md max-xxs:text-xs '>{map.number}</span>
        <sup className='text-[48.4px] relative top-[-0.75em] max-lg:text-[39.6px] max-md:text-[30.8px] max-sm:text-[22px] max-xxs:text-[17.6px]'>{map.plus}</sup>
        </p>
        <p className="text-[21px] leading-relaxed-lg  tracking-normal font-AlmiregoRegular 
        max-md:mt-[22px] max-md:text-small max-xs:text-x-small"><br></br>{map.text}</p>
        </div>
      </div>        
    ))}
    </div>
    <div className="py-32 font-AlmiregoDisplayLight max-xl:py-24 max-xl:text-4xl max-lg:py-20 max-md:py-16  max-sm:pt-12 ourCultureAnima">
        <p className='text-5xl leading-[133.5%] max-xl:text-4xl max-lg:text-xl max-md:text-xs max-xxs:text-base inline max-xl:inline-block'>
        Our culture is what defines, differentiates, and makes us unique. We work together towards a common mission and share these eight <span className='font-NewsreaderItalic font-light'>core</span> principles.       
        <img src={profilePics} alt="Profile Pictures" className='h-[130px] mt-[-33px] max-xl:h-lg max-lg:h-sm max-md:h-base max-md:mt-[-17px] max-xxs:h-[42px] inline-block'/>
        </p>        
    </div>
    </div>
  )
}
