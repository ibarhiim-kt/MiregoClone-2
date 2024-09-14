import React,{useEffect} from 'react'
import ParaResuse from '../../Layout/ParaResuse'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(()=>{  
    gsap.set(".aboutHeroParaAnima",{y:0, opacity:1})
    gsap.from(".aboutHeroParaAnima",{
      duration:0.8,
      opacity:0,  
      y:50,
      scrollTrigger:{
      trigger:".aboutHeroParaAnima",            
    } 
    })
  })
  return (
    <div className='px-2xl pt-32 max-xl:px-lg max-xl:pt-24 max-lg:pt-20 max-md:px-8 max-md:pt-16 max-sm:pt-12 max-xs:px-6 3xl:px-3xl'>
      <ParaResuse 
      primaryText="At Mirego, digital products are not an afterthought. They are the lens through which we view the world. They're the tools we've used for the past 15 years to build the future for our clients." marginClasses="mb-12 max-lg:mb-8 max-sm:mb-6"
      secondaryText="Mirego is not your typical one-stop shop. For the past 15 years, our team has focused on one simple thing: creating delightful digital products and services that power our clients' digital transformation. As a result of this focus, we've developed unique expertise and experience in what we believe is truly critical to creating successful and delightful digital products: strategy, design, and engineering."
      showParagraph={true}
      aboutHeroParaAnima="aboutHeroParaAnima"
      paraContainer="para-container"
      aboutHeroParaClasses="px-0 py-2"/>        
    </div>
    )
}
