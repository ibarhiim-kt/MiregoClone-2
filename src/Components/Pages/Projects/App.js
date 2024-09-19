import React from 'react'
import './Projects.css'
import Hero from './Hero'
import Cards from './Cards'
import ContactUs from './ContactUs'
import GoToAbout from './GoToAbout'
export default function App() {
  return (
    <div>
      <Hero/>
      <div className='px-10 max-md:px-4 max-sm:px-2'>
      <Cards/>
      <ContactUs/>
      </div>
      <GoToAbout/>
    </div>
  ) 
}
