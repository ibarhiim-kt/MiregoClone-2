import React from 'react'
import aboutVideo from './assets/aboutVideo.mp4'
import aboutSecImg from './assets/videoSecImg.webp'
export default function VideoSec() {
  return (
    <div>
      <div className='py-16 px-10 flex justify-between gap-2 max-xl:py-14 max-lg:py-12 max-md:flex-col max-md:px-4  max-md:py-8 max-sm:px-2 max-xxs:py-6 5xl:justify-start 5xl:gap-[42px] 
       min-6xl:gap-[60px]'>
        <div className='w-lg overflow-hidden  max-md:w-full distinctiveCardGsap'>
            <img src={aboutSecImg} alt="distinctiveCultureImage" className='rounded-xl w-full'/>
        </div>
        <div className='w-[66%] overflow-hidden max-md:w-full 5xl:w-xl  6xl:w-lgW]'>
        <video src={aboutVideo} autoPlay loop muted className='w-full rounded-xl'></video>
        </div >                              
      </div>
    </div>
  )
}
