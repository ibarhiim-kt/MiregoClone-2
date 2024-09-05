import React from 'react'
import Hero from './Hero'
import Video from './Video'
import StickyCards from './StickyCards'
import DiscoverVision from './DiscoverVision'
import BlogTable from './BlogTable'
import DistinctiveCulture from './DistinctiveCulture'


export default function App() {
  return (
    <>
    <Helmet>    
      <title>End-to-end digital product team – Mirego</title>
      <meta name="description" content="This is the home page description" />      
    </Helmet>
    <div className='selection:bg-[#b5a6ff] px-10 mt-32 max-xl:mt-24 max-lg:mt-md max-md:px-4 max-md:mt-10 max-s:mt-sm max-s:px-2'>
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
