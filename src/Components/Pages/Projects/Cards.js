import React from 'react'
import arrow from '../HomePage/assets/arrow.svg'
import card1 from './assets/card1.webp'
import card2 from './assets/card2.webp'
import card3 from './assets/card3.webp'
import card4 from './assets/card4.webp'
import card5 from './assets/card5.webp'
import card6 from './assets/card6.webp'
import card7 from './assets/card7.webp'
import card8 from './assets/card8.webp'
import card9 from './assets/card9.webp'
import card10 from './assets/card10.webp'
import card11 from './assets/card11.webp'
import card12 from './assets/card12.webp'
import card13 from './assets/card13.webp'
import card14 from './assets/card14.webp'
import card15 from './assets/card15.webp'
import card16 from './assets/card16.webp'
import card17 from './assets/card17.webp'
import card18 from './assets/card18.webp'
import card19 from './assets/card19.webp'
import card20 from './assets/card20.webp'
import card21 from './assets/card21.webp'
import card22 from './assets/card22.webp'
import card23 from './assets/card23.webp'
import card24 from './assets/card24.webp'

import go from './assets/go.svg'
export default function Cards() {
    const projectCards = [
        {
            img:card1,
            text:"Familiprix",
            arrow:arrow,
            btn1:"Mobile Application",
            btn2:"Web",
            btn3:"Tablet Application",
            btn4:"Health",
            goImg:go
        },
        {
            img:card2,
            text:"Air Transat",
            arrow:arrow,
            btn1:"Mobile Application",            
            btn2:"Tablet Application",
            btn3:"Health",
            goImg:go
        },
        {
            img:card3,
            text:"DAVIDsTEA",
            arrow:arrow,
            btn1:"Mobile Application",            
            btn2:"Retail",
            goImg:go
        },
        {
            img:card4,
            text:"Cineplex",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Media",
            goImg:go
        },
        {
            img:card5,
            text:"Winnipeg Jets",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Sports",
            goImg:go
        },
        {
            img:card6,
            text:"DuProprio",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Tablet Application",
            btn3:"Home",
            goImg:go
        },
        {
            img:card7,
            text:"Gold Canada",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Smart Watch",
            btn3:"Sports",
            goImg:go
        },
        {
            img:card8,
            text:"BRP GO!",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Travel",
            goImg:go
        },
        {
            img:card9,
            text:"Cominar",
            arrow:arrow,
            btn1:"Web",           
            btn2:"Industrial",
            goImg:go
        },
        {
            img:card10,
            text:"Airthings",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Web",
            btn3:"Home",
            goImg:go
        },
        {
            img:card11,
            text:"Le Massif de Charlevoix",
            arrow:arrow,
            btn1:"Displays",           
            btn2:"Sports",
            goImg:go
        },
        {
            img:card12,
            text:"The Montréal Canadiens",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Sports",
            goImg:go
        },
        {
            img:card13,
            text:"Bell",
            arrow:arrow,
            btn1:"Multiplatform",           
            btn2:"Media",
            goImg:go
        },
        {
            img:card14,
            text:"IGA",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Tablet Application",
            btn3:"Food",
            goImg:go
        },
        {
            img:card15,
            text:"SAQ",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Displays",
            btn3:"Tablet Application",
            btn4:"Food",
            goImg:go
        },
        {
            img:card16,
            text:"Schluter",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Home",
            goImg:go
        },
        {
            img:card17,
            text:"TV5 Québec Canada",
            arrow:arrow,
            btn1:"Multiplatform",           
            btn2:"Media",
            goImg:go
        },
        {
            img:card18,
            text:"Canadian Football League",
            arrow:arrow,
            btn1:"Multiplatform",           
            btn2:"Media",
            goImg:go
        },
        {
            img:card19,
            text:"Groupe Capitales Médias",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Web",
            btn3:"Tablet Application",
            btn4:"Media",
            goImg:go
        },
        {
            img:card20,
            text:"Glo Bakery",
            arrow:arrow,
            btn1:"Mobile Application",    
            btn2:"Tablet Application",
            btn3:"Food",
            goImg:go
        },
        {
            img:card21,
            text:"Archibald",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Food",
            goImg:go
        },
        {
            img:card22,
            text:"Premier Tech",
            arrow:arrow,
            btn1:"Web",           
            btn2:"Industrial",            
            goImg:go
        },
        {
            img:card23,
            text:"Sinai Health System",
            arrow:arrow,
            btn1:"Mobile Application",           
            btn2:"Health",           
            goImg:go
        },
        {
            img:card24,
            text:"Bombardier",
            arrow:arrow,            
            btn1:"Tablet Application",
            btn2:"Traverl",
            goImg:go
        },
        
        
    ]
  return (


    
<div className='grid grid-cols-2 gap-1 pb-2'>
{projectCards.map((map,index)=>(
      <div className={`max-xl:pt-14 ${index === 0?"col-span-2":""} cursor-pointer relative group max-lg:pt-12 max-md:pt-8 max-xxs:pt-6 flex flex-col`}>
      <div className={`relative cursor-pointer ${index===0?'aspect-[2/1]':'aspect-[1/1]'}   group-hover:${index===0?"rounded-[50%/100%]":"rounded-[50%]"} overflow-hidden p-8 pb-0 rounded-3xl border-2 border-white max-xl:rounded-xl max-md:rounded-3xl max-md:aspect-[1/1] max-md:pt-7 max-md:px-7 max-sm:p-6 max-sm:pb-0`}>
    
        <img src={map.img} alt="" className="absolute top-0 left-0 w-full h-ful rounded-[42px]"/>
        <div className="stickyCardsOverlay"></div>                
        <div className="flex items-center justify-between absolute left-0 top-0 w-full p-8 max-md:p-7 max-sm:p-6 leading-relaxed-xl">        
        <div className="font-AlmiregoDisplayRegular text-base text-white-primary flex items-center gap-2 
          max-lg:text-sm-base max-sm:text-[20px] max-xxs:text-small">
          {map.text}
        <img src={map.arrow} alt="" className=" h-7 w-7 hidden group-hover:inline"/>
        </div>

        <ul className="items-center font-AlmiregoDisplayRegular text-small gap-1 flex flex-row flex-wrap justify-end max-xs:text-x-small">
          <li className="sticky-cards-li">{map.btn1}</li>
          <li className='sticky-cards-li'>{map.btn2}</li>
          <li className={`sticky-cards-li max-md:hidden ${(index>1&&index<5)||(index>6&&index<9)||(index>9&&index<13)||(index>14&&index<18)||(index>18) ?"hidden":"inline"}`}>{map.btn3}</li>
          <li className={`sticky-cards-li ${(index>0 && index<14)||(index>14&&index<18)||(index>18) ?"hidden":"inline"}`}>{map.btn4}</li>
        </ul>         
    </div>       
    </div>
    <div className='projectsGo z-20 absolute items-center justify-center top-0 left-0 bottom-0 right-0 hidden group-hover:flex'>
        <div className='bg-white h-3xl w-2xl flex items-center justify-center rounded-[50%]'>
        <img src={map.goImg} alt="go svg"/>
        </div>
    </div>
    </div>   
    ))}    
    </div>    

  )
}
