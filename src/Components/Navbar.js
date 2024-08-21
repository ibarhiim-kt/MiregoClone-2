import React from 'react'
import logo from '../assets/logo.svg'

// import About from './About'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center pt-[60px] pb-[53px] px-[60px] w-full'>
      <a href="/" className='pr-[18px]'>  
        <img src={logo} alt="logo" />
      </a>
      
      <div className='text-[15px] flex items-center gap-[70px] text-[#050307] justify-between '>        
        <Link to="/about" className='px-[18px] py-[12px] relative group'>About <div className='top-[70%] w-[4px] h-[4px] bg-[black] hidden group-hover:inline rounded-full absolute left-[50%]'></div></Link>
        <Link to="/Expertise" className='px-[18px] py-[12px] group relative'>Expertise <div className='top-[70%] w-[4px] h-[4px] bg-[black] hidden group-hover:inline rounded-full absolute left-[50%]'></div></Link>
        <Link to="/Projects" className='px-[18px] py-[12px] group relative'>Projects <div className='top-[70%] w-[4px] h-[4px] bg-[black] hidden group-hover:inline rounded-full absolute left-[50%]'></div></Link>
        <Link to="/Culture" className='px-[18px] py-[12px] group relative'>Culture <div className='top-[70%] w-[4px] h-[4px] bg-[black] hidden group-hover:inline rounded-full absolute left-[50%]'></div></Link>
        <Link to="Perspectives" className='px-[18px] py-[12px] group relative'>Perspectives <div className='top-[70%] w-[4px] h-[4px] bg-[black] hidden group-hover:inline rounded-full absolute left-[50%]'></div></Link>
      </div>
      
      <div className='flex items-center gap-1 text-[#050307] text-[15px] leading-none'>
        <button className='px-[18px] py-[10px] border rounded-[20px] border-[rgba(165,164,166,.33)] hover:px-[17px] hover:py-[9px] transition-all duration-500 ease-in-out'>News</button>
        <button className='px-[18px] py-[10px] border rounded-[20px] border-[rgba(165,164,166,.33)] hover:px-[17px] hover:py-[9px] transition-all duration-500 ease-in-out'>Contact</button>
      </div>
    </div>
  )
}
