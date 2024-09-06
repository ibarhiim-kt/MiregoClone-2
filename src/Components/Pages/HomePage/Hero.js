import React, { useEffect } from 'react';
import together from './assets/together.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ParaResuse from '../../ReusableCode/ParaResuse';
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const words = ['of bussiness', 'of organization', 'of sports', 'of media', 'of entertainment', 'of travel', 'of agriculture', 'of retail', 'of food', 'of health', 'of real estate', 'of manufacturing', 'of finance', 'of insurance'];

  useEffect(() => {
    gsap.set('.word-slide', { opacity: 0, y: 50 });

    gsap.to('.word-slide', {
      opacity: 1,
      y: 0,
      duration: 0.2,  
      ease: 'power1.out',
      stagger: {
        each: 0.15,  
        from: 'start',
        ease: (index) => index < 3 ? 'power2.out' : 'power1.out', //slow down on first few bubbles
      },
      scrollTrigger: {
        trigger: '.animate-wordSlide',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="font-AlmiregoDisplayRegular px-xl max-xl:px-8 max-md:px-4 3xl:px-60">
      <div className="font-AlmiregoDisplayLight">
        <p className="gsapAnima text-5xl mr-3 align-middle inline-block leading-tight-md max-xl:text-4xl max-lg:text-xl max-md:text-xs max-md:mr-2 max-xxs:text-base">
          Building the future
        </p>

        <div className="pt-[2px] align-middle inline-block max-large:mt-[1.5px] max-xxs:mt-0">
          <div className="overflow-hidden h-2xl max-xl:h-xl max-lg:h-md max-md:h-xs max-xxs:h-sm-base max-xxs:mt-[-3px]">
            <div className="animate-wordSlide">
              {words.map((word, index) => (
                <div key={index} className="mb-1 word-slide max-lg:mb-[2px]">
                  <div className="flex leading-[1.334]">
                    <div className="py-[2px] text-6xl px-[33px] border-lg border-black rounded-[70px] max-xl:py-[1.5px] max-xl:text-[82px] max-lg:text-[53px] max-lg:px-[18px] max-lg:py-[4px] max-lg:border-md max-md:text-xs max-md:px-3 max-md:py-[3px] max-md:border-sm max-xxs:border-normal max-xxs:py-[1px]">
                      <h className="flex gap-3">{word}</h>
                    </div>
                  </div>
                </div>
              ))}
              <div className="max-lg:pt-[5px] max-md:pt-[7px] max-md:pl-[2px] max-medium:pl-0">
                <img src={together} alt="togetherImg" className="max-xl:h-lg max-lg:h-sm max-md:h-base max-md:translate-y-[-13%] max-xxs:h-[42px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-32 gsapAnima max-xl:pt-14 max-xl:pb-24 max-lg:pb-20 max-lg:pt-12 max-md:pb-16 max-md:pt-8 max-xxs:pt-6 max-xxs:pb-12">
        <ParaResuse text1="Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners." />
        <div className="home-btn-container">
          <a href="#" className="home-btns">
            Learn more about our expertise
          </a>
        </div>
      </div>
    </div>
  );
}