import React, { useState,useRef } from 'react'
import sliderImg1 from './assets/sliderImg1.png'
import sliderImg2 from './assets/sliderImg2.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParaResuse from '../../ReusableCode/ParaResuse';
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
    <div className='pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 max-sm:pt-5xl max-xxs:pt-lg min-2xl:pt-64'>

      <div className='px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6 max-xxs:pt-6 3xl:px-3xl'>

      <div className="flex justify-between gap-2 font-AlmiregoDisplayLight text-5xl leading-tight-sm max-xl:text-4xl max-lg:text-xl max-md:flex-col max-sm:text-xs max-xxs:text-base min-3xl:pt-64 min-3xl:px-3xl">

      <h1 className='w-[66%] max-md:w-full'>✦ We build the future.</h1>
      <div className="w-[33%] max-md:w-0"></div>
      </div>
      <ParaResuse text2="Our team's expertise is unmatched in Canada in the creation, design, and development of web and mobile applications. We have been creating delightful digital products for nearly two decades, always with the same purpose in mind: To build the best team, the best place to work, and a better world." 
      showParagraph={true} paraContainer="para-container" buildFutureClasses="px-0 flex-row-reverse"/>
      </div>      
      
       <div className='pt-16 pb-52 overflow-hidden  max-xl:pt-14 max-xl:pb-40 max-lg:pt-12 max-lg:pb-32 max-md:pt-8 max-md:pb-24 max-sm:pb-5xl max-xxs:pt-6 max-xxs:pb-3xl min-2xl:pb-64'>
        <div className='slider-container' >
        <Slider {...settings} >
        <img src={sliderImg1} alt="slider1" className=' mr-4'/>
        <img src={sliderImg2} alt="slider2" className=' mr-4'/>        
        </Slider>
        </div>
      </div>
    </div>
   
  )
}
