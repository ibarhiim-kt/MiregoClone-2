import React,{useState} from 'react'
import together from '../../assets/together.svg'
export default function Hero() {
    const words = ['of bussiness','of organization','of sports','of media','of entertainment','of travel','of agriculture','of retail','of food','of health','of real estate','of manufacturing','of finance', 'of insurance'];
  return (
    <div>    
    <div className='pt-[149.5px] px-[140px] font-AlmiregoDisplayLight'>
      <div className='text-[88px] leading-[110%] '>
        <p>
          Building the future
        </p>
      </div>
      <div className='mt-[2.5px]'>           
      <div className='overflow-hidden h-[134px]'>
        <div className='animate-wordSlide'>
      {words.map((word)=>(      
      <div className='mb-[4px] word-slide'>
      <div className='flex leading-[1.334]'>
        <div className='py-[2px] text-[90px] px-[37px] border-[4px] border-black rounded-[70px]'>
        <h className='flex gap-3 '>{word}</h>
        </div>
      </div>
      </div>      
      ))}
      <div >  <img src={together} alt="togetherImg"/> </div>
      </div>
      </div>
      </div> 
      </div>
    
      
      <div className="pt-16 px-[140px] pb-32 font-AlmiregoDisplayRegular">
      <p className='text-[56px] leading-[112%]'>
      Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners.</p> 
      <div className='mt-12 flex'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1]'>Learn more about our expertise</a>
      </div>  
      </div>  
    </div>
  )
}
