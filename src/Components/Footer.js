import React, { useEffect,useState } from 'react';
import lottie from 'lottie-web';
import wavesAnima from '../assets/animation/wavesAnima.json';
import globe from '../assets/globe.svg'
import purpleGlobe from '../assets/purpleGlobe.svg'
import ScrollTrigger from 'gsap/ScrollTrigger';
import goPurple from '../assets/goPurple.svg'
// import footerPulse from '../assets/footerBeats.svg'
import gsap from 'gsap'
import purpleArrow from '../assets/purpleArrow.svg'
// import PulseAnimation from './pulseAnimation'
// import { LottiePlayer } from '@lottiefiles/lottie-player'

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);  };
  const handleMouseLeave = () => {
    setIsHovering(false);    
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y:0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // var values = "-100%;-10%".split(";"),
  //   currentIndex = 0;

  // gsap.set("#path, #code", { visibility: "visible" });

  // function next() {
  //   gsap.killTweensOf(next); 
  //   if (++currentIndex === values.length) {
  //     currentIndex = 0;
  //   }
  //   if (values[currentIndex] === "true") {
  //     gsap.set("#current", { text: values[currentIndex] });
  //   } else {
  //     gsap.set("#current", { text: '"' + values[currentIndex] + '"' });
  //   }
  //   gsap.to("#path", {
  //     drawSVG: values[currentIndex],
  //     duration: 1,    
  //     ease: "power1.inOut",
  //   });
  // }

  {/* Lottie Animation (wave effect)*/}
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-footer'),
      renderer: 'svg',      
      loop: false,
      autoplay: false, 
      animationData: wavesAnima,
    });
    
    ScrollTrigger.create({
      trigger: '#lottie-footer',
      start: 'top 80%', 
      onEnter: () => {
        animation.play();
      },
    });   
    return () => {
      animation.destroy(); // Ensures the previous animation is removed
    };
  }, []);
  const socialLinks = [
    { text: 'LinkedIn' },
    { text: 'GitHub' },
    { text: 'Instagram' },
    { text: 'Facebook' },
    { text: 'YouTube' },
  ];
  const expertise = [
    {
      text:'Craft Blog',
      purpleArrow:purpleArrow
    },
    {
      text:'Open Source Projects',
      purpleArrow:purpleArrow
    },
    {
      text:'DevTalks Podcast',
      purpleArrow:purpleArrow
    },
  ]

  return (      
    <div className='bg-black text-[#F7EDDE] overflow-x-hidden rounded-t-[44px] font-AlmiregoDisplayRegular selection:bg-[#b5a6ff] blackNavbarTrigger pb-10'> 

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
          <a href="#" className='group hover:text-[#b5a6ff] self-start transition-colors duration-100 ease-in-out'>Quebec City <span className='hidden group-hover:inline max-[320px]:inline'>— G1N 4C2</span></a>
          <a href="#" className='group hover:text-[#b5a6ff] self-start transition-colors duration-100 ease-in-out'>Montreal <span className='hidden group-hover:inline max-[320px]:inline'> — H3C 1W1</span></a>
          </ul>
        </div>
        {/* For responsive */}
        <div className='flex-col text-[17px] font-AlmiregoLight max-lg:text-[16px] hidden max-md:flex'>
        <a href="#" className='leading-[1.177] hover:text-[#b5a6ff] self-start transition-colors duration-300 ease-in-out'>1 888 437 4258</a>
        <a href="#" className='leading-[1.177] mt-4 underline hover:text-[#b5a6ff] self-start transition-colors duration-300 ease-in-out'>info@mirego.com</a>
        </div>

        <div className='max-md:hidden'>
          
          <h3 className='text-[28px] mb-4 leading-[1.1718] max-xl:text-[24px] max-lg:text-[20px] max-md:hidden'>Share our <br className='hidden max-[1132px]:inline max-lg:hidden'/>expertise</h3>         
          <div className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight max-lg:gap-[12px] '>
          {expertise.map((map)=>(
          <a href="#" className='flex group self-start hover:text-[#b5a6ff] transition-colors duration-300 ease-in-out'>{map.text}<span className='ml-1 opacity-0 transform group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-in-out'><img src={map.purpleArrow} alt="purpleArrow"/></span></a>
        ))}
          </div>  
          
        </div>
        <div className='max-lg:hidden'>
        {isHovering &&(
        <img src={goPurple} alt="Go svg" style={{height:"6vw",width:"6vw", left:`${cursorPosition.x}px`, top:`${cursorPosition.y}px`}}  className="custom-cursor"/>)}
          <h1 className='text-[52px] mb-4 max-w-[83.33%] leading-[1.1] max-[1440px]:text-[48px] max-xl:text-[24px]  transition-colors duration-[300ms] ease-in-out cursor-none' onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}>Join our <br className='hidden max-[1076px]:inline'/>team</h1>
          <a href="#" className='font-AlmiregoLight flex group hover:text-[#b5a6ff] text-[17px]'>Available positions <span className='ml-1 opacity-0 transform group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-in-out'><img src={purpleArrow} alt="purpleArrow"/></span></a>
        </div>
      {/* </div> */}
      {/* <div className='flex items-center justify-between mt-[80px]'> */}
        <div className='flex flex-col my-20 text-[17px] font-AlmiregoLight max-xl:mt-16 max-lg:text-[16px] max-lg:my-[48px] max-md:hidden '>
        <a href="#" className='leading-[1.177] hover:text-[#b5a6ff] self-start transition-colors duration-300 ease-in-out'>1 888 437 4258</a>
        <a href="#" className='leading-[1.177] mt-4 underline hover:text-[#b5a6ff] self-start transition-colors duration-300 ease-in-out'>info@mirego.com</a>
        </div>

        {/* For responsive case */}
        <div className='hidden max-md:inline'>
          <h3 className='text-[28px] mb-4 leading-[1.1718] max-xl:text-[24px] max-lg:text-[20px] max-md:hidden'>Share our <br className='hidden max-[1132px]:inline max-lg:hidden'/> expertise</h3>
          <div className='flex flex-col gap-4 leading-[1.177] font-AlmiregoLight max-lg:gap-[12px] max-[390px]:gap-[16px]'>
          {expertise.map((map)=>{
          <a href="#" className='flex group self-start hover:text-[#b5a6ff] transition-colors duration-[300ms] ease-in-out'>{map.text}<span className='ml-1 opacity-0 transform group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-in-out'><img src={map.purpleArrow} alt="purpleArrow"/></span></a>
        })}
          {/* <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>Open Source Projects <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a>
          <a href="#" className='flex group self-start hover:text-[#b5a6ff]'>DevTalks Podcast <span className='ml-1 hidden group-hover:inline'><img src={purpleArrow} alt="purpleArrow"/></span></a> */}
          </div>
        </div>
        <div className='flex flex-wrap max-w-[300px] my-20 gap-[6px] font-AlmiregoLight max-xl:mt-16 max-lg:my-[48px] max-md:mt-[10px] max-md:mb-[48px] max-md:max-w-[91.67%] max-[425px]:m-0'>
        {socialLinks.map((map)=>(
          <a href="#" className='py-[3.25px] px-[9.463px] rounded-3xl border hover:bg-[#b5a6ff] hover:text-[#050307] hover:border-transparent max-[1075px]:px-[10px]'>{map.text}</a>   
        ))}      
        </div>
        <div className='flex'>        
        <div className='flex my-20 group cursor-pointer max-xl:mt-16 max-lg:mt-0 max-lg:mb-[48px] max-md:mb-0 max-h-[30px] '>
          <img src={globe} alt="globe" width={25} className='h-[25px] transition-opacity duration-300 ease-in-out group-hover:opacity-0'/>
          <img src={purpleGlobe} alt="purpleGlobe" width={25} className='h-[25px] absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'/>
          <p className='mt-[2.5px] mb-[2.5px] ml-[10px] text-[17px] max-lg:text-[16px] max-md:mt-[3.3px] max-md:mb-[3.3px] group-hover:text-[#b5a6ff] transition-colors duration-300 ease-in-out'>FR</p>
        </div>
        </div>
        </div>
      </div>
      
      {/* Lottie Animation */}
      <div className='pb-[80px] mx-[-30px] max-lg:pb-[48px] max-[425px]:pb-[32px]'>
        <div>
          <div id="lottie-footer" className='w-full overflow-hidden'></div>
        </div>
      </div>                                                                                                                                      
     
      {/* Ending footer tags */}
      <div className='flex justify-between items-center font-AlmiregoRegular px-[60px] text-[15px] pb-12 text-[#5B5B5B] max-lg:text-[14px] max-lg:px-10 max-lg:pb-6 max-md:px-6 max-md:text-[12px] max-[390px]:px-5 max-[390px]:pb-0 max-[320px]:flex-col'>
        <h3 className='max-[320px]:hidden'>&copy; 2024 MIREGO</h3>
        <a href='#' className='hover:text-[#F7EDDE] '>Cookies Settings</a>
        <h3 className='max-[320px]:inline hidden'>&copy; 2024 MIREGO</h3>
        <a href='#' className='hover:text-[#F7EDDE] max-[390px]:mt-[12px]'>Privacy policy</a>
      </div>
    </div>
  );
}