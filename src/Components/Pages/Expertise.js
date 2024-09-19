import React from 'react'
import { Helmet } from 'react-helmet-async'
// import arrow from '../assets/arrow.svg'
// import GFooterImg from '../assets/GFooterImg.png'
export default function Expertise() {
  return (
    <>
    <Helmet>   
      <title>Expertise - Mirego</title>
      <meta name="description" content="This is the expertise page description" />      
    </Helmet>
    <div className='pt-32 px-[140px] flex'>
      <div>
      <div className='text-[88px] font-light leading-[105%] tracking-[-1.75px]'>
        We help build <span className='font-Newsreader'>digital bussiness.</span>
      </div>
      <div className='mt-12'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-base text-[#FFFFFF] tracking-[0.3px]'>Discover our approach</a>
      </div>
      </div>
      <div className='w-1/3'>         
      </div>
      {/* <div className='bg-[#242424] flex justify-between text-[#F7EDDE] px-[40px] pt-[64px] pb-[70px] min-h-[260px] rounded-t-[44px] mb-[-44px]'>
      <div className='flex items-center h-[36px] '>
      <a href="#" className='text-[28px]'>Go to Projects</a>
      <img src={arrow} alt="" width={28} className='h-[28px] pl-[8px]'/>
      </div>
      <img src={GFooterImg} alt="GGo" width={100} className='h-[50px]'/>
    </div> */}
    </div>
    </>
  )
}
