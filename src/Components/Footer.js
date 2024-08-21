import React from 'react'
import globe from '../assets/globe.svg'
import footerBeats from '../assets/footerBeats.svg'
import pulseAnimation from '../assets/animation/pulseAnimation.json'
import arrow from '../assets/arrow.svg'
import GFooterImg from '../assets/GFooterImg.png'
import { Player } from '@lottiefiles/react-lottie-player'
export default function Footer() {
  return (
    <>
    <div className='bg-[#242424] flex justify-between text-[#F7EDDE] px-[40px] pt-[64px] pb-[70px] min-h-[260px] rounded-t-[44px] mb-[-44px]'>
      <div className='flex items-center h-[36px] '>
      <a href="#" className='text-[28px]'>Go to Projects</a>
      <img src={arrow} alt="" width={28} className='h-[28px] pl-[8px]'/>
      </div>
      <img src={GFooterImg} alt="GGo" width={100} className='h-[50px]'/>
    </div>
    <div className=' bg-[black] text-[#F7EDDE] overflow-x-hidden rounded-t-[44px]'>
      <div className='grid grid-cols-3 gap-x-[160px] text-[17px] pt-[48px] px-[60px]'>
        <div>
          <h3 className='text-[28px] mb-[16px] '>Let's work together</h3>
          <ul className='flex flex-col gap-[16px]'>
          <a>Quebec City</a>
          <a>Montreal</a>
          </ul>
        </div>
        
        <div>
          <h3 className='text-[28px] mb-[16px]'>Share our expertise</h3>
          <ul className='flex flex-col gap-[16px]'>
          <a href="#">Craft Blog</a>
          <a href="#">Open Source Projects</a>
          <a href="#">DevTalks Podcast</a>
          </ul>
        </div>
        <div>
          <h1 className='text-5xl mb-[16px] max-w-[83.33%]'>Join our team</h1>
          <a href="#">Available positions</a>
        </div>
      {/* </div> */}
      {/* <div className='flex items-center justify-between mt-[80px]'> */}
        <div className='flex flex-col my-[80px]'>
        <a href="#">1 888 437 4258</a>
        <a href="#">info@mirego.com</a>
        </div>
        <div className='flex flex-wrap max-w-[300px] my-[80px] gap-[6px]'>
          <a href="#" className='py-[6px] px-[10px] rounded-3xl border'>LinkedIn</a>
          <a href="#" className='py-[6px] px-[10px] rounded-3xl border'>GitHub</a>
          <a href="#" className='py-[6px] px-[10px] rounded-3xl border'>Instagram</a>
          <a href="#" className='py-[6px] px-[10px] rounded-3xl border'>Facebook</a>
          <a href="#" className='py-[6px] px-[10px] rounded-3xl border'>Youtube</a>
        </div>
        <div className='flex my-[80px]'>
          <img src={globe} alt="globe" width={25} className='h-[25px]'/>
          <p className='mt-[2.5px] mb-[2.5px] ml-[10px]'>FR</p>
        </div>
      </div>
      <div className='pb-[80px] mx-[-30px]'>
      {/* <Player src={pulseAnimation} speed='1' autoplay background='transparent'> */}
      <div className='flex flex-col h-full w-full'>
      <div className='flex h-full w-full bg-transparent'>
      <img src={footerBeats} alt="" />
      </div>
      </div>      
      {/* </Player> */}
      </div>

      <div className='flex justify-between px-[60px] pb-[48px] text-[#5B5B5B]'>
        <h3>&copy; MIREGO</h3>
        <h3>Cookies Setting</h3>
        <h3>Privacy policy</h3>
      </div>
    </div>
    </>
  )
}
