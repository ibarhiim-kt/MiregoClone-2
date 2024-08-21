import React from 'react'
import video from '../../assets/animation/video.mp4'
export default function Video() {
  const cards = [
    {number:"15",
      text:"years experience creating digital products.",
      plus:"+"
    },
    {
      number:"300",
      text:"digital products launched since our inception.",
      plus:"+"
    },
    {
      number:"40",
      text:"prizes and awards.",
      plus:"+"
    },
    {
      number:"14M",
      text:"users of our products. ",
      plus:"+"
    }
  ]
  return (
    <div className='px-10'>
    <div className='flex justify-between mb-8 uppercase tracking-[0.3px] opacity-0'>
        <span>Digital</span>
        <span>Visionaries</span>
    </div>
    <div className='flex items-center justify-center w-full '>
    <button className='flex justify-center items-center overflow-hidden w-[20%] rounded-[32px] videoAnimation'>
      <video src={video} autoPlay playsInline loop className='min-w-[300px] w-full h-[95vh] object-cover'></video>
      </button>
    </div>
    
    <div className='flex gap-2 pt-2'>
    {cards.map((map)=>(
      <div className='bg-[#f7edde] p-[32px] w-[25%] rounded-[32px]'>
        <p>
        <span className='text-[88px] font-AnekDevanagari'>{map.number}</span>
        <sup className='text-[48.4px] font-AnekDevanagariS'>{map.plus}</sup>
        </p>
        <p className="text-[21px]">{map.text}</p>
      </div>
    ))}
    </div>
    
    </div>
  )
}
