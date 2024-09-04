import React from 'react'

export default function Hero() {
  return (
    <div className='pt-32 max-xl:pt-24 max-lg:pt-20 max-md:pt-16 max-[424px]:pt-12'>
      <p className='px-[140px] text-[56px] font-AlmiregoDisplayRegular leading-[112%] mb-12 max-xl:text-[52px] max-xl:px-[72px] max-lg:text-[36px] max-lg:mb-8 max-md:px-8 max-[424px]:text-[28px] max-[424px]:mb-6 max-[390px]:px-6 max-[320px]:text-[24px] min-[1921px]:px-[280px]'>
      At Mirego, digital products are not an afterthought. They are the lens through which we view the world. They're the tools we've used for the past 15 years to build the future for our clients.
      </p>
      <div className='px-[140px] py-2 gap-[8px] flex justify-between max-xl:px-[72px] max-md:px-8 
      max-md:flex-col max-[390px]:px-6 min-[1921px]:px-[280px]'> 
        <div className='w-[50%] max-md:w-0'></div>        
        <p className='w-[50%] font-AlmiregoRegular tracking-[0.4px] leading-[125%] text-[21px] max-md:w-[100%] max-[424px]:text-[18px] max-[390px]:text-[17px]'>Mirego is not your typical one-stop shop. For the past 15 years, our team has focused on one simple thing: creating delightful digital products and services that power our clients' digital transformation. As a result of this focus, we've developed unique expertise and experience in what we believe is truly critical to creating successful and delightful digital products: strategy, design, and engineering.</p>        
      </div>    
    </div>
  )
}
