import './About.css'
import React from 'react'
import Hero from './Hero'
import VideoSec from './VideoSec'
import BuildFuture from './BuildFuture'
import Enterprenuership from './Enterprenuership'
import ValueCards from './valueCards'
import { Helmet } from 'react-helmet-async';

export default function App() {
  return (
    <>
    <Helmet>
    <title>About - Mirego</title>
    <meta name="description" content="This is the About page description" />
    </Helmet>
    <div className='selection:bg-[#b5a6ff]'>
      <Hero/> 
      <VideoSec/>      
      <BuildFuture/>
      <div className='bg-[#050307] rounded-t-[44px]'>
      <Enterprenuership/>
      {/* <ValueCards/> */}
      </div>
    </div>
    </>
  )
}
