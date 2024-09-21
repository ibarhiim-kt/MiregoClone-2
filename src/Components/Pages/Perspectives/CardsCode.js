import React from 'react'
import symbol from '../HomePage/assets/symbol.svg'
import arrow from '../HomePage/assets/arrow.svg'
import blackArrow from '../HomePage/assets/blackArrow.svg'
// import movingImgs from './assets/movingImgs.svg'

import { div } from 'framer-motion/client'
// import { div } from 'framer-motion/client'
export default function CardsCode({cards}) {
    
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
  return (
    <div className=' grid grid-cols-4 gap-8 max-2xl:grid-cols-3 max-lg:grid-cols-2
       max-md:grid-cols-1 cardsGsap'>
      {cards.map((map,index)=>(
        <>
        {/* ${index===3?'max-[1440px]:mt-[-52.8px] max-[1376px]:mt-[-84.8px] max-[1311px]:mt-[-116.8px] max-[1188px]:mt-[-148.8px] max-[1143px]:mt-[-118.8px] max-[1112px]:mt-[-150.8px] max-[1076px]:mt-[-182.8px] max-lg:mt-0':''} ${index===2?'max-[986px]:mt-[-30px] max-[778px]:mt-0 cursor-text selection:text-[white]':''} */}
        <a className='group' key={index}>
          <div className={`relative overflow-hidden ${index===4?'rounded-[34px] mt-[-30px]':index===13||index===20?'rounded-full aspect-[1/1]':'rounded-[44px]'} ${index===16?'aspect-[1/1]':''} 
          text-white cursor-pointer font-AlmiregoRegular ${index===3 || index ===12 || index===25||index===26?'border-[#272425] border-[1.5px]':'border-none'}`}>
          
           {index===13||index===20?(
           <div className='bg-[#b5a6ff] aspect-[1/1] py-8 px-6 flex flex-col justify-between text-black-primary'>
            <div className='flex justify-center gap-1 flex-wrap'>
             {map.showbtn1 && <div className='py-[3px] px-3 rounded-[50vh] border border-black'>{map.btn1}</div>}
             {map.showbtn2 && <div className='py-[3px] px-3 rounded-[50vh] border border-black'>{map.btn2}</div>}
             </div>
            <div>
            <div className='flex items-center justify-center'>
                <div className='border-[1.5px] border-black-primary rounded-full w-[88px] h-[88px] object-cover overflow-hidden'>
                <img src={map.primaryImage} alt="" />
                </div>
                <div className='border-[1.5px] border-black-primary rounded-full w-[88px] h-[88px] object-cover overflow-hidden -ml-6'>
                <img src={map.secondaryImage} alt="" />
                </div>
                {map.showTertiaryImage &&
                <div className='border-[1.5px] border-black-primary rounded-full w-[88px] h-[88px] object-cover overflow-hidden -ml-6'>
                <img src={map.tertiaryImage} alt="" />
                </div>
                }
            </div>
            <p className='mt-[10%] leading-[124%] text-[1.6vw] text-center'>{map.primaryPara} </p>
            </div>
            <div className='flex justify-center items-center'>
                <p>Listen</p> 
                <img src={blackArrow} alt="" className='ml-1'/>
            </div>
           </div>
            
            ):index === 4 || index ===17 || index=== 23?(
                <div className={`py-8 px-6 text-transparent top-0 left-0 w-full h-full flex flex-col ${index===23?"bg-white":"bg-black-secondary"}`}>
              <div className={`relative  bg-clip-text max-2xl:my-16 my-[88px]`}  style={getGradientStyle(index)}>
                <img src={symbol} alt="symbol" className='absolute top-[12px] left-0 w-[52px]'/>
                <p className="text-md leading-normal max-2xl:text-xs max-lg:text-md">{map.primaryPara}</p>
              </div>
              <div className={`items-center inline-flex ${index===23?"text-black":"text-white"} gap-md`}>
                <img src={map.image} alt="Yoshua Bengio" className='w-[44px] h-[44px] rounded-full overflow-hidden object-cover'/>
                <p className='text-[15px]'>{map.name}</p>
              </div>
          </div>  
            
           ):index===16?(
            <div className='bg-orange-primary aspect-[1/1] flex items-center justify-center text-black-primary'>
                <div className='rounded-[50vh] border-black py-[25px] px-10 border min-w-2xl flex items-center justify-center text-[44px] bg-video '>
                    AI
                </div>
            </div>
           ):(            
            <>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>             
            <img src={map.image} alt="digitalTrends" className='h-full w-full max-w-[100%] object-cover'/>
            </div>
            <div className='py-8 px-6 relative text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='flex  items-center max-w-[80%] gap-1 text-[14px] flex-wrap'>
            {map.showbtn1 && <li className='py-[3px] px-3 rounded-[50vh] border border-white'>{map.btn1}</li>}
            {map.showbtn2 &&  <li className='py-[3px] px-3 rounded-[50vh] border border-white'>{map.btn2}</li>}
            {map.showbtn3 &&   <li className='py-[3px] px-3 rounded-[50vh] border border-white'>{map.btn3}</li>}
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-[15px] mr-1 group-hover:mr-2 duration-300">{map.read}</p> 
                    <img src={arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-sm-base leading-relaxed-lg">{map.primaryPara}</p>
             {map.showSecondaryPara &&   <p className='leading-relaxed-lg mt-4 text-xxs-base'>{map.secondaryPara}</p>}
              </div>               
            </div>
            </>   
           )
           }          
          </div>
        </a>          
      </>
         ))}
        </div>       
  )
}
