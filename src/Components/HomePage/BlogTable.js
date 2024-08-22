import React from 'react'
import blackArrow from '../../assets/blackArrow.svg'
import conpin from '../../assets/conpin.webp'
import keyboard from '../../assets/keyboard.webp'
import dc24 from '../../assets/dc24.webp'
export default function BlogTable() {
    const blogTable = [
        {
            date: "July 16 — 2024",
            blogText: "Blog",
            para:"Figma Config 2024: New features and advancements for product designers",
            img: conpin
        },
        {
            date:"July 3 — 2024",
            blogText: "Blog",
            para:"Swift 6 and Apple Intelligence: How Apple's new initiatives will benefit developers",
            img:keyboard
        },
        {
            date:"July 28 — 2024",
            blogText: "Blog",
            para:"WWDC 2024: Understanding new features to elevate digital products",
            img:dc24
        },
        
    ]
  return (
    <div className='pt-64 px-[40px] font-AlmiregoRegular'>
      <div className='text-[#050307] flex  items-stretch justify-between gap-[8px] mb-2'>
        <div className="py-11 px-10 text-[18px] flex flex-1 gap-[154px] bg-[#F7EDDE] rounded-3xl">
            <p className='flex  flex-col justify-between' style={{flex:1}}>DATE</p>
            <div style={{flex:2}}>NEWS</div>
        </div>
        <div className='flex items-center justify-center w-[240px] bg-[#F7EDDE] rounded-3xl  cursor-pointer'>
            <p className='mr-1 font-AlmiregoDisplayBold'>SEE ALL</p>
            <img src={blackArrow} alt="arrow" />
        </div>
      </div>
    {blogTable.map((map)=>(
      <div className='text-[#050307] flex items-stretch justify-between gap-[8px] mb-[8px] cursor-pointer'>
        <div className="py-11 px-10 text-[18px] flex flex-1 gap-[154px] bg-[#F7EDDE] rounded-3xl min-h-[240px]">
            <div className='flex flex-col justify-between flex-1'>
            <p className='flex  flex-col justify-between'>{map.date}</p>
            <ul className='flex'>
            <li className='rounded-[9.5px] py-[6px] px-3 border border-[#050307]'>{map.blogText}</li>
            </ul>
            </div>
            <div className="text-[32px]" style={{flex:2}}>
            <h2  className='leading-[1.175]'>{map.para} </h2>
            </div>
        </div>
        <div className='overflow-hidden sflex items-center justify-center w-[240px] bg-[#F7EDDE] rounded-3xl'>            
            <img src={map.img} alt="arrow" className='w-full h-full object-cover'/>
        </div>
      </div>
      ))}
    </div>
  )
}
