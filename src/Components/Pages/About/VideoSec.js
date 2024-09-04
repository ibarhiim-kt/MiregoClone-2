import React from 'react'
import aboutVideo from './assets/aboutVideo.mp4'
import aboutSecImg from './assets/videoSecImg.webp'
export default function VideoSec() {
  return (
    <div>
      <div className='py-16 px-10 flex justify-between gap-2 max-xl:py-14 max-lg:py-12 max-md:flex-col max-md:px-4  max-md:py-8 max-[424px]:px-2 max-[320px]:py-6 min-[3100px]:justify-start min-[3100px]:gap-[42px] 
       min-[4700px]:gap-[60px]'>
        <div className='w-[33%] overflow-hidden  max-md:w-[100%] distinctiveCardGsap'>
            <img src={aboutSecImg} alt="distinctiveCultureImage" className='rounded-3xl w-[100%]'/>
        </div>
        <div className='w-[66%] overflow-hidden max-md:w-[100%] min-[3100px]:w-[43%] min-[4700px]:w-[32%]'>
        <video src={aboutVideo} autoPlay loop muted className='w-full rounded-[20px]'></video>
        </div>
        
      </div>
    </div>
  )
}
