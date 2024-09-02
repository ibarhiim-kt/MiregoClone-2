import React from 'react'
import Hero from './Hero'
import Video from './Video'
import StickyCards from './StickyCards'
import DiscoverVision from './DiscoverVision'
import BlogTable from './BlogTable'
import DistinctiveCulture from './DistinctiveCulture'


export default function App() {
  return (
    <div className='selection:bg-[#b5a6ff] px-10 mt-32 max-xl:mt-24 max-lg:mt-59 max-md:px-4 max-md:mt-10 max-424:mt-[34px] max-424:px-2'>
      <Hero/> 
      <Video/>       
      <StickyCards/>    
      <DiscoverVision/> 
      <BlogTable/>
      <DistinctiveCulture/>
    </div>
  )
}
