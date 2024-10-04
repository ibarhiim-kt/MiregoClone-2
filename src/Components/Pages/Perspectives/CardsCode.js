import React, { useState,useEffect,useRef } from 'react'
// import symbol from '../HomePage/assets/symbol.svg'
import pauseIconBlack from './assets/pauseIconBlack.svg'
import arrow from '../HomePage/assets/arrow.svg'
import blackArrow from '../HomePage/assets/blackArrow.svg'
import Masonry from 'react-masonry-css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function CardsCode({filteredCards}) {
    
    const getGradientStyle = (index) => {
        if (index === 4 || index === 17) {
          return {
            background: 'linear-gradient(251deg, #b5a6ff 2.43%, #f7edde 98.82%)',
            WebkitBackgroundClip: 'text',
            textIndent: '60px',
          };
        } else if (index === 23) {
          return {
            background: 'linear-gradient(251deg, #113b31 2.43%, #83c3b0 98.82%)',
            WebkitBackgroundClip: 'text',
            textIndent: '60px',
          };
        } else {
          return {}; // Default or no style for other indexes
        }
      };

      //Masonry Layout
      const breakpointColumnsObj = {
        default: 4, // 3 columns on large screens
         1440: 3,   
         1024: 2, 
         768:1
      };
      
      const [hovered,setHovered] = useState(false);
      const [podcastHovered,setPodcastHovered] = useState(false);
      const [videoIcon,setVideoIcon] = useState(false);
      const cardsRef = useRef([]);

