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
    <div className='pt-64 px-[40px] font-AlmiregoRegular my-2 max-[1440px]:pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-md:px-4 max-[424px]:px-2'>
      <div className='text-[#050307] flex  items-stretch justify-between gap-[8px] mb-2 max-lg:hidden card1'>
        <div className="py-11 px-10 text-[18px] flex flex-1 gap-[154px] bg-[#F7EDDE] rounded-3xl max-xl:gap-[16px]">
            <p className='flex  flex-col justify-between' style={{flex:1}}>DATE</p>
            <div style={{flex:2}}>NEWS</div>
        </div>
        <div className='flex items-center justify-center w-[240px] bg-[#F7EDDE] rounded-3xl  cursor-pointer'>
            <p className='mr-1 font-AlmiregoDisplayBold'>SEE ALL</p>
            <img src={blackArrow} alt="arrow" />
        </div>
      </div>
    {blogTable.map((map,index)=>(
      <div className={`text-[#050307] flex items-stretch justify-between gap-[8px] mb-[8px] 
      cursor-point max-md:flex-col ${index === 0?"card2":index===1?"card3":"card4"}`}>
        <div className="py-11 px-10 flex flex-1 gap-[154px] bg-[#F7EDDE] rounded-3xl min-h-[240px] max-xl:gap-[16px] max-lg:flex-col max-lg:p-6">
            <div className='flex flex-col justify-between flex-1 max-md:flex-none'>
            <p className='flex text-[18px] flex-col justify-between max-lg:text-[16px] max-lg:mb-4 max-md:mb-3'>{map.date}</p>
            <ul className='flex'>
            <li className='rounded-[9.5px] py-[2.55px] px-[12.387px] border border-[#050307] text-[19px]'>{map.blogText}</li>
            </ul>
            </div>
            <div className="text-[32px] max-lg:text-[24px]" style={{flex:2}}>
            <h2  className='leading-[1.175]'>{map.para} </h2>
            </div>
        </div>
        <div className='overflow-hidden sflex items-center justify-center max-w-[240px] bg-[#F7EDDE] rounded-3xl max-md:max-w-none'>            
            <img src={map.img} alt="arrow" className='w-full h-full object-cover'/>
        </div>
      </div>
      ))}
    </div>
  )
}
