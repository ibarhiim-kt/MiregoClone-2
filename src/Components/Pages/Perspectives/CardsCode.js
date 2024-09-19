import React from 'react'
import symbol from '../HomePage/assets/symbol.svg'

export default function CardsCode({cards}) {
   
  return (
    <div className=' grid grid-cols-4 gap-[32px] max-[1440px]:grid-cols-3 max-lg:grid-cols-2 
       max-md:grid-cols-1 cardsGsap'>
      {cards.map((map,index)=>(
        <>
        <a className='group' key={index} >
          <div className={`relative overflow-hidden  border-[1.5px] ${index===2?'rounded-[34px]':'rounded-[44px]'} ${index===3?'max-[1440px]:mt-[-52.8px] max-[1376px]:mt-[-84.8px] max-[1311px]:mt-[-116.8px] max-[1188px]:mt-[-148.8px] max-[1143px]:mt-[-118.8px] max-[1112px]:mt-[-150.8px] max-[1076px]:mt-[-182.8px] max-lg:mt-0':''} ${index===2?'max-[986px]:mt-[-30px] max-[778px]:mt-0 cursor-text selection:text-[white]':''}
          ${index=== 0 ? 'border-[#272425]':'border-[#e0dfe0]'} text-white cursor-pointer font-AlmiregoRegular `}>
           {index != 4 ?(   
            <>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>
             
            <img src={map.image} alt="digitalTrends" className='h-full w-full max-w-[100%] object-cover'/>
            </div>
            <div className='py-8 px-6 relative text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='flex  items-center max-w-[80%] gap-1 text-[14px]'>
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
                <p className="text-sm-base leading-relaxed-lg">{map.para}</p>
              </div>               
            </div>
            </>
           ):(            
            <div className='py-8 px-6 text-transparent top-0 left-0 w-full h-full flex flex-col bg-black-secondary'>
              <div className='relative my-2xl bg-clip-text max-2xl:my-16' style={{ background:'linear-gradient(251deg, #b5a6ff 2.43%, #f7edde 98.82%)', WebkitBackgroundClip: 'text',textIndent:'60px'}}>
                <img src={symbol} alt="symbol" className='absolute top-[12px] left-0 w-[52px]'/>
                <p className="text-md leading-normal max-2xl:text-xs max-lg:text-md">{map.para}</p>
              </div>
              <div className='items-center inline-flex text-white gap-md'>
                <img src={map.image} alt="Yoshua Bengio" className='w-[44px] h-[44px] rounded-full overflow-hidden object-cover'/>
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
  )
}
