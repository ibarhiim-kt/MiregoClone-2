import React,{useEffect} from 'react'
import together from './assets/together.svg'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const words = ['of bussiness','of organization','of sports','of media','of entertainment','of travel','of agriculture','of retail','of food','of health','of real estate','of manufacturing','of finance', 'of insurance'];

    useEffect(()=>{  
      gsap.set(".gsapAnima",{y:0 , opacity:1})
      gsap.from(".gsapAnima",{      
        duration:0.8,
        opacity:0,
        y:50,
        scrollTrigger:{
        trigger:".gsapAnima",         
        } 
      })
    },[])
  return (    
    <div className='font-AlmiregoDisplayRegular px-25 max-xl:px-8 max-md:px-4 max-390:px-2'>
      <div className='font-AlmiregoDisplayLight'>   
     
        <p className='gsapAnima text-88 mr-[1.5vw] align-middle inline-block leading-110 max-xl:text-80 max-lg:text-56 max-md:text-32 max-md:mr-[0.7vw] max-320:text-28'>
          Building the future
        </p>
  
      <div className='pt-[2px] align-middle inline-block max-[1014px]:mt-[1.5px]'>           
      <div className=' h-[134px] max-xl:h-[121.94px] max-lg:h-[84px] max-md:h-[50px] max-[320px]:mt-[-3px]'>
        <div className='animate-wordSlide'>
      {words.map((word)=>(      
      <div className='mb-[4px] word-slide max-lg:mb-[2px]'>
      <div className='flex leading-[1.334]'>
        <div className='py-[2px] text-[90px] px-[33px] border-[4px] border-black rounded-[70px] max-xl:py-[1.5px] max-xl:text-[82px] max-lg:text-[53px] max-lg:px-[18px] max-lg:py-[4px] max-lg:border-[3px] max-md:text-[32px] max-md:px-[12px] max-md:py-[3px] max-md:border-[2px] 
        max-[320px]:border-[1px] max-[320px]:py-[1px]'>
        <h className='flex gap-3'>{word}</h>
        </div>
      </div>
      </div>      
      ))}
      <div className='max-lg:pt-[5px] max-md:pt-[7px] max-md:pl-[2px] max-[563px]:pl-0'>  <img src={together} alt="togetherImg" className='max-xl:h-[117.94px] max-lg:h-[80px] max-md:h-[46px] max-md:translate-y-[-13%] max-[320px]:h-[42px]'/> </div>
      </div>
      </div>
      </div> 
      
      </div>         
      <div className='pt-16 pb-32 gsapAnima max-xl:pt-14 max-xl:pb-24 max-lg:pb-20 max-lg:pt-12 max-md:pb-16 max-md:pt-22 max-390:pb-12'>
      
      <p className='text-56 leading-110 max-xl:text-52 max-lg:text-36 max-424:text-28 '>
      Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners.</p>
      <div className='mt-12 flex max-424:mt-8 max-390:mt-6'>
      <a href="#" className='px-5 py-3 bg-#050307 rounded-xl tracking-0.3 text-white
      flex items-center justify-center leading-none hover:bg-#242424'>Learn more about our expertise</a>
      </div>  
      </div>
       {/* <div className='pt-[149.5px] px-[140px] font-AlmiregoDisplayLight max-xl:pt-[113.5px] max-xl:px-[72px] max-lg:pt-20 max-lg:flex items-center gap-[13px] max-[1014px]:block max-[1014px]:pt-[92.5px] max-md:flex max-md:gap-[5px] max-md:px-8 max-md:pt-[64px] max-[563px]:block max-[563px]:pt-[70.5px] max-[425px]:pt-12 max-[390px]:px-6 min-[1670px]:flex min-[1670px]:pt-[128px] min-[1670px]:gap-[22px] min-[1921px]:px-[280px] min-[1921px]:block min-[1921px]:pt-[150.5px] min-[1951px]:flex min-[1951px]:pt-[128.5px]'>
       <div className='text-[88px] leading-[110%] max-xl:text-[80px] max-lg:text-[56px] max-lg:leading-[112%] max-md:text-[32px] max-[320px]:texst-[28px] overflow-hidden'>
        <p className='gsapAnima'>
          Building the future
        </p>
      </div>
      <div className='mt-[2.5px] max-[1014px]:mt-[1.5px]'>           
      <div className='overflow-hidden h-[134px] max-xl:h-[121.94px] max-lg:h-[84px] max-md:h-[50px] max-[320px]:mt-[-3px]'>
        <div className='animate-wordSlide'>
      {words.map((word)=>(      
      <div className='mb-[4px] word-slide max-lg:mb-[2px]'>
      <div className='flex leading-[1.334]'>
        <div className='py-[2px] text-[90px] px-[33px] border-[4px] border-black rounded-[70px] max-xl:py-[1.5px] max-xl:text-[82px] max-lg:text-[53px] max-lg:px-[18px] max-lg:py-[4px] max-lg:border-[3px] max-md:text-[32px] max-md:px-[12px] max-md:py-[3px] max-md:border-[2px] 
        max-[320px]:border-[1px] max-[320px]:py-[1px]'>
        <h className='flex gap-3'>{word}</h>
        </div>
      </div>
      </div>      
      ))}
      <div className='max-lg:pt-[5px] max-md:pt-[7px] max-md:pl-[2px] max-[563px]:pl-0'>  <img src={together} alt="togetherImg" className='max-xl:h-[117.94px] max-lg:h-[80px] max-md:h-[46px] max-md:translate-y-[-13%] max-[320px]:h-[42px]'/> </div>
      </div>
      </div>
      </div> 
      </div>   
      
      <div className="pt-[62px] px-[140px] pb-32 font-AlmiregoDisplayRegular max-xl:pt-[56px] max-xl:px-[72px] max-xl:pb-[96px] max-lg:pt-[48px] max-lg:pb-20 max-md:pt-[30px] max-md:px-8 max-md:pb-16 max-[390px]:px-6 max-[320px]:pt-[15px] max-[320px]:pb-[48px] gsapAnima min-[1921px]:px-[280px] ">
      <p className='text-[56px] leading-[112%] max-xl:text-[52px] max-lg:text-[36px] max-[454px]:text-[28px] max-[320px]:text-[24px] min-[1734px]:w-[1454px] min-[1921px]:w-[100%]'>
      Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners.</p> 
      <div className='mt-12 flex max-[454px]:mt-8'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1] hover:bg-[#242424]'>Learn more about our expertise</a>
      </div>  
      </div>   */}
    </div>
  )
}
