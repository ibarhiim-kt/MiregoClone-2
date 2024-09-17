import React from 'react'
import arrow from '../HomePage/assets/arrow.svg'
import contactGo from './assets/contactGo.svg'

export default function GoToAbout() {
  return (
    <div className="pt-16 px-10 pb-[70px] bg-[#242424] text-cream-primary flex items-start justify-between rounded-t-[44px] mb-[-44px]">
    <div className='flex items-center justify-center text-base'>
    <p>Go to About</p>
    <img src={arrow} alt='arrowImg' className='ml-2 h-7'/>
    </div>
    <div>
    <img src={contactGo} alt="contactGo Img" />
    </div>
</div>
  )
}
