import React,{useState ,useEffect} from 'react'
// import { motion, AnimatePresence } from 'framer-motion';
import together from './assets/together.svg'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ParaResuse from '../../Layout/ParaResuse';
// import TextTransition, { presets } from 'react-text-transition';


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const words = ['of bussiness','of organization','of sports','of media','of entertainment','of travel','of agriculture','of retail','of food','of health','of real estate','of manufacturing','of finance', 'of insurance'];
    // const TEXTS = ['of bussiness','of organization','of sports','of media','of entertainment','of travel','of agriculture','of retail','of food','of health','of real estate','of manufacturing','of finance', 'of insurance'];
    // const TEX = ['Forest', 'Building', 'Tree', 'Color'];
    const [showTogether, setShowTogether] = useState(false);   
      const [index, setIndex] = React.useState(0);
    
      React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          300, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

      useEffect(() => {
        if (index < words.length) {
          const intervalId = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
          }, 210); 
          return () => clearInterval(intervalId); 
        } else {
          setShowTogether(true); // to show SVG after all words
        }
      }, [index, words.length]);
    useEffect(()=>{  
      gsap.set(".gsapAnima",{y:0 , opacity:1})
      gsap.from(".gsapAnima",{      
        duration:0.8,
        opacity:0,
        y:50,
        scrollTrigger:{
        trigger:".gsapAnima",         
        } 
      })
    },[])
  return (    
    <div className='font-AlmiregoDisplayRegular px-xl max-xl:px-8 max-md:px-4 3xl:px-60'>
      <div className='font-AlmiregoDisplayLight'>  
     
        <p className='gsapAnima text-5xl mr-3 align-middle inline-block leading-tight-md max-xl:text-4xl max-lg:text-xl max-md:text-xs max-md:mr-2 max-xxs:text-base '>
          Building the future
        </p>
        {/* <div className='pt-0.5 align-middle inline-block max-large:mt-[1.5px] max-xxs:mt-0'>           
      <div className='   overflow-hidden h-2xl max-xl:h-xl max-lg:h-md max-md:h-xs max-xxs:h-sm-base max-xxs:mt-[-3px]'>
        <TextTransition  springConfig={presets.direct}
       >
        <div className={`mb-1  max-lg:mb-0.5`}>
      <div className='flex leading-[1.334]'>
        <div className='py-0.5 text-6xl px-[33px] border-lg border-black rounded-[70px] max-xl:py-[1.5px] max-xl:text-[82px] max-lg:text-[53px] max-lg:px-[18px] max-lg:py-1 max-lg:border-md max-md:text-xs max-md:px-3 max-md:py-[3px] max-md:border-sm max-xxs:border-normal max-xxs:py-px'>
        <h className='flex gap-3'>{TEXTS[index % TEXTS.length]}</h>
        </div>                                                                                                                          
      </div>
      </div>       
      </TextTransition>    
      </div>
      </div> */}
      
            
       <div className='pt-0.5 align-middle inline-block max-large:mt-[1.5px] max-xxs:mt-0'>           
      <div className='overflow-hidden h-2xl max-xl:h-xl max-lg:h-md max-md:h-xs max-xxs:h-sm-base max-xxs:mt-[-3px] transform'>
     
          <div className='animate-wordSlide'>
        {words.map((word,index)=>(
        <div className={`mb-1 word-slide max-lg:mb-0.5 transform`}>
        <div className='flex leading-[1.334]'>
          <div className='py-0.5 text-6xl px-[33px] border-lg border-black rounded-[70px] max-xl:py-[1.5px] max-xl:text-[82px] max-lg:text-[53px] max-lg:px-[18px] max-lg:py-1 max-lg:border-md max-md:text-xs max-md:px-3 max-md:py-[3px] max-md:border-sm max-xxs:border-normal max-xxs:py-px'>
          <h className='flex gap-3'>{word} </h>
          </div>                                                                                                                          
        </div>
        </div>      
        ))}
        <div className='max-lg:pt-[5px] max-md:pt-[7px] max-md:pl-0.5 max-medium:pl-0'> <img src={together} alt="togetherImg" className='max-xl:h-lg max-lg:h-sm max-md:h-base max-md:translate-y-[-13%] max-xxs:h-[42px]'/> </div>
        </div>
        </div>
        </div>         
        </div>
        <div className='pt-16 pb-32 gsapAnima max-xl:pt-14 max-xl:pb-24 max-lg:pb-20 max-lg:pt-12 max-md:pb-16 max-md:pt-8 max-xxs:pt-6 max-xxs:pb-12'>      
        <ParaResuse primaryText="Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners." buttonText='Learn more about expertise' showButton={true}/>
        {/* <div className='home-btn-container'>
        <a href="#" className='home-btns'>Learn more about our expertise</a>
        </div>   */}
        </div>       
      </div>
    )
}
