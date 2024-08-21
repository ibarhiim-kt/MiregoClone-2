import React from 'react'
import video from '../../assets/animation/video.mp4'
export default function Video() {
  return (
    <div className='px-10'>
    <div className='flex justify-between mb-8 uppercase tracking-[0.3px] opacity-0'>
        <span>Digital</span>
        <span>Visionaries</span>
    </div>
    <div className='flex items-center justify-center w-full'>
    <button className='flex justify-center items-center overflow-hidden w-[20%] rounded-[32px] videoAnimation'>
      <video src={video} autoPlay playsInline loop className='min-w-[300px] w-full h-[95vh] object-cover'></video>
      </button>
    </div>
    </div>
  )
}
