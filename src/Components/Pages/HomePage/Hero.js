import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import together from './assets/together.svg'; 
import ParaResuse from '../../ReusableCode/ParaResuse'; 

export default function Hero() {
  const words = ['of business', 'of organization', 'of sports', 'of media', 'of entertainment', 'of travel', 'of agriculture', 'of retail', 'of food', 'of health', 'of real estate', 'of manufacturing', 'of finance', 'of insurance'];
  const [index, setIndex] = useState(0);
  const [showTogether, setShowTogether] = useState(false);

  useEffect(() => {
    if (index < words.length) {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 210); 
      return () => clearInterval(intervalId); 
    } else {
      setShowTogether(true);  // to show the SVG after all words
    }
  }, [index, words.length]);

  return (
    <div className="font-AlmiregoDisplayRegular px-xl max-xl:px-8 max-md:px-4 3xl:px-60">
      <div className="font-AlmiregoDisplayLight">
        <p className="text-5xl mr-3 align-middle inline-block leading-tight-md max-xl:text-4xl max-lg:text-xl max-md:text-xs max-md:mr-2 max-xxs:text-base">
          Building the future</p>

        <div className="pt-[2px] align-middle inline-block max-large:mt-[1.5px] max-xxs:mt-0">
          <div className="overflow-hidden h-40 max-xl:h-32 max-lg:h-28 max-md:h-24 max-xxs:h-20">
            <AnimatePresence mode="wait">
              {index < words.length && (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, translateY: 50, rotate: -0.5 }}  
                  animate={{ opacity: 1, translateY: 0, rotate: -0.5 }}   // keep subtle tilt throughout
                  exit={{ 
                    opacity: 1, 
                    translateY: -50,   
                    scaleX: 1.03,  
                    scaleY: 0.96,  
                    rotate: -0.3,  // subtle tilt on exit
                    transition: { duration: 0.05, ease: 'linear' } 
                  }}
                  transition={{ duration: 0.05, ease: 'linear' }}  
                  className="py-[2px] text-6xl px-[33px] border-lg border-black rounded-[70px] inline-block max-xl:py-[1.5px] max-xl:text-[82px] max-lg:text-[53px] max-lg:px-[18px] max-lg:py-[4px] max-lg:border-md max-md:text-xs max-md:px-3 max-md:py-[3px] max-md:border-sm max-xxs:border-normal max-xxs:py-[1px]"
                >
                  {words[index]}
                </motion.div>
              )}
            </AnimatePresence>

            {showTogether && (
              <motion.div
                key="together-svg"
                initial={{ opacity: 0, translateY: 50 }}  
                animate={{ opacity: 1, translateY: 0 }}   
                transition={{ duration: 0.05, ease: 'linear' }}  
                className="max-lg:pt-[5px] max-md:pt-[7px] max-md:pl-[2px] max-medium:pl-0">
                <img src={together} alt="Together"
                  className="max-xl:h-lg max-lg:h-sm max-md:h-base max-md:translate-y-[-13%] max-xxs:h-[42px]"/>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-16 pb-32 max-xl:pt-14 max-xl:pb-24 max-lg:pb-20 max-lg:pt-12 max-md:pb-16 max-md:pt-8 max-xxs:pt-6 max-xxs:pb-12">
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
