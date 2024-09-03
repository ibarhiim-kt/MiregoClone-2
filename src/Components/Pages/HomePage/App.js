import React from 'react'
// import './Home.css'
import Hero from './Hero'
import Video from './Video'
import StickyCards from './StickyCards'
import DiscoverVision from './DiscoverVision'
import BlogTable from './BlogTable'
import DistinctiveCulture from './DistinctiveCulture'
import { Helmet } from 'react-helmet-async'
export default function App() {
  return (
    <>
    <Helmet>    
      <title>End-to-end digital product team – Mirego</title>
      <meta name="description" content="This is the home page description" />      
    </Helmet>
    <div className='selection:bg-[#b5a6ff] px-10 mt-32 max-xl:mt-24 max-lg:mt-59 max-md:px-4 max-md:mt-10 max-424:mt-[34px] max-424:px-2'>
      <Hero/> 
      <Video/>       
      <StickyCards/>    
      <DiscoverVision/> 
      <BlogTable/>
      <DistinctiveCulture/>
    </div>
    </>
  )
}
