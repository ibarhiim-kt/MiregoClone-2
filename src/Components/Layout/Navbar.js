import React, { useEffect,useState } from 'react'
// import {ReactComponent as Logo} from './assets/logo.svg'
import Logo from '../SvgsComponents/Logo'
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
    gsap.to(".logo-white",{      
      fill:'white',     
      scrollTrigger:{
      trigger:".blackNavbarTrigger",
      start:"top 13%",
      toggleActions:"play none none reverse" ,
       
      }
    })
  })
  const [isClicked, setIsClicked] = useState(null);
  const handleClick = (index) => {    
    setIsClicked(index);
  }; 
  
  
  return (
    <header className='pt-2xl'>
      {/* pb-[54px] */}
    <div className='flex justify-between items-center pt-[60px] px-[60px] w-full font-AlmiregoDisplayRegular fixed top-0 z-50  max-lg:p-10  max-md:p-8 max-sm:p-6 max-xxs:p-5'>
   
      <a href="/" className='pr-[18px] py-3'>         
         <Logo className="max-sm:h-[18px] max-xxs:h-[16px] logo-white"/>
      </a>
        
      <div className='text-[15px] flex items-center gap-[70px] text-black-primary justify-between 
      bg-[rgba(255,255,255,.5)] rounded-lg backdrop-blur-14 leading-tight-xs max-[1439px]:gap-0  max-lg:hidden min-[1729px]:text-[17px] blackNavbarAnima' style={{ backdropFilter: 'blur(14px)'}}>   
      {links.map((map,index)=>(  
        <Link to={`${map.to}`} className='px-[18px] py-3 relative group' onClick={()=>handleClick(index)}>{map.text}<div className={`top-[80%] w-1 h-1 bg-black-primary opacity group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-full absolute left-[45%] ${isClicked===index?'opacity-100':'opacity-0'}`}></div></Link>
      ))}         
      </div>

      <div className='flex items-center gap-1 text-black-primary text-[15px] leading-none min-[1729px]:text-[17px]'>
      <button className='px-[18px] py-[10px] border rounded-[20px] border-[rgba(165,164,166,.33)]  bg-[rgba(255,255,255,.5)]  max-lg:hidden blackNavbarAnima' style={{ backdropFilter: 'blur(14px)', transition: 'transform 0.3s ease'}}>News</button>
  
      <button className='px-[18px] py-[10px] border rounded-[20px] border-[rgba(165,164,166,.33)]  bg-[rgba(255,255,255,.5)]  max-lg:hidden blackNavbarAnima' style={{ backdropFilter: 'blur(14px)', transition: 'transform 0.3s ease' }}>Contact</button>
  
      <button className='px-[18px] py-[10px] border rounded-[20px] border-black-primary  bg-[rgba(255,255,255,.5)] hidden  max-lg:inline  max-md:px-3 max-xxs:text-[14px] blackNavbarAnima' style={{ backdropFilter: 'blur(14px)', transition: 'transform 0.3s ease' }}>Menu</button>
</div>
</div>
</header>
  )
}
