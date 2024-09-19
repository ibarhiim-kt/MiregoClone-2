import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Hero from './Hero'
import All from './All'
import Work from './Work'
import Development from './Development'
import AI from './Ai'
import Strategy from './Strategy'
import Design from './Design'

export default function App() {
  return (   
    <div className='px-10 bg-black-primary text-white '>
    <Hero/> 
      <div>  
    <Routes>
      <Route path='/' element={<All />}/>
      <Route path='/All' element={<All />}/>
      <Route path="/Work" element={<Work />} />
      <Route path="/Development" element={<Development />} />
      <Route path="/AI" element={<AI />} />
      <Route path="/Strategy" element={<Strategy />} />
      <Route path="/Design" element={<Design/>} />             
    </Routes>
    </div> 
    </div>               
  )
}
