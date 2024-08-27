import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import wavesAnima from '../assets/animation/wavesAnima.json';
import globe from '../assets/globe.svg'
import footerPulse from '../assets/footerBeats.svg'
import gsap from 'gsap'
import purpleArrow from '../assets/purpleArrow.svg'
import PulseAnimation from './pulseAnimation'
import { LottiePlayer } from '@lottiefiles/lottie-player'

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

  {/* Lottie Animation (wave effect)*/}
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('lottie-footer'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: wavesAnima,
    });
  }, []);

  const socialLinks = [
    { text: 'LinkedIn' },
    { text: 'GitHub' },
    { text: 'Instagram' },
    { text: 'Facebook' },
    { text: 'YouTube' },
  ];


  return (      
    <div className='bg-black text-[#F7EDDE] overflow-x-hidden rounded-t-[44px] font-AlmiregoDisplayRegular'> 

    {/* For responsive */}
    {/* max-[390px]:gap-[16px] */}
      <div className='text-[17px] pt-[48px] px-[60px] max-[1076px]:text-[16px] max-lg:px-10 max-md:px-6 max-md:pb-[48px] max-md:pt-8 max-[390px]:pt-6 max-[390px]:gap-[16px] max-[390px]:px-5 max-[390px]:pb-3'>
 {/* d565f10e67e5de11c3fc84c595f482ca2e070e7b */}
      <div className="hidden max-lg:inline">
          <h1 className='text-[36px] mb-4 max-w-[83.33%] leading-[1.1] max-md:text-[28px] max-[390px]:text-[24px]'>Join our team</h1>
          <a href="#" className='font-AlmiregoLight flex group hover:text-[#b5a6ff] text-[16px] leading-[1]'>Available positions <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
        </div>
        <div className='grid grid-cols-3 gap-x-[160px] max-xl:grid-cols-[1fr_1.5fr_1fr] max-lg:grid-cols-[1fr_1fr] max-lg:mt-[48px] max-lg max-lg:gap-x-[140px] max-md:gap-x-0 max-md:gap-y-[40px] max-[390px]:grid-cols-[1fr]'>
        <div>
          <h3 className='text-[28px] mb-4 leading-[1.1718] max-xl:text-[24px] max-lg:text-[20px] max-md:hidden'>Let's work <br className='hidden max-[1256px]:inline max-lg:hidden'/> together</h3>
          <ul className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight max-lg:gap-[12px]'>
          <a href="#" className='group hover:text-[#b5a6ff] self-start'>Quebec City <span className='hidden group-hover:inline max-[320px]:inline'>— G1N 4C2</span></a>
          <a href="#" className='group hover:text-[#b5a6ff] self-start'>Montreal <span className='hidden group-hover:inline max-[320px]:inline'> — H3C 1W1</span></a>
          </ul>
        </div>
        {/* For responsive */}
        <div className='flex-col text-[17px] font-AlmiregoLight max-lg:text-[16px] hidden max-md:flex'>
        <a href="#" className='leading-[1.177] hover:text-[#b5a6ff] self-start'>1 888 437 4258</a>
        <a href="#" className='leading-[1.177] mt-4 underline hover:text-[#b5a6ff] self-start'>info@mirego.com</a>
        </div>

        <div className='max-md:hidden'>
          <h3 className='text-[28px] mb-4 leading-[1.1718] max-xl:text-[24px] max-lg:text-[20px] max-md:hidden'>Share our <br className='hidden max-[1132px]:inline max-lg:hidden'/> expertise</h3>
          <ul className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight max-lg:gap-[12px]'>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Craft Blog <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Open Source Projects <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>DevTalks Podcast <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          </ul>
        </div>
        <div className='max-lg:hidden'>
          <h1 className='text-[52px] mb-4 max-w-[83.33%] leading-[1.1] max-[1440px]:text-[48px] max-xl:text-[24px]'>Join our <br className='hidden max-[1076px]:inline'/> team</h1>
          <a href="#" className='font-AlmiregoLight flex group hover:text-[#b5a6ff] text-[17px]'>Available positions <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
        </div>
      {/* </div> */}
      {/* <div className='flex items-center justify-between mt-[80px]'> */}
        <div className='flex flex-col my-20 text-[17px] font-AlmiregoLight max-xl:mt-16 max-lg:text-[16px] max-lg:my-[48px] max-md:hidden'>
        <a href="#" className='leading-[1.177] hover:text-[#b5a6ff] self-start'>1 888 437 4258</a>
        <a href="#" className='leading-[1.177] mt-4 underline hover:text-[#b5a6ff] self-start'>info@mirego.com</a>
        </div>

        {/* For responsive case */}
        <div className='hidden max-md:inline'>
          <h3 className='text-[28px] mb-4 leading-[1.1718] max-xl:text-[24px] max-lg:text-[20px] max-md:hidden'>Share our <br className='hidden max-[1132px]:inline max-lg:hidden'/> expertise</h3>
          <ul className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight max-lg:gap-[12px] max-[390px]:gap-[16px]'>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Craft Blog <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Open Source Projects <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>DevTalks Podcast <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          </ul>
        </div>
        <div className='flex flex-wrap max-w-[300px] my-20 gap-[6px] font-AlmiregoLight max-xl:mt-16 max-lg:my-[48px] max-md:mt-[10px] max-md:mb-[48px] max-md:max-w-[91.67%] max-[425px]:m-0'>
        {socialLinks.map((map)=>(
          <a href="#" className='py-[3.25px] px-[9.463px] rounded-3xl border hover:bg-[#b5a6ff] hover:text-[#050307] hover:border-transparent max-[1075px]:px-[10px]'>{map.text}</a>   
        ))}      
        </div>
        
        <div className='flex my-20 hover:text-[#b5a6ff] cursor-pointer max-xl:mt-16 max-lg:mt-0 max-lg:mb-[48px] 
        max-md:mb-0'>
          <img src={globe} alt="globe" width={25} className='h-[25px]'/>
          <p className='mt-[2.5px] mb-[2.5px] ml-[10px] text-[17px] max-lg:text-[16px] max-md:mt-[3.3px] max-md:mb-[3.3px]'>FR</p>
        </div>
        </div>
      </div>
      {/* <div className='pb-[80px] mx-[-30px] max-lg:pb-[48px] max-[425px]:pb-[32px]'>      
      <div className='flex flex-col h-full w-full'>
      <div className='flex h-full w-full bg-transparent'>
      <img src={footerPulse} alt="" className='pulseAnima w-full'/>      
        
      </div>
      </div>          
      </div> */}
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

      {/* Lottie Animation */}
      <div className=' pb-[80px] mx-[-30px] max-lg:pb-[48px] max-[425px]:pb-[32px]'>
        <div className='flex justify-center'>
          <div id="lottie-footer" className='w-100% h-[350px] overflow-hidden'></div>
        </div>
      </div>
     
      {/* Ending footer tags */} 
      <div className='flex justify-between px-[60px] text-[15px] pb-12 text-[#5B5B5B] max-lg:text-[14px] max-lg:px-10 max-lg:pb-6 max-md:px-6 max-md:text-[12px] max-[390px]:px-5 max-[390px]:pb-0 max-[320px]:flex-col'>
        <h3 className='max-[320px]:hidden'>&copy; 2024 MIREGO</h3>
        <a href='#' className='hover:text-[#F7EDDE] mt-[-5px]'>Cookies Settings</a>
        <h3 className='max-[320px]:inline hidden'>&copy; 2024 MIREGO</h3>
        <a href='#' className='hover:text-[#F7EDDE] max-[390px]:mt-[12px]'>Privacy policy</a>
      </div>
    </div>
  );
}