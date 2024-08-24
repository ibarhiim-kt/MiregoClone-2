import React,{useState} from 'react'
import together from '../../assets/together.svg'
export default function Hero() {
    const words = ['of bussiness','of organization','of sports','of media','of entertainment','of travel','of agriculture','of retail','of food','of health','of real estate','of manufacturing','of finance', 'of insurance'];
  return (
    <div>    
    <div className='pt-[149.5px] px-[140px] font-AlmiregoDisplayLight max-xl:pt-[113.5px] max-xl:px-[72px] max-[1024px]:pt-20 max-[1024px]:flex items-center gap-[13px] max-[1014px]:block max-[1014px]:pt-[92.5px] max-md:flex max-md:gap-[5px] max-md:px-8 max-md:pt-[64px] max-[563px]:block max-[563px]:pt-[70.5px] max-[425px]:pt-12 max-[425px]:pt-[55px] max-[390px]:px-6 '>
       <div className='text-[88px] leading-[110%] max-xl:text-[80px] max-[1024px]:text-[56px] max-[1024px]:leading-[112%] max-md:text-[32px] max-[320px]:text-[28px]'>
        <p>
          Building the future
        </p>
      </div>
      <div className='mt-[2.5px] max-[1014px]:mt-[1.5px]'>           
      <div className='overflow-hidden h-[134px] max-xl:h-[121.94px] max-[1024px]:h-[84px] max-md:h-[50px] max-[320px]:mt-[-3px]'>
        <div className='animate-wordSlide'>
      {words.map((word)=>(      
      <div className='mb-[4px] word-slide max-[1024px]:mb-[2px]'>
      <div className='flex leading-[1.334]'>
        <div className='py-[2px] text-[90px] px-[37px] border-[4px] border-black rounded-[70px] max-xl:py-[1.5px] max-xl:text-[82px] max-[1024px]:text-[53px] max-[1024px]:px-[18px] max-[1024px]:py-[4px] max-[1024px]:border-[3px] max-md:text-[32px] max-md:px-[12px] max-md:py-[3px] max-md:border-[2px] 
        max-[320px]:border-[1px] max-[320px]:py-[1px]'>
        <h className='flex gap-3'>{word}</h>
        </div>
      </div>
      </div>      
      ))}
      <div className='max-[1024px]:pt-[5px] max-md:pt-[7px] max-md:pl-[2px] max-[563px]:pl-0'>  <img src={together} alt="togetherImg" className='max-xl:h-[117.94px] max-[1024px]:h-[80px] max-md:h-[46px] max-md:translate-y-[-13%] max-[320px]:h-[42px]'/> </div>
      </div>
      </div>
      </div> 
      </div>
    
      
      <div className="pt-[62px] px-[140px] pb-32 font-AlmiregoDisplayRegular max-xl:pt-[56px] max-xl:px-[72px] max-xl:pb-[96px] max-[1024px]:pt-[48px] max-[1024px]:pb-20 max-md:pt-[30px] max-md:px-8 max-md:pb-16 max-[390px]:px-6 max-[320px]:pt-[15px] max-[320px]:pb-[48px]">
      <p className='text-[56px] leading-[112%] max-xl:text-[52px] max-[1024px]:text-[36px] max-[454px]:text-[28px] max-[320px]:text-[24px]'>
      Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners.</p> 
      <div className='mt-12 flex max-[454px]:mt-8'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1]'>Learn more about our expertise</a>
      </div>  
      </div>  
    </div>
  )
}
