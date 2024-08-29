import React from 'react'
import Hero from './Hero'
import Video from './Video'
import StickyCards from './StickyCards'
import DiscoverVision from './DiscoverVision'
import BlogTable from './BlogTable'
import DistinctiveCulture from './DistinctiveCulture'


export default function App() {
  return (
    <div className='selection:bg-[#b5a6ff]'>
      <Hero/> 
      <Video/>       
      <StickyCards/>    
      <DiscoverVision/> 
      <BlogTable/>
      <DistinctiveCulture/>
    </div>
  )
}
