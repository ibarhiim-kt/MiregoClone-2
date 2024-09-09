import React, {useEffect} from 'react'
import winTeam from "./assets/winTeam.svg"
import doMore from "./assets/doMore.svg"
import embrace from "./assets/embrace.svg"
import exceedExpectation from "./assets/exceedExpectation.svg"
import innovative from "./assets/innovative.svg"
import passionate from "./assets/passionate.svg"
import seriously from "./assets/seriously.svg"
import worthy from "./assets/worthy.svg"
import albert from "./assets/albert.jpeg"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function ValueCard() {
  const cards = [
    {btn:"Value",
     number:"01",
     text:"Win as a team",
     para:'"Help each other out and make decision based on what\'s best for the team."',
     img:winTeam,
     profileImg:albert
    },
    {btn:"Value",
      number:"02",
      text:"Be worthy of people's trust",
      para:'"A success for our partners is a success for me!"',
      img:worthy,
      profileImg:albert
     },
     {btn:"Value",
      number:"03",
      text:"Exceed expectations",
      para:'"Always try to surprise people by exceeding their expectations. Don’t tell people you’re good at something, just deliver great results."',
      img:exceedExpectation,
      profileImg:albert
     },
     {btn:"Value",
      number:"04",
      text:"Dare to innovate and surprise",
      para:'“An easter egg featuring Bob Barker and that allows Web developers to win an iPad… that’s rather surprising, don’t you think?”',
      img:innovative,
      profileImg:albert
     },
     {btn:"Value",
      number:"05",
      text:"Embrace change as a way of life",
      para:'“Changing also means taking time to get out of our comfort zone — that’s where real innovation is found.”',
      img:embrace,
      profileImg:albert
     },
     {btn:"Value",
      number:"06",
      text:"Be passionate and authentic",
      para:'“Choosing a job should always be based on your interests, your talent and the values you hold. I found all this at Mirego.”',
      img:passionate,
      profileImg:albert
     },
     {btn:"Value",
      number:"07",
      text:"Do more with less",
      para:'"You have to learn to identify and extract recurring blocks in projects and not try to reinvent the wheel everytime."',
      img:doMore,
      profileImg:albert
     },
     {btn:"Value",
      number:"08",
      text:"Don't take life too seriously",
      para:'“We ship the best solutions in our pajamas (or dressed comfortably)!”',
      img:seriously,
      profileImg:albert
     }
  ]  
  const handleMouseEnter = (cardRef) => {
    gsap.fromTo(
      cardRef,
      { x: -300 }, // Start from x: -300
      { x: 0} // End at x: 0
    );
  };
  const handleMouseLeave = (cardRef) => {
    gsap.to(cardRef,
      { x: -300,
      duration:5}, 
      
    );
  };
  
  return (
    <div className="relative grid grid-cols-4 gap-2 pb-52 pt-16 max-xl:grid-cols-2 max-xl:pt-14 max-lg:pt-12 max-md:pt-8   max-md-large:grid-cols-1">
    
    {cards.map((map, index) => (
      <div key={index} className="relative font-AlmiregoDisplayRegular rounded-3xl group overflow-hidden" onMouseEnter={() => handleMouseEnter(`.valueCardsGsap-${index}`)}>
        <div className="p-7 max-2xl:p-6 border rounded-3xl text-cream-primary aspect-[2/3] flex flex-col justify-between max-xl:p-8">
          <div>
            <div className="text-xs-base mb-12 flex gap-1 max-sm:mb-6">
              <div className="border border-cream-primary py-[3px] px-[13px] rounded-full ">
                {map.btn}
              </div>
              <div className="border border-cream-primary py-[3px] px-[13px] rounded-[9.5px]">
                {map.number}
              </div>
            </div>
            <div className="text-sm max-2xl:text-base leading-[118%] max-xl:text-md max-sm:text-sm-base">
              {map.text}
            </div>
          </div>
          <img
            src={map.img}
            alt={map.text}
            className="h-[8.1391vw] w-[8.1391vw] max-xl:h-[19.481vw] max-xl:w-[19.481vw] max-md-large:h-[40.52vw] max-md-large:w-[40.52vw] max-sm:w-[34.72vw} max-sm:h-auto max-sm:w-[34.72vw]"
          />
        </div>
        <div className={`valueCardsGsap-${index} rounded-3xl hidden group-hover:${index == index?"inline":""} absolute top-0 left-0 w-full h-full z-10  overflow-hidden pointer-events-none  ${index == 0 || index == 6 ?"bg-[#b5a6ff]":index == 1 || index == 7?"bg-[#ff4524]":index == 2 || index==4?"bg-cream-primary":index == 3 || index == 5? "bg-[#3e8372]":""}`}>
          <div className="p-7 max-2xl:p-6 aspect-[2/3] flex flex-col justify-between opacity-75 max-xl:p-8">
            <div>
              <div className="text-xs-base mb-12 flex gap-1 max-sm:mb-6">
                <div className="border border-black py-[3px] px-[13px] rounded-full ">
                  {map.btn}
                </div>
                <div className="border border-black py-[3px] px-[13px] rounded-[9.5px]">
                  {map.number}
                </div>  
              </div>
              <div className="font-AlmiregoDisplayRegular text-small max-2xl:text-base leading-[118%] max-xl:text-[21px]">
                {map.para}
              </div>
            </div>
            <div className="flex items-center gap-2">
            <img src={map.profileImg} className="h-[40px] w-[40px] rounded-full"/>
            <p>Albert Dang-Vu</p>
            </div>
          </div>
        </div>
        
      </div>
    ))}
  </div>
  )
}
