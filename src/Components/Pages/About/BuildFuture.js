import React, { useState,useRef } from 'react'
import sliderImg1 from './assets/sliderImg1.png'
import sliderImg2 from './assets/sliderImg2.png'
// import sider from 'react-slick'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BuildFuture() {
       
    const settings = {
        
        infinite: true,
        slidesToShow: 1,        
        slidesToScroll: 1,       
        autoplay: true,         
        speed: 30000,            
        autoplaySpeed: 1000,        
        cssEase: "linear", 
        pauseOnHover: true,    
        draggable: true,     
        swipeToSlide:true    
      };    
  return (
    <div className='pt-64 max-[1440px]:pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-[424px]:pt-[88px] max-[320px]:pt-[72px]'>
      <div className="flex justify-between gap-[8px] px-[140px] font-AlmiregoDisplayLight text-[88px] leading-[105%] max-xl:px-[72px] max-xl:text-[80px] max-lg:text-[56px] max-md:px-8 max-md:flex-col max-[424px]:text-[32px] max-[390px]:px-6 max-[320px]:text-[28px] max-[320px]:pt-6">
      <h1 className='w-[66%] max-md:w-full'>✦ We build the future.</h1>
      <div className="33% max-md:w-0"></div>
      </div>
      <div className='px-[140px] pt-16 gap-[8px] flex justify-between max-xl:px-[72px] max-lg:pt-12 max-md:px-8 
      max-md:pt-8 max-md:flex-col max-[390px]:px-6 max-[320px]:pt-6 max-[320px]:px-6 min-[1921px]:px-[280px]'>                
        <p className='w-[50%] font-AlmiregoRegular tracking-[0.4px] leading-[125%] text-[21px] max-md:w-[100%] max-[424px]:text-[18px] max-[390px]:text-[17px]'>Our team's expertise is unmatched in Canada in the creation, design, and development of web and mobile applications. We have been creating delightful digital products for nearly two decades, always with the same purpose in mind: To build the best team, the best place to work, and a better world.</p>      
        <div className='w-[50%] max-md:w-0'></div>   
      </div>   
      
       <div className='pt-16 pb-64 overflow-hidden max-[1440px]:pb-52 max-xl:pt-14 max-xl:pb-40 max-lg:pt-12 max-lg:pb-32 max-md:pt-8 max-md:pb-24 max-[424px]:pb-[88px] max-[320px]:pt-6 max-[320px]:pb-[72px]'>
        <div className='slider-container' >
        <Slider {...settings} >
        <img src={sliderImg1} alt="slider1" className=' mr-4'/>
        <img src={sliderImg2} alt="slider2" className=' mr-4'/>        
        </Slider>
        </div>
      </div>
    </div>
    // <div className='pt-64 max-[1440px]:pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-[424px]:pt-[88px] max-[320px]:pt-[72px]'>
    //   <div className="flex justify-between gap-[8px] px-[140px] font-AlmiregoDisplayLight text-[88px] leading-[105%] max-xl:px-[72px] max-xl:text-[80px] max-lg:text-[56px] max-md:px-8 max-md:flex-col max-[424px]:text-[32px] max-[390px]:px-6 max-[320px]:text-[28px] max-[320px]:pt-6">
    //   <h1 className='w-[66%] max-md:w-full'>✦ We build the future.</h1>
    //   <div className="33% max-md:w-0"></div>
    //   </div>
    //   <div className='px-[140px] pt-16 gap-[8px] flex justify-between max-xl:px-[72px] max-lg:pt-12 max-md:px-8 
    //   max-md:pt-8 max-md:flex-col max-[390px]:px-6 max-[320px]:pt-6 max-[320px]:px-6 min-[1921px]:px-[280px]'>                
    //     <p className='w-[50%] font-AlmiregoRegular tracking-[0.4px] leading-[125%] text-[21px] max-md:w-[100%] max-[424px]:text-[18px] max-[390px]:text-[17px]'>Our team's expertise is unmatched in Canada in the creation, design, and development of web and mobile applications. We have been creating delightful digital products for nearly two decades, always with the same purpose in mind: To build the best team, the best place to work, and a better world.</p>      
    //     <div className='w-[50%] max-md:w-0'></div>   
    //   </div>   
      
    //    <div className='pt-16 pb-64 overflow-hidden max-[1440px]:pb-52 max-xl:pt-14 max-xl:pb-40 max-lg:pt-12 max-lg:pb-32 max-md:pt-8 max-md:pb-24 max-[424px]:pb-[88px] max-[320px]:pt-6 max-[320px]:pb-[72px]'>
    //     <div className='slider-container' >
    //     <Slider {...settings} >
    //     <img src={sliderImg1} alt="slider1" className=' mr-4'/>
    //     <img src={sliderImg2} alt="slider2" className=' mr-4'/>        
    //     </Slider>
    //     </div>
    //   </div>
    // </div>
  )
}
