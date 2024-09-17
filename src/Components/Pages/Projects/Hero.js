import React from 'react'
import ParaResuse from '../../Layout/ParaResuse'

export default function Hero() {
  return (
    <div>
    <div className='px-2xl py-32 max-xl:px-lg max-xl:pt-24 max-lg:pt-20 max-md:px-8 max-md:pt-16 max-sm:pt-12 max-xs:px-6 3xl:px-3xl'>          
        <ParaResuse primaryText="Over the years, we've built over 300 digital products that improve the daily lives of millions of " spanText="people" spanClasses="font-NewsreaderItalic tracking-[-1.75px]"/>
    <div className='home-btn-container'>
        <a href="#" className='home-btns font-AlmiregoDisplayRegular'>Watch our reel</a>
    </div>
    </div>
    </div>    
  )
}
