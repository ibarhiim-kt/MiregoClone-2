import React from 'react'
import digitalTrends from '../../assets/digitalTrends.webp'
import arrow from '../../assets/arrow.svg'
import githubCopilot from '../../assets/githubCopilot.webp'
import basicNeeds from '../../assets/basicNeeds.webp'
import symbol from '../../assets/symbol.svg'
import yoshua from '../../assets/yoshua.jpeg'
export default function DiscoverVision() {  

  const cards = [
    {
      btn1:'Sport',
      btn2:'Report',
      read:'Read',
      arrow: arrow,
      image:digitalTrends,
      para:'Digital trends for augmented reality in professional sports'
    },
    {
      btn1:'Development',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Using GitHub Copilot and generative AI to accelerate software development'
    },
    {
      image:yoshua,
      name:'Yoshua Bengio',
      para:'Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.'
    },
    {
      btn1:'Work',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'The future of work: three basic needs shaping the next evolution of work'
    }
  ]
  return (
    <div className='pt-64 max-[1440px]:pt-52 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 
       max-[424px]:pt-[88px] max-[320px]:pt-[72px]'>
      <h1 className='text-[120px] font-AlmiregoDisplayLight leading-[105%] px-10 max-[1440px]:text-[96px] max-lg:text-[68px] max-md:px-4 max-[424px]:px-2 max-[424px]:text-[40px] max-[320px]:text-[32px]'>Building for the future</h1>
      <div className='pt-16 px-[140px] gap-[8px] flex justify-between max-xl:pt-14 max-xl:px-[72px] max-lg:pt-12 max-md:px-8 max-md:pt-8  max-md:flex-col max-[390px]:px-6 max-[320px]:pt-6'> 
        <div className='w-[50%] max-md:w-[0px]'></div>
        <div className='w-[50%] font-AlmiregoRegular max-md:w-[100%]'>
        <p className='tracking-[0.4px] leading-[125%] text-[21px] max-[424px]:text-[18px] 
        max-[390px]:text-[17px]'>Over the past decade and a half, mobile and cloud computing have transformed countless industries. But emerging technologies will drive even greater change in the years to come. Want to take a peek at what tomorrow holds? From a diversity of angles, our experts share insights on the digital future.</p>
        <div className='mt-12 flex max-[424px]:mt-8'>
      <a href="#" className='text-[16px] px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1]'>Discover our vision of the future</a>
      </div>  
        </div>
      </div>
      
      <div className='px-10 pt-32 grid grid-cols-4 gap-[32px] max-[1440px]:grid-cols-3 max-lg:grid-cols-2 
       max-md:grid-cols-1 max-md:pt-16 max-md:px-4'>
      {cards.map((map,index)=>(
        <>
        <a className='group' key={index}>
          <div className={`relative overflow-hidden  border-[1.5px] ${index===2?'rounded-[34px]':'rounded-[44px]'}
          ${index===3?'max-[1440px]:mt-[-52.8px] max-[1376px]:mt-[-84.8px] max-[1311px]:mt-[-116.8px] max-[1188px]:mt-[-148.8px] max-[1143px]:mt-[-118.8px] max-[1112px]:mt-[-150.8px] max-[1076px]:mt-[-182.8px] max-lg:mt-0':''} ${index===2?'max-[986px]:mt-[-30px] max-[778px]:mt-0':''}
          ${index=== 0 ? 'border-[#272425]':'border-[#e0dfe0]'} text-white cursor-pointer font-AlmiregoRegular `}>
           {index<2 || index == 3 ?(
            <>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>
             
            <img src={map.image} alt="digitalTrends" className='h-full w-full max-w-[100%] object-cover'/>
            </div>
            <div className='py-8 px-6 relative text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='text-base flex  items-center max-w-[80%] gap-1 text-[14px]'>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>{map.btn1}</li>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>{map.btn2}</li>
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-[15px] mr-1 group-hover:mr-2 duration-300">{map.read}</p> 
                    <img src={map.arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-2xl leading-[125%]">{map.para}</p>
              </div>
              
            </div>
            </>
           ):(            
            <div className='py-8 px-6 text-transparent top-0 left-0 w-full h-full flex flex-col bg-[#242424]'>
              <div className='relative my-[88px] bg-clip-text max-[1440px]:my-16 max-lg:my-[88px]' style={{ background: 'linear-gradient(251deg, #b5a6ff 2.43%, #f7edde 98.82%)', WebkitBackgroundClip: 'text',textIndent:'60px'}}>
                <img src={symbol} alt="symbol" className='absolute top-[12px] left-0 w-[52px]'/>
                <p className="text-[40px] leading-[100%] max-[1440px]:text-[32px] max-lg:text-[40px]">{map.para}</p>
              </div>
              <div className='items-center inline-flex text-white gap-[15px]'>
                <img src={map.image} alt="Yoshua Bengio" className='w-[44px] h-[44px] rounded-[50%] overflow-hidden object-cover'/>
                <p className='text-[15px]'>{map.name}</p>
              </div>
          </div>
           )
           }          
          </div>
        </a>          
      </>
         ))}
        </div>          
    </div>
      )
}
