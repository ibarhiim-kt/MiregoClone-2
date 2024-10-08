import React from 'react'

export default function ItsCalling() {
  return (
    <div className='py-64 max-xl:py-40 max-lg:py-32 max-md:py-24 max-sm:py-[88px]'>    
      <h1 className='font-AlmiregoDisplayLight text-5xl leading-tight-sm max-xl:text-4xl max-lg:text-xl max-md:flex-col max-sm:text-xs max-xxs:text-base min-3xl:pt-64 min-3xl:px-3xl'>For us, building digital products is more than a job: <span className='h1-span'>It’s a calling</span>.</h1>
      <div className="pt-16 flex justify-between gap-2  max-xl:pt-14  max-lg:pt-12 max-md:pt-8 max-md:flex-col  max-xxs:pt-6">
          <div className='w-1/2 max-md:w-0'></div>
          <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
            <p className='home-para'>
            Our strategy, design and development teams are made up of inspired and inspiring people. Our passion for our art is boundless. After 15 years of experience, we still have the ability to marvel at a well-written line of code, a clever typographic choice, or a whole new way of using digital to reinvent an industry or improve a user's life.
            </p>                    
              <div className='home-btn-container overflow-hidden'>  
                <a href="#" className='home-btns'>About Mirego</a>
              </div>            
          </div>
        </div>
    
    </div>
  )
}
