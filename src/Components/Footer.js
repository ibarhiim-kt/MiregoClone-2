import React from 'react'
import globe from '../assets/globe.svg'
import footerPulse from '../assets/footerBeats.svg'
import gsap from 'gsap'
import PulseAnimation from './pulseAnimation'
import { LottiePlayer } from '@lottiefiles/lottie-player'
import  wavesAnima from '../assets/animation/wavesAnima.json'

export default function Footer() {
  var values = "-100%;-10%".split(";"),
    currentIndex = 0;

  gsap.set("#path, #code", { visibility: "visible" });

  function next() {
    gsap.killTweensOf(next); //in case the user clicks, clear any delayed calls to this method.
    if (++currentIndex === values.length) {
      currentIndex = 0;
    }
    if (values[currentIndex] === "true") {
      gsap.set("#current", { text: values[currentIndex] });
    } else {
      gsap.set("#current", { text: '"' + values[currentIndex] + '"' });
    }
    gsap.to("#path", {
      drawSVG: values[currentIndex],
      duration: 1,    
      ease: "power1.inOut",
    });
  }

  return (
    <>
    
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
      <div className='flex flex-col h-full w-full'>
      <div className='flex h-full w-full bg-transparent'>
      <img src={footerPulse} alt="" className='pulseAnima'  />      
        
      </div>
      </div>          
      </div>
      {/* <div className='flex flex-col h-full w-full'> */}
      {/* <div className='flex h-full w-full bg-transparent'> */}
      {/* <img src={footerPulse} alt="Hi" /> */}
      {/* <PulseAnimation/> */}
      
      {/* <LottiePlayer src={wavesAnima} autoplay speed='1'>
          <img src={footerPulse} alt="helo" />
      </LottiePlayer> */}
      {/* </div>    
      </div> */}
      {/* <div className='w-full flex justify-center'>
      <div id="code">drawSVG:<div id="current">"100%"</div></div>
      <button id="next" onClick={next} class="dark-grey-button club-demo-button mb-[20px] block" >Next Example</button>
      </div>   */}
      <div className='flex justify-between px-[60px] pb-[48px] text-[#5B5B5B]'>
        <h3>&copy; MIREGO</h3>
        <h3>Cookies Setting</h3>
        <h3>Privacy policy</h3>
      </div>
    </div>
    </>
  )
}
