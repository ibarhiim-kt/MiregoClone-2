import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const links=[
    {
      text:"About",
      to:"/about"
    },
    {
      text:"Expertise",
      to:"/Expertise"
    },
    {
      text:"Projects",
      to:"/Projects"
    },
    {
      text:"Culture",
      to:"/Culture"
    },
    {
      text:"Perspectives",
      to:"/Perspectives"
    },
  ]
  useEffect(()=>{
    gsap.set(".blackNavbarAnima",{x:0})
    gsap.to(".blackNavbarAnima",{      
      background:"rgba(0,0,0,.24)",
      color:"white",
      scrollTrigger:{
      trigger:".blackNavbarTrigger",
      start:"top 13%",
      toggleActions:"play none none reverse"      
      }
    })
  })
  return (
    <header className='pt-[140px]'>
    <div className='flex justify-between items-center pt-[60px] pb-[54px] px-[60px] w-full font-AlmiregoDisplayRegular fixed top-0 z-50 max-[1024px]:p-10 max-[768px]:p-8 max-[424px]:p-6 max-[320px]:p-5 '>
      <a href="/" className='pr-[18px] py-3'>  
        <img src={logo} alt="logo" className='max-[424px]:h-[18px] max-[320px]:h-[16px]'/>
         </a>
      
      <div className='text-[15px] flex items-center gap-[70px] text-[#050307] justify-between 
      bg-[rgba(255,255,255,.5)] rounded-xl backdrop-blur-14 leading-[1.174] max-[1439px]:gap-0 max-[1024px]:hidden min-[1729px]:text-[17px] blackNavbarAnima' style={{ backdropFilter: 'blur(14px)'}}>   
      {links.map((map)=>(  
        <Link to={`${map.to}`} className='px-[18px] py-[12px] relative group'>{map.text}<div className='top-[80%] w-[4px] h-[4px] bg-[black] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out rounded-full absolute left-[45%]'></div></Link>
      ))}         
      </div>
      
      <div className='flex items-center gap-1 text-[#050307] text-[15px] leading-none min-[1729px]:text-[17px]'>
        <button className='px-[18px] py-[10px] border rounded-[20px] border-[rgba(165,164,166,.33)] hover:px-[17px] hover:py-[9px]  bg-[rgba(255,255,255,.5)] 
        max-[1024px]:hidden blackNavbarAnima' style={{ backdropFilter: 'blur(14px)' }}>News</button>
        {/* transition-all duration-500 ease-in-out */}
        <button className='px-[18px] py-[10px] border rounded-[20px] border-[rgba(165,164,166,.33)] hover:px-[17px] hover:py-[9px]  bg-[rgba(255,255,255,.5)] max-[1024px]:hidden blackNavbarAnima' style={{ backdropFilter: 'blur(14px)' }}>Contact</button>
        <button className='px-[18px] py-[10px] border rounded-[20px] border-[#050307] hover:px-[17px] hover:py-[9px] bg-[rgba(255,255,255,.5)] hidden 
        max-[1024px]:inline max-[768px]:px-[12px] max-[320px]:text-[14px] blackNavbarAnima' style={{ backdropFilter: 'blur(14px)' }}>Menu</button>
      </div>
    </div>
    </header>
  )
}
