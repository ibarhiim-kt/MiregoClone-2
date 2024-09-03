import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Img1 from '../../assets/expertise-1.webp';
import Arrow from '../../assets/black-arrow-right.svg';

gsap.registerPlugin(MotionPathPlugin);

export default function Expertise() {

  useEffect(() => {
    gsap.to('#arrowRight', {
      duration: 5,
      repeat: -1,
      motionPath: {
        path: '#pathTop',
        align: '#pathTop',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: "power1.inOut",
    });

    gsap.to('#arrowLeft', {
      duration: 5,
      repeat: -1,
      motionPath: {
        path: '#pathBottom',
        align: '#pathBottom',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.5, // Start the lower arrow halfway through the path
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div className='mx-auto max-w-screen-xl'>
        <div className='pt-24 px-[70px] flex'>
          <div>
            <p className='text-[80px] font-[AlmiregoDisplayLight] font-extralight leading-[105%] max-[1440px]:text-[88px] min-[1440px]:px-24 max-xl:text-[80px]'>
              We help build <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>digital businesses. </span>
            </p>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-xl text-base text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Discover our approach
              </button>
            </div>
            <br></br>
          </div>
          <div className='w-1/3'>
          </div>
        </div>

        <div className='flex justify-center align-middle pt-[72px]'>
          <img src={Img1} className='w-[94%] rounded-3xl' />
        </div>

        <div className='pt-20 flex'>
          <div className='w-1/2 relative mx-7' style={{ height: '800px' }}>
            {/* Arrows animation */}

            {/* Shape #1 */}
            <svg className='w-full h-[750px] absolute top-0 left-0'>
              {/* Top rectangle path */}
              <path id="pathTop" d="M50,100 H350 Q400,100 400,170 T350,240 H50 Q0,240 0,170 T50,100" fill="transparent" stroke="black" strokeWidth="2" />
              <image id="arrowRight" href={Arrow} width="20" height="20" />
              {/* Text for top rectangle */}
              <text x="30%" y="170" textAnchor="middle" fontSize="20" fill="black" dy="-10">STRATEGY</text>
            </svg>

            {/* Shape #2 */}
            <svg className='w-full h-[750px] absolute -top-5 left-0'>
              {/* Middle curved shape */}
              <path id="pathMiddle" d="M50,220 H350 Q400,220 400,290 T350,360 H50 Q0,360 0,290 T50,220" fill="transparent" stroke="black" strokeWidth="2" />
              {/* Text for middle shape */}
              <text x="30%" y="290" textAnchor="middle" fontSize="20" fill="black" dy="-10">DESIGN</text>
            </svg>

            {/* Shape #3 */}
            <svg className='w-full h-[750px] absolute -top-9 left-0'>
              {/* Bottom rectangle path */}
              <path id="pathBottom" d="M50,340 H350 Q400,340 400,410 T350,480 H50 Q0,480 0,410 T50,340" fill="transparent" stroke="black" strokeWidth="2" />
              <image id="arrowLeft" href={Arrow} width="20" height="20" />
              {/* Text for bottom rectangle */}
              <text x="30%" y="410" textAnchor="middle" fontSize="20" fill="black" dy="-10">DEVELOPMENT</text>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}