import React from 'react'
import profilePics from './assets/profilePics.svg'
import ParaResuse from '../../ReusableCode/ParaResuse'
export default function Enterprenuership() {
    const aboutCards = [
        {number:"15",
          text:"years experience creating digital products.",
          plus:"+",          
        },
        {
          number:"300",
          text:"digital products launched since our inception.",
          plus:"+",          
        },
        {
          number:"40",
          text:"prizes and awards.",
          plus:"+",          
        },
        {
          number:"14M",
          text:"users of our products. ",
          plus:"+",          
        }
      ]
  return (
    <div className='pt-32 max-xl:pt-24 max-lg:pt-20 max-md:pt-16 max-[424px]:pt-12 text-[#F7EDDE]'>
    <div className="flex justify-between gap-[8px] font-AlmiregoDisplayLight text-[88px] leading-[105%]  max-xl:text-[80px] max-lg:text-[56px] max-md:flex-col max-[424px]:text-[32px] max-[320px]:text-[28px]">
    <h1 className='w-[66%] max-md:w-full'>✲ Entrepreneurship is in our DNA</h1>
    <div className="33% max-md:w-0"></div>
    </div>
    <ParaResuse text2="From day one, we've had a unique culture and DNA. We learn by doing. We think while we're building. We don't just buy software, we build it. We have a rigorous process for identifying the right things to build and the ideal way to build them. And with each iteration, we help create digital businesses driven by new digital products and services." showParagraph={true} paraContainer="para-container" enterprenuershipClasses="flex-row-reverse px-0"/>
    
    <div className='flex gap-2 pt-16 font-AlmiregoDisplayLight cardsTrigger overflow-hidden text-black max-xl:pt-14  max-lg:pt-12 max-lg:flex-wrap max-md:pt-8 max-md:flex-col'>
    {aboutCards.map((map,index)=>(
       <ParaResuse cardsIndex={index} showCards={true} cardsNumber={map.number} cardsPlus={map.plus} cardsText={map.text}/>
      // <div className={`p-8 w-1/4 rounded-[32px]  max-lg:rounded-[24px]  max-lg:w-[calc(50%-4px)] max-md:w-[100%] max-md:p-[28px] max-[424px]:p-[24px] ${index === 0 ? 'animaCard1 bg-[#FF4524]': index === 1 ? 'animaCard2 bg-[#F7EDDE]':index===2 ?'animaCard3 bg-[#3E8372]' : 'animaCard4 bg-[#B5A6FF]' }`} >
      //   <div className={`${index === 0 ? 'animaCard1': index === 1 ? 'animaCard2':index===2 ?'animaCard3' : 'animaCard4' }`}>
      //   <p className=' mb-4 leading-[105%] mt-[38px] max-md:mt-[21px] max-[424px]:mt-[15px] max-[320px]:mt-[8px] animaCard1'>
      //   <span className='text-[88px] tracking-[-1.75px] max-xl:text-[72px] max-md:text-[56px]
      //    max-[424px]:text-[40px] max-[320px]:text-[32px] '>{map.number}</span>
      //   <sup className='text-[48.4px] relative top-[-0.75em]  max-lg:text-[39.6px] max-md:text-[30.8px] max-[424px]:text-[22px] max-[320px]:text-[17.6px]'>{map.plus}</sup>
      //   </p>
      //   <p className="text-[21px] leading-[125%] mt-11 tracking-[0.4px] font-AlmiregoRegular max-md:text-[18px] max-md:mt-[26.6px] max-[424px]:mt-[22.2px] max-[390px]:text-[17px] max-[320px]:mt-[21.2px]"><br></br>{map.text}</p>
      //   </div>
      // </div>        
    ))}
    </div>
    <div className="py-32 font-AlmiregoDisplayLight max-xl:py-24 max-xl:text-[80px] max-lg:py-20 max-md:py-16  max-[424px]:pt-12 ">
        <h1 className='text-[88px] leading-[133.5%] max-xl:text-[80px]  max-lg:text-[56px] max-md:text-[32px] max-320:text-[28px]'>
        Our culture is what defines, differentiates, and makes us unique. We work together towards a common mission and share these eight <span className='font-NewsreaderItalic font-light'>core</span> principles.
        <img src={profilePics} alt="Profile Pictures" className='h-[130px] max-xl:h-[117.94px] max-lg:h-[80px] max-md:h-[46px] max-[320px]:h-[42px]'/>
        </h1>
        
    </div>
    </div>
  )
}
