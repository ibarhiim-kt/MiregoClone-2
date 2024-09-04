import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Img1 from '../../assets/expertise-1.webp';
import Arrow from '../../assets/black-arrow-right.svg';
import Img2 from '../../assets/expertise-2.webp';
import Img3 from '../../assets/expertise-3.webp';

gsap.registerPlugin(MotionPathPlugin);

export default function Expertise() {

  useEffect(() => {
    gsap.to('#arrowRight', {
      duration: 10,  // Slower speed with a longer duration
      repeat: -1,
      motionPath: {
        path: '#pathTop',
        align: '#pathTop',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: "linear",  // Consistent speed throughout the animation
    });

    gsap.to('#arrowLeft', {
      duration: 10,  // Slower speed with a longer duration
      repeat: -1,
      motionPath: {
        path: '#pathBottom',
        align: '#pathBottom',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.25,
        end: 1.25,
      },
      ease: "linear",  // Consistent speed throughout the animation
    });
  }, []);

  return (
    <>
      <Helmet>   
        <title>Expertise - Mirego</title>
        <meta name="description" content="This is the expertise page description" />      
      </Helmet>
      <div className='mx-auto max-w-screen-xl'>
        <div className='pt-24 px-lg flex'>
          <div>
            <p className='text-2xl font-[AlmiregoDisplayLight] font-extralight leading-[98%] max-2xl:text-5xl min-2xl:px-24 max-xl:text-4xl'>
              We help build <span className='font-NewsreaderItalic font-light -tracking-[1.75px]'>digital businesses. </span>
            </p>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-xl text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Discover our approach
              </button>
            </div>
            <br></br>
          </div>
          <div className='w-1/3'>
          </div>
        </div>

        <div className='flex justify-center align-middle pt-lg'>
          <img src={Img1} className='w-[94%] rounded-3xl' />
        </div>

        <div className='pt-20 flex gap-14'>
        <div className='w-1/2'>{/* Animation div*/}</div>
        
        {/*Text div */}
        <div className='w-1/2'>
         <p className='font-[AlmiregoDisplayRegular] text-lg leading-tight-md tracking-tight'>One of a few end-to-end digital product teams.</p>
         <p className='font-[AlmiregoRegular] mt-12 text-[21px] pr-[85px] tracking-normal'>
         No matter how well defined or vague their idea, our clients can count on us to help them turn their vision into a functional 
         digital product or service that delivers an exceptional user experience, enables them to achieve their business goals, and 
         supports their digital strategy.
         </p>
        </div>
        </div>
        <br></br>
        <div className='flex gap-14 mx-md'>
         <div className='w-1/2'>
          <p className='font-[AlmiregoDisplayRegular] text-lg leading-relaxed-lg tracking-tight'>Build the right things, build things right.</p>
          <p className='font-[AlmiregoRegular] mt-12 text-[21px] pr-[5px] leading-relaxed-lg tracking-normal'>We've been immersed in the technology industry for decades, working on a wide variety of projects.
            Among the startups we've helped, some have enjoyed resounding success at launch, while others have been less fortunate. 
            Among the established organizations we have helped, some have managed to reinvent themselves rather than disappear, while others could not adapt to the new environment. 
            The most important lesson we've learned is this: A robust strategy without proper execution is useless, and vice versa. One constantly supports the other.<br></br>
            <span className='mt-3 block'>We have perfected a rigorous process and developed the skills needed to identify the right things to build and the ideal way to build them. 
            We learn by doing. We think while building. And with each iteration, we help create digital businesses driven by new digital products and services.</span>
            </p>
         </div>
         <div className='w-1/2'>
         <img alt='error_Img' src={Img2} className='rounded-3xl'/>
         </div>
        </div>

        <div className='flex mx-md gap-14 mt-[155px]'>
          <div className='w-1/2'>
            <p className='font-[AlmiregoDisplayRegular] text-lg leading-relaxed-lg tracking-tight'>Our manifesto</p>
          </div>
          <div className='w-1/2'>
          <p className='font-[AlmiregoRegular] text-[21px] pr-[5px] leading-relaxed-lg tracking-normal'>A single digital product now has the power to transform an entire industry. 
            The performance and survival of many organizations now depend on their ability to integrate digital 
            products into the core of their business strategy. Our team's manifesto documents 16 principles that we 
            believe are the cornerstone of creating exceptional digital products that achieve their goals and stand the test of time.</p>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-xl text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Read our manifesto
              </button>
            </div>
          </div>
        </div>

        <div className='mx-9 mt-14'>
        <img alt='error_Img' src={Img3} className='rounded-3xl'/>
        </div>

        {/* Ending cards */}
        <div className='w-full flex flex-row'>
        {/* Card 1 */}
        <div className='mt-24 w-full rounded-t-3xl bg-[#ff4254] '>
        <p>Sample</p>

        </div>
        </div>
      </div>
    </>
  );
}
