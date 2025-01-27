import './About.css'
import React from 'react'
import Hero from './Hero'
import VideoSec from './VideoSec'
import BuildFuture from './BuildFuture'
import Enterprenuership from './Enterprenuership'
import ValueCard from './ValueCard'
import Team from './Team'
import Pulse from './assets/Pulse'
import TeamWin from './assets/TeamWin'
import { Helmet } from 'react-helmet-async';

export default function App() {
  return (
    <>
    <Helmet>
    <title>About - Mirego</title>
    <meta name="description" content="This is the About page description" />
    </Helmet>
    <div className='selection:bg-purple-primary'>
      <Hero/> 
      <VideoSec/>      
      <BuildFuture/>
      <div className='bg-black-primary rounded-t-4xl px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6 3xl:px-3xl'>
      <Enterprenuership/>
      <ValueCard/> 
      {/* <Pulse/>
      <div>
      <TeamWin/>
      </div> */}
      </div>
      <div className='bg-black-primary'>
      <div className="bg-cream-primary rounded-t-4xl px-2xl max-xl:px-lg max-md:px-8 max-xs:px-6">
      <Team/>
      </div> 
      </div>
    </div>
    </>
  )
}

