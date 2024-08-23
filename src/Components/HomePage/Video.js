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
    <div className='px-10 max-[768px]:px-4 max-[424px]:px-2'>
    <div className='flex justify-between mb-8 uppercase tracking-[0.3px] opacity-0'>
        <span>Digital</span>
        <span>Visionaries</span>
    </div>
    <div className='flex items-center justify-center w-full '>
    <button className='flex justify-center items-center overflow-hidden w-[20%] rounded-[32px] videoAnimation'>
      <video src={video} autoPlay muted playsInline loop className='min-w-[300px] w-full h-[95vh] object-cover max-[768px]:h-[80vh] 
      '></video>
      </button>
    </div>
    
    <div className='flex gap-2 pt-2 font-AlmiregoDisplayLight max-[1024px]:flex-wrap max-[768px]:flex-col'>
    {cards.map((map)=>(
      <div className='bg-[#f7edde] p-8 w-[25%] rounded-[32px] max-[1024px]:rounded-[24px] max-[1024px]:w-[calc(50%-4px)] max-[768px]:w-[100%] max-[768px]:p-[28px] max-[424px]:p-[24px]'>
        <p className=' mb-4 leading-[105%] mt-[38px] max-[768px]:mt-[21px] max-[424px]:mt-[15px] max-[320px]:mt-[8px]'>
        <span className='text-[88px] tracking-[-1.75px] max-xl:text-[72px] max-[768px]:text-[56px]
         max-[424px]:text-[40px] max-[320px]:text-[32px]'>{map.number}</span>
        <sup className='text-[48.4px] relative top-[-0.75em] max-[1024px]:text-[39.6px] max-[768px]:text-[30.8px] max-[424px]:text-[22px] max-[320px]:text-[17.6px]'>{map.plus}</sup>
        </p>
        <p className="text-[21px] leading-[125%] mt-11 tracking-[0.4px] font-AlmiregoRegular max-[768px]:text-[18px] max-[768px]:mt-[26.6px] max-[424px]:mt-[22.2px] max-[390px]:text-[17px] max-[320px]:mt-[21.2px]"><br></br>{map.text}</p>
      </div>        
    ))}
    </div>
    
    </div>
  )
}
