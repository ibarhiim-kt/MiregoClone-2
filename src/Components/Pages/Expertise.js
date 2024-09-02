import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Img1 from '../../assets/expertise-1.webp';
import LeftArrow from '../../assets/black-arrow-left.svg';
import RightArrow from '../../assets/black-arrow-right.svg';

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
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div className='mx-auto max-w-screen-xl'>
        <div className='pt-24 px-[70px] flex'>
          <div>
            <div className='text-[88px] font-[AlmiregoDisplayLight] font-extralight leading-[105%] max-[1440px]:text-[88px] min-[1440px]:px-24 max-xl:text-[80px]'>
              We help build <span className='font-NewsreaderItalic font-light tracking-[-1.75px]'>digital businesses. </span>
            </div>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-xl text-base text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Discover our approach
              </button>
            </div>
            <br></br>
          </div>
          <div className='w-[33%]'>
          </div>
        </div>

        <div className='flex justify-center align-middle pt-[72px]'>
          <img src={Img1} className='w-[94%] rounded-3xl' />
        </div>

        <div className='pt-20 flex'>
          <div className='w-1/2 relative mx-20' style={{ height: '700px' }}>
            {/* Arrows animation */}

            {/* Shape #1 */}
            <svg className='w-full h-[650px] absolute top-0 left-0'>
              {/* Top rectangle path */}
              <path id="pathTop" d="M50,100 H350 Q400,100 400,150 T350,200 H50 Q0,200 0,150 T50,100" fill="transparent" stroke="black" strokeWidth="2" />
              <image id="arrowRight" href={RightArrow} width="20" height="20" />
              {/* Text for top rectangle */}
              <text x="30%" y="150" textAnchor="middle" fontSize="20" fill="black" dy="-10">STRATEGY</text>
            </svg>

            {/* Shape #2 */}
            <svg className='w-full h-[650px] absolute -top-5 left-0'>
              {/* Middle curved shape */}
              <path id="pathMiddle" d="M50,180 H350 Q400,180 400,230 T350,280 H50 Q0,280 0,230 T50,180" fill="transparent" stroke="black" strokeWidth="2" />
              {/* Text for middle shape */}
              <text x="30%" y="230" textAnchor="middle" fontSize="20" fill="black" dy="-10">DESIGN</text>
            </svg>

            {/* Shape #3 */}
            <svg className='w-full h-[550px] absolute -top-9 left-0'>
              {/* Bottom rectangle path */}
              <path id="pathBottom" d="M50,260 H350 Q400,260 400,310 T350,360 H50 Q0,360 0,310 T50,260" fill="transparent" stroke="black" strokeWidth="2" />
              <image id="arrowLeft" href={LeftArrow} width="20" height="20" />
              {/* Text for bottom rectangle */}
              <text x="30%" y="340" textAnchor="middle" fontSize="20" fill="black" dy="-10">DEVELOPMENT</text>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}