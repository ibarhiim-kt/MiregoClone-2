import React from 'react'
import Hero from './Hero'
import PrimarySlider from './PrimarySlider'
import './Culture.css'
import ItsCalling from './ItsCalling'
import BestPlace from './BestPlace'
import Collapse from './Collapse'

export default function App() {
  return (
    <div>
      <div className='px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6'>
      <Hero/>
      </div>
      <PrimarySlider/>
      <div className='px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6'>
      <ItsCalling/>
      </div>
      <div className='bg-cream-primary px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6 rounded-t-4xl'>
      <BestPlace/>
      <Collapse/>
      </div>
      
    </div>
  )
}
