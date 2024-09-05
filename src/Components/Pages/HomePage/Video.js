import React, { useState, useEffect } from 'react';
import video from './assets/videos/video.mp4';
import go from './assets/go.svg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cardsAnima = ['.animaCard1', '.animaCard2', '.animaCard3', '.animaCard4'];
  const cards = [
    { number: "15", text: "years experience creating digital products.", plus: "+" },
    { number: "300", text: "digital products launched since our inception.", plus: "+" },
    { number: "40", text: "prizes and awards.", plus: "+" },
    { number: "14M", text: "users of our products.", plus: "+" }
  ];

  useEffect(() => {
    gsap.to(".gsapVideoAnima", {
      duration: 1.5,
      width: "100%",
      scrollTrigger: {
        trigger: ".gsapVideoAnima",
      }
    });
    cardsAnima.forEach((card, index) => {
      gsap.set(card, { y: 0, opacity: 1 });
      gsap.from(card, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: ".cardsTrigger",
        }
      });
    });
  }, []);

  return (
    <div className='gsapVideoTrigger'>
      {isHovering && (
        <img
          src={go}
          alt="Go svg"
          style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
          className="fixed h-[7.5vw] w-[7.5vw] transform -translate-x-1/2 -translate-y-1/2 custom-cursor pointer-events-none"
        />
      )}
      <div className='flex justify-between mb-8 uppercase tracking-tight opacity-0'>
        <span>Digital</span>
        <span>Visionaries</span>
      </div>
      <div className='flex items-center justify-center w-full'>
        <button
          className='flex justify-center items-center overflow-hidden w-1/5 rounded-3xl videoAnimation max-lg:rounded-xl gsapVideoAnima cursor-none'
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <video
            src={video} autoPlay muted playsInline loop className='min-w-[300px] w-full h-[95vh] object-cover max-md:h-[80vh]'/>
        </button>
      </div>

      <div className='flex gap-2 pt-2 font-AlmiregoDisplayLight max-lg:flex-wrap max-md:flex-col cardsTrigger overflow-hidden'>
        {cards.map((map, index) => (
          <div
            key={index}
            className={`bg-cream-primary p-8 w-1/4 rounded-3xl max-lg:rounded-xl max-lg:w-[calc(50%-4px)] max-md:w-full max-md:p-7 max-sm:p-7 animaCard${index + 1}`}>
            <div> 
              <p className='mb-4 leading-tight-sm mt-[38px] max-md:mt-[21px] max-sm:mt-[15px] max-xxs:mt-2'>
                <span className='text-5xl tracking-[-1.75px] max-xl:text-7xl max-md:text-xl max-sm:text-md max-xxs:text-xs'>{map.number}</span>
                <sup className='text-[48.4px] relative top-[-0.75em] max-lg:text-[39.6px] max-md:text-[30.8px] max-sm:text-[22px] max-xxs:text-[17.6px]'>{map.plus}</sup>
              </p>
              <p className="text-[21px] leading-relaxed-lg mt-11 tracking-normal font-AlmiregoRegular max-md:text-small  max-xs:text-x-small ">
                {map.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}