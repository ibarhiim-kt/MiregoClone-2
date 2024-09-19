import React, {useEffect} from 'react'
import blackArrow from './assets/blackArrow.svg'
import conpin from './assets/conpin.webp'
import keyboard from './assets/keyboard.webp'
import dc24 from './assets/dc24.webp'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BlogTable() {
    const blogTable = [
        {
            date: "July 16 — 2024",
            blogText: "Blog",
            para:"Figma Config 2024: New features and advancements for product designers",
            img: conpin
        },
        {
            date:"July 3 — 2024",
            blogText: "Blog",
            para:"Swift 6 and Apple Intelligence: How Apple's new initiatives will benefit developers",
            img:keyboard
        },
        {
            date:"July 28 — 2024",
            blogText: "Blog",
            para:"WWDC 2024: Understanding new features to elevate digital products",
            img:dc24
        },
        
    ]
    useEffect(()=>{  
      const animateCard = (selector) => {
        gsap.set(selector, { y: 0, opacity: 1 });
        gsap.from(selector, {
          duration: 0.8,
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: selector,            
          },
        });
      };        
      animateCard('.card1');
      animateCard('.card2');
      animateCard('.card3');
      animateCard('.card4');
    }, []);
  return (
    <div className='pt-52 font-AlmiregoRegular my-2 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 2xl:pt-64'>
      <div className='text-black-primary flex items-stretch justify-between gap-2 mb-2 max-lg:hidden card1'>
        <div className="py-11 px-10 text-small flex flex-1 gap-xl bg-cream-primary rounded-xl max-xl:gap-4">
            <p className='flex flex-col justify-between' style={{flex:1}}>DATE</p>
            <div style={{flex:2}}>NEWS</div>
        </div>
        <div className='flex items-center justify-center w-60 bg-cream-primary rounded-xl cursor-pointer'>
            <p className='mr-1 font-AlmiregoDisplayBold'>SEE ALL</p>
            <img src={blackArrow} alt="arrow" />
        </div>
      </div>
    {blogTable.map((map,index)=>(
      <div className={`text-black-primary flex items-stretch justify-between gap-2 mb-2
      cursor-pointer max-md:flex-col ${index === 0?"card2":index===1?"card3":"card4"}`}>
        <div className="py-11 px-10 flex flex-1 gap-xl bg-cream-primary rounded-xl min-h-60 max-xl:gap-4 max-lg:flex-col max-lg:p-6">
            <div className='flex flex-col justify-between flex-1 max-md:flex-none'>
            <p className='flex text-small flex-col justify-between max-lg:text-xxs max-lg:mb-4 max-md:mb-3'>{map.date}</p>
            <ul className='flex'>
            <li className='rounded-md py-base px-xs border border-black-primary text-xs-base'>{map.blogText}</li>
            </ul>
            </div>
            <div className="text-xs max-lg:text-sm-base" style={{flex:2}}>
            <h2  className='leading-tight-xs'>{map.para} </h2>
            </div>
        </div>
        <div className='overflow-hidden flex items-center justify-center max-w-60 bg-cream-primary rounded-xl max-md:max-w-none'>            
          <img src={map.img} alt="arrow" className='w-full h-full object-cover'/>
        </div>
      </div>
      ))}
    </div>
    
  )
}