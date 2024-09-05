import React from 'react'
  import winTeam from "./assets/winTeam.svg"
export default function ValueCard() {
  const cards = [
    {btn:"value",
     number:"01",
     text:"Win as a team",
     img:winTeam
    },
    {btn:"value",
      number:"02",
      text:"Be worthy of people's trust",
      img:winTeam
     },
     {btn:"value",
      number:"03",
      text:"Exceed expectations",
      img:winTeam
     },
     {btn:"value",
      number:"04",
      text:"Dare to innovate and surprise",
      img:winTeam
     },
     {btn:"value",
      number:"05",
      text:"Embrace change as a way of life",
      img:winTeam
     },
     {btn:"value",
      number:"06",
      text:"Be passionate and authentic",
      img:winTeam
     },
     {btn:"value",
      number:"07",
      text:"Do more with less",
      img:winTeam
     },
     {btn:"value",
      number:"08",
      text:"Don't take life too seriously",
      img:winTeam
     },
  ]
  return (
    <div className='text-cream-primary font-AlmiregoDisplayRegular grid grid-cols-4 gap-2'>
    {/* <ul>
    <li className="  overflow-hidden w-full h-full rounded-[32px] relative">
      <div className='border-[1.5px] border-[#f7edde] bg-[#050307] rounded-[32px] p-8'>
        <div>
            <p className="text-[19px] font-AlmiregoDisplayRegular py-6 px-13">value</p>
            <p>01</p>
        </div>
        <h1>Win as a team</h1>
      </div>
    </li>    
    </ul> */}
    {cards.map((map)=>(   
    <div className='p-7 max-2xl:p-6 rounded-3xl border border-cream-primary aspect-[2/3] flex flex-col justify-between'>
    <div>
    <div className='text-xs-base mb-12 flex gap-1 max-2xl:mb-9'>
      <div className='border border-cream-primary py-0.5 px-3 rounded-full'>{map.btn}</div>
      <div className='border border-cream-primary py-0.5 px-3 rounded-[9.5px]'>{map.number}</div>
    </div>
    <div className='text-sm max-2xl:text-base leading-[118%]'>{map.text}</div>
    </div>
    <img src={winTeam} alt="winTAeam" className='h-[8.1391vw] w-[8.1391vw]'/>
    </div>
    ))}
    </div>
  )
}
