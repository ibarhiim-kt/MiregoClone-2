import React from 'react'
import starBox from './assets/starBox.svg'
export default function ContactUs() {
  return (
    <div>
    <div className='pb-64 font-AlmiregoDisplayRegular max-md:pb-24 '>
      <div className='p-10 bg-cream-primary rounded-3xl max-md:p-5'>
            <div className='flex items-center justify-between mb-[190px] text-xs max-md:text-md-base max-md:mb-[150px] max-sm:mb-xl max-xxs:mb-[50px] max-sm:text-xxs max-xxs:text-[14px]'>
                <h1>Have a project to build?</h1>
                <img src={starBox} alt="starBox"/>
            </div>
            <div className='home-btn-container'>
                <a href="#" className='home-btns'>Contact Us</a>
            </div>  
      </div>
    </div>    
    </div>
  )
}
