import React from 'react'
import globe from '../assets/globe.svg'
import footerPulse from '../assets/footerBeats.svg'
import gsap from 'gsap'
import purpleArrow from '../assets/purpleArrow.svg'
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

  const socialLinks = [
    {text:'LinkedIn'},
    {text:'Github'},
    {text:'Instagram'},
    {text:'Facebook'},
    {text:'Youtube'}
  ]

  return (      
    <div className=' bg-black text-[#F7EDDE] overflow-x-hidden rounded-t-[44px] font-AlmiregoDisplayRegular'>
      <div className='grid grid-cols-3 gap-x-[160px] text-[17px] pt-[48px] px-[60px]'>
        <div>
          <h3 className='text-[28px] mb-4 leading-[1.1718]'>Let's work together</h3>
          <ul className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight'>
          <a href="#" className='group hover:text-[#b5a6ff] self-start'>Quebec City <span className='hidden group-hover:inline'>— G1N 4C2</span></a>
          <a href="#" className='group hover:text-[#b5a6ff] self-start'>Montreal <span className='hidden group-hover:inline'> — H3C 1W1</span></a>
          </ul>
        </div>
        
        <div>
          <h3 className='text-[28px] mb-4 leading-[1.1718]'>Share our expertise</h3>
          <ul className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight '>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Craft Blog <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Open Source Projects <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>DevTalks Podcast <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          </ul>
        </div>
        <div>
          <h1 className='text-[52px] mb-4 max-w-[83.33%] leading-[1.1]'>Join our team</h1>
          <a href="#" className='font-AlmiregoLight flex group hover:text-[#b5a6ff]'>Available positions <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
        </div>
      {/* </div> */}
      {/* <div className='flex items-center justify-between mt-[80px]'> */}
        <div className='flex flex-col my-20 font-AlmiregoLight'>
        <a href="#" className='leading-[1.177] hover:text-[#b5a6ff] self-start'>1 888 437 4258</a>
        <a href="#" className='leading-[1.177] mt-4 underline hover:text-[#b5a6ff] self-start'>info@mirego.com</a>
        </div>
        
        <div className='flex flex-wrap max-w-[300px] my-20 gap-[6px] font-AlmiregoLight'>
        {socialLinks.map((map)=>(
          <a href="#" className='py-[3.25px] px-[9.463px] rounded-3xl border hover:bg-[#b5a6ff] hover:text-[#050307] hover:border-transparent'>{map.text}</a>   
        ))}      
        </div>
        
        <div className='flex my-20 hover:text-[#b5a6ff] cursor-pointer'>
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
      <div className='flex justify-between px-[60px] text-[15px] pb-12 text-[#5B5B5B]'>
        <h3>&copy; 2024 MIREGO</h3>
        <a href='#' className='hover:text-[#F7EDDE]'>Cookies Setting</a>
        <a href='#' className='hover:text-[#F7EDDE]'>Privacy policy</a>
      </div>
    </div>
    
  )
}
