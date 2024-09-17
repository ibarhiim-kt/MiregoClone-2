import React from 'react'
import starBox from  './assets/starBox.svg'
export default function ContactUs() {
  return (
    <div>
    <div className='pb-64 font-AlmiregoDisplayRegular'>
      <div className='p-10 bg-cream-primary rounded-[40px]'>
            <div className='flex items-center justify-between mb-[190px] text-xs'>
                <h1>Have a project to build?</h1>
                <img src={starBox} alt="starBox" />
            </div>
            <div className='home-btn-container'>
                <a href="#" className='home-btns'>Contact Us</a>
            </div>  
      </div>
    </div>
    
    </div>
  )
}
