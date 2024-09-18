import React, { useEffect } from 'react'
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
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
    const projectCards = [
        {
            img:card1,
            text:"Familiprix",             
            primaryBtn:"Mobile Application",
            secondaryBtn:"Web",
            tertiaryBtn:"Tablet Application",
            quaternaryBtn:"Health",
            showTertiaryBtn:true,
            showQuaternaryBtn:true,
                   
        },
        {
            img:card2,
            text:"Air Transat",             
            primaryBtn:"Mobile Application",            
            secondaryBtn:"Tablet Application",
            tertiaryBtn:"Health",
            showTertiaryBtn:true,
            showQuaternaryBtn:false,
             
        },
        {
            img:card3,
            text:"DAVIDsTEA",             
            primaryBtn:"Mobile Application",            
            secondaryBtn:"Retail",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,
             
        },
        {
            img:card4,
            text:"Cineplex",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Media",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,
             
        },
        {
            img:card5,
            text:"Winnipeg Jets",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Sports",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,
             
        },
        {
            img:card6,
            text:"DuProprio",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Tablet Application",
            tertiaryBtn:"Home",
            showTertiaryBtn:true,
            showQuaternaryBtn:false,
             
        },
        {
            img:card7,
            text:"Gold Canada",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Smart Watch",
            tertiaryBtn:"Sports",
            showTertiaryBtn:true,
            showQuaternaryBtn:false,             
        },
        {
            img:card8,
            text:"BRP GO!",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Travel",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card9,
            text:"Cominar",             
            primaryBtn:"Web",           
            secondaryBtn:"Industrial",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card10,
            text:"Airthings",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Web",
            tertiaryBtn:"Home",
            showTertiaryBtn:true,
            showQuaternaryBtn:false,             
        },
        {
            img:card11,
            text:"Le Massif de Charlevoix",             
            primaryBtn:"Displays",           
            secondaryBtn:"Sports",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,
             
        },
        {
            img:card12,
            text:"The Montréal Canadiens",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Sports",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card13,
            text:"Bell",             
            primaryBtn:"Multiplatform",           
            secondaryBtn:"Media",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card14,
            text:"IGA",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Tablet Application",
            tertiaryBtn:"Food",
            showTertiaryBtn:true,
            showQuaternaryBtn:false,             
        },
        {
            img:card15,
            text:"SAQ",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Displays",
            tertiaryBtn:"Tablet Application",
            quaternaryBtn:"Food",
            showTertiaryBtn:true,
            showQuaternaryBtn:true,             
        },
        {
            img:card16,
            text:"Schluter",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Home",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card17,
            text:"TV5 Québec Canada",             
            primaryBtn:"Multiplatform",           
            secondaryBtn:"Media",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card18,
            text:"Canadian Football League",             
            primaryBtn:"Multiplatform",           
            secondaryBtn:"Media",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card19,
            text:"Groupe Capitales Médias",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Web",
            tertiaryBtn:"Tablet Application",
            quaternaryBtn:"Media",
            showTertiaryBtn:true,
            showQuaternaryBtn:true,             
        },
        {
            img:card20,
            text:"Glo Bakery",             
            primaryBtn:"Mobile Application",    
            secondaryBtn:"Tablet Application",
            tertiaryBtn:"Food",
            showTertiaryBtn:true,
            showQuaternaryBtn:false,             
        },
        {
            img:card21,
            text:"Archibald",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Food",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
        {
            img:card22,
            text:"Premier Tech",             
            primaryBtn:"Web",           
            secondaryBtn:"Industrial",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,                   
        },
        {
            img:card23,
            text:"Sinai Health System",             
            primaryBtn:"Mobile Application",           
            secondaryBtn:"Health",    
            showTertiaryBtn:false,
            showQuaternaryBtn:false,                    
        },
        {
            img:card24,
            text:"Bombardier",                         
            primaryBtn:"Tablet Application",
            secondaryBtn:"Traverl",
            showTertiaryBtn:false,
            showQuaternaryBtn:false,             
        },
  ]
  const projectCardRows = ['cardRow1','cardRow2','cardRow3','cardRow4','cardRow5','cardRow6','cardRow7','cardRow8','cardRow9','cardRow10','cardRow11','cardRow12','cardRow13','cardRow14','cardRow15','cardRow16','cardRow17','cardRow18','cardRow19','cardRow20','cardRow21','cardRow22','cardRow23','cardRow24'];
  useEffect(()=>{
  
    projectCardRows.forEach((card)=>{
        gsap.set(`.${card}`,{y:0, opacity:1})
        gsap.from(`.${card}`,{
          duration:0.8,
          opacity:0,
          y:50,
          scrollTrigger:{
          trigger:`.${card}`,                 
        } 
        })
    })
},[])
return (

<div className='grid grid-cols-2 gap-2 pb-2 max-md:grid-cols-1'>
{projectCards.map((el,index)=>(
    <div className={`cardRow${index + 1} ${index === 0 ? "col-span-2 max-md:col-span-1" : ""}`}>
      <div className={`max-xl:pt-14 ${index === 0?"hover:rounded-[50%/100%] aspect-[2/1] max-md:aspect-[1/1]  duration-500":"duration-300 aspect-[1/1] hover:rounded-[50%]"} rounded-3xl overflow-hidden cursor-pointer relative max-lg:rounded-2xl group max-lg:pt-12 max-md:pt-8 max-xxs:pt-6 flex flex-col transform`}>        
      <div>
        <img src={el.img} alt="" className="w-full absolute top-0 left-0 rounded-[42px] max-md:aspect-[1/1] object-cover max-md:rounded-none"/>
        <div className="stickyCardsOverlay"></div>                
        <div className="flex items-center justify-between absolute left-0 top-0 w-full p-8 max-md:p-7 max-sm:p-6 leading-relaxed-xl group-hover:-mt-28 transform duration-300">        
        <div className="font-AlmiregoDisplayRegular text-base text-white-primary flex items-center gap-2 
          max-lg:text-sm-base max-sm:text-[20px] max-xxs:text-small">
          {el.text}
        <img src={arrow} alt="" className="h-7 w-7 hidden group-hover:inline"/>
        </div>
        <ul className="items-center font-AlmiregoDisplayRegular text-small gap-1 flex flex-row flex-wrap justify-end max-xs:text-x-small">
          <button className={`${index<1?"sticky-cards-li":"sticky-cards-li-small"}`}>{el.primaryBtn}</button>
          <li className={`${index<1?"sticky-cards-li":"sticky-cards-li-small"}`}>{el.secondaryBtn}</li>
          {el.showTertiaryBtn && (
          <li className={`${index<1?"sticky-cards-li":"sticky-cards-li-small"} max-md:hidden`}>{el.tertiaryBtn}</li>)}
           {el.showQuaternaryBtn && (
          <li className={`${index<1?"sticky-cards-li":"sticky-cards-li-small"}`}>{el.quaternaryBtn}</li>)}
        </ul>
    </div>
    </div>
    <div className='z-20 absolute items-center justify-center top-0 left-0 bottom-0 right-0 hidden group-hover:flex '>
        <div className='bg-white h-3xl w-2xl flex items-center justify-center rounded-[50%]'>
        <img src={go} alt="go svg"/>
        </div>
    </div>    
    </div>   
    </div>
    ))}    
    </div>    
  )
}
