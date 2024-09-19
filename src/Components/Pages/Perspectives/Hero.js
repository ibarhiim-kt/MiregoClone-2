import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero() {
  const links =[
    {
      text:"All",
      to:"/perspectives/All"
    },
    {
      text:"Work",
      to:"/perspectives/Work"
    },
    {
      text:"Development",
      to:"/perspectives/Development"
    },
    {
      text:"AI",
      to:"/perspectives/AI"
    },
    {
      text:"Strategy",
      to:"/perspectives/Strategy"
    },
    {
      text:"Design",
      to:"/perspectives/Design"
    }
  ]
  return (
    <div className='flex flex-col gap-32'>
    <div className='flex flex-col gap-8'>
      <h1 className='text-8xl font-AlmiregoDisplayLight leading-[115%]'>Perspectives</h1>
      <p className='text-xs font-AlmiregoDisplayRegular leading-[118%]'>Our vision of the future of organizations through digital products.</p>
    </div>
    <div className='text-xs-base font-AlmiregoRegular flex flex-wrap gap-2 tracking-[0.19px] leading-[190%]'>
    {links.map((el,index)=>(
    <div>
       <Link to={el.to} className={`border border-white-primary py-[6px] px-3 ${index<1?'rounded-[50vh]':'rounded-md'}`}>{el.text}</Link>
    </div>
    ))}
    </div>
    <div></div>
    </div>
  )
}