//Gsap Cards anima
      useEffect(() => {
        cardsRef.current.forEach((card) => {
          gsap.set(card, { opacity: 1, y: 0 });
          gsap.from(card, {
            duration: 0.8,
            opacity: 0,
            y: 50,           
            scrollTrigger: {
              trigger: card,              
            },
          });
        });
      }, [filteredCards]);
      
  return (
    <div>
      
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >      
      {filteredCards.map((map,index)=>(                
        <a className={`group`} key={index} onMouseEnter={() => (map.id === 6 || map.id === 8) && setVideoIcon(true)}
        onMouseLeave={() => (map.id === 6 || map.id === 8) && setVideoIcon(false)}>
          <div className={`relative overflow-hidden mb-8 ${map.id===4?'rounded-[34px]':map.id===13||map.id===20?'rounded-full aspect-[1/1]':'rounded-[44px]'} ${map.id===16?'aspect-[1/1]':''} 
          text-white cursor-pointer font-AlmiregoRegular border-black-primary border-[1.5px]`} ref={(el) => (cardsRef.current[index] = el)}>
          
          {(videoIcon && (map.id===6||map.id===8))?(
          <div className={`h-full w-full items-center flex justify-center absolute`}><img src={map.pauseIcon} alt="" height={88} width={88} className='z-20'/></div>
        ):''}
           {map.id===13||map.id===20?(
           <div className='bg-custom-gradient aspect-[1/1] py-8 px-6 flex flex-col justify-between text-black-primary' onMouseEnter={() => setPodcastHovered(true)} onMouseLeave={() => setPodcastHovered(false)}>
            <div className='flex justify-center gap-1 flex-wrap'>
             {map.showbtn1 && <div className='py-[4px] px-3 rounded-[50vh] border border-black  hover:bg-black-primary hover:text-white transition-all duration-300'>{map.btn1}</div>}
             {map.showbtn2 && <div className='py-[4px] px-3 rounded-[50vh] border border-black  hover:bg-black-primary hover:text-white transition-all duration-300'>{map.btn2}</div>}
             </div>
            <div>
            <div>
            {podcastHovered? (
              <div className='flex items-center justify-center'>
              <img src={pauseIconBlack} alt="" height={88} width={88}/>
              </div>
            ):(
            <div className='flex items-center justify-center'>
                <div className='border-[1.5px] border-black-primary rounded-full w-[88px] h-[88px] object-cover overflow-hidden podcastPrimaryImg'>
                <img src={map.primaryImage} alt="" />
                </div>
                <div className='border-[1.5px] border-black-primary rounded-full w-[88px] h-[88px] object-cover overflow-hidden -ml-6 podcastSecondaryImg'>
                <img src={map.secondaryImage} alt="" />
                </div>
                {map.showTertiaryImage &&
                <div className='border-[1.5px] border-black-primary rounded-full w-[88px] h-[88px] object-cover overflow-hidden -ml-6 podcastTertiaryImg'>
                <img src={map.tertiaryImage} alt="" />
                </div>
                }
            </div>
            )}
            </div>
            <p className='mt-[10%] leading-[124%] text-[1.6vw] text-center'>{map.primaryPara} </p>
            </div>
            <div className='flex justify-center items-center'>
                <p className='group-hover:mr-2 duration-300'>Listen</p> 
                <img src={blackArrow} alt="" className='ml-1'/>
            </div>
           </div>
            
            ):map.id === 4 || map.id ===17 || map.id=== 23?(
              <div className={`py-8 px-6 text-transparent top-0 left-0 w-full h-full flex flex-col ${map.id===23?"bg-white":"bg-black-secondary"}`}>
              <div className='flex justify-between items-center'>
                <ul className='flex  items-center max-w-[80%] gap-1 text-[14px] flex-wrap' onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}>
            {map.showbtn1 && <img src={hovered ? map.invertedCommasBlack : map.btn1} className='py-[6px] px-3 rounded-[50vh] border border-white text-white hover:bg-white transition-all duration-300' ></img>}
            {map.showbtn2 && <img src={hovered ? map.btn2 : map.invertedCommasBlack} className='py-[6px] px-3 rounded-[50vh] border border-black-primary hover:bg-black-primary transition-all duration-300' ></img>}            
                </ul>
                <ul>
                  <a href="#" className={`flex items-center ${map.id===4?'hidden':''}`}>
                    <p className="text-xxs-base mr-1 group-hover:mr-2 duration-300 text-white">{map.read}</p> 
                    <img src={arrow} alt="arrow"/></a>
                </ul>
              </div>  
              <div className={`relative bg-clip-text my-xl max-2xl:my-16 max-lg:my-xl`}  style={getGradientStyle(index)}>
                <img src={map.symbol} alt="symbol" className='absolute top-[12px] left-0 w-[52px]'/>
                <p className="text-md leading-normal max-2xl:text-xs max-lg:text-md">{map.primaryPara}</p>
              </div>
              <div className={`items-center inline-flex ${map.id===23?"text-black":"text-white"} gap-md`}>
                <img src={map.image} alt="Yoshua Bengio" className='w-[44px] h-[44px] rounded-full overflow-hidden object-cover'/>
                <p className='text-[15px]'>{map.name}</p>
              </div>
              </div>  
            
           ):map.id===16?(
            <div className='bg-orange-primary aspect-[1/1] flex flex-col items-center justify-center text-black-primary'>
              <div className='flex flex-col items-center'>
                <div className='rounded-[50vh] border-black py-[25px] px-10 border min-w-2xl flex items-center justify-center text-[44px] bg-video leading-[116%]'>
                    AI
                </div>
                <p className='text-lm absolute leading-relaxed-lg bottom-8 '>{map.primaryPara}</p>
                </div>
            </div>
           ):(            
            <>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>             
            <img src={map.image} alt="digitalTrends" className='h-full w-full max-w-full object-cover'/>
            </div>
            <div className='py-8 px-6 relative text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='flex  items-center max-w-[80%] gap-1 text-[14px] flex-wrap '>
            {map.showbtn1 && <li className='py-[4px] px-3 rounded-[50vh] border border-white hover:bg-white hover:text-black-primary transition-all duration-300'>{map.btn1}</li>}
            {map.showbtn2 &&  <li className='py-[4px] px-3 rounded-[50vh] border border-white  hover:bg-white hover:text-black-primary transition-all duration-300'>{map.btn2}</li>}
            {map.showbtn3 &&  <li className='py-[4px] px-3 rounded-[50vh] border border-white  hover:bg-white hover:text-black-primary transition-all duration-300'>{map.btn3}</li>}
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-xxs-base mr-1 group-hover:mr-2 duration-300">{map.read}</p> 
                    <img src={arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-sm-base leading-relaxed-lg">{map.primaryPara}</p>
             {map.showSecondaryPara && <p className='leading-relaxed-lg mt-4 text-xxs-base'>{map.secondaryPara}</p>}
              </div>               
            </div>
            </>   
           )
           }          
          </div>
        </a>          
      
         ))}
        </Masonry>      
       </div> 
  )
}
