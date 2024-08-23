import React from 'react'
import distinctiveCultureVideo from '../../assets/animation/distinctiveCultureVideo.mp4'
import distinctiveCultureImage from '../../assets/distinctiveCultureImage.webp'

export default function DistinctiveCulture() {
  return (
    <div className='pt-64 pb-2'>        
        <h1 className='text-[120px] font-AlmiregoDisplayLight leading-[105%] px-10 '>A <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>distinctive </span>culture</h1>
      <div className='pt-16 px-[140px] flex justify-between gap-[8px] pb-2'>
        <div className='w-[50%]'></div>
        <div className='w-[50%] font-AlmiregoRegular'>
        <p className='text-[21px] tracking-[0.4px] leading-[125%]'>We aim to create the best place to work. Crafting digital products is more than a job to us: it's a calling. Our strategy, design, and development teams are made up of inspired and inspiring people. Our passion for our art is boundless.</p>
        <div className='mt-12 flex'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1]'>Discover our culture</a>
      </div>  
      </div>
      </div>
      <div className='pt-16 pb-64 px-10 flex justify-between gap-2'>
        <div className='w-[33%] overflow-hidden '>
        <video src={distinctiveCultureVideo} autoPlay loop muted className='w-full rounded-[20px]'></video>
        </div>
        <div className='w-[66%] overflow-hidden rounded-3xl'>
            <img src={distinctiveCultureImage} alt="distinctiveCultureImage" />
        </div>
      </div>
    </div>
  )
}
