import React, { useState,useEffect } from 'react';
import ParaResuse from '../../ReusableCode/ParaResuse';
import teamMem1 from './assets/teamMem1.webp';
import teamMem2 from './assets/teamMem2.webp';
import teamMem3 from './assets/teamMem3.webp';
import teamMem4 from './assets/teamMem4.webp';
import teamMem5 from './assets/teamMem5.webp';
import teamMem6 from './assets/teamMem6.webp';
import teamMem7 from './assets/teamMem7.webp';
import teamMem8 from './assets/teamMem8.webp';
import teamMem9 from './assets/teamMem9.webp';
import teamMem10 from './assets/teamMem10.webp';
import teamMem11 from './assets/teamMem11.webp';
import teamMem12 from './assets/teamMem12.webp';
import teamMem13 from './assets/teamMem13.webp';
import teamMem14 from './assets/teamMem14.webp';
import teamMem15 from './assets/teamMem15.webp';
import teamMem16 from './assets/teamMem16.webp';
import teamMem17 from './assets/teamMem17.webp';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const [showShapes, setShowShapes] = useState(null);
  const teamMembers = [
    { img: teamMem1, name: "Sébastien Morin", expertise: "Partner ⏤ President & Chief Strategy Officer" },
    { img: teamMem2, name: "Élisa Ève De Serres", expertise: "Partner, Director ⏤ Product Team" },
    { img: teamMem3, name: "Jean-François Morin", expertise: "Partner, Vice-President ⏤ Product Creation" },
    { img: teamMem4, name: "Pascal Hamel", expertise: "Partner, Vice-President ⏤ Software Development" },
    { img: teamMem5, name: "Gabriel Rodrigue", expertise: "Partner, Vice-President ⏤ Operations" },
    { img: teamMem6, name: "Charles Cantin", expertise: "Partner, Vice-President ⏤ Customer Experience" },
    { img: teamMem7, name: "Martin Gagnon", expertise: "Partner, Director ⏤ Technological Exploration" },
    { img: teamMem8, name: "Rémi Prévost", expertise: "Partner, Director ⏤ Software Development" },
    { img: teamMem9, name: "Geneviève Milot", expertise: "Vice-President ⏤ Finance" },
    { img: teamMem10, name: "Adjanie Gaudreau", expertise: "Director ⏤ Finance" },
    { img: teamMem11, name: "Jean-François Grenon", expertise: "Director ⏤ Recruitment and Team Development" },
    { img: teamMem12, name: "Martin Bonneville", expertise: "Director ⏤ Support and Operations" },
    { img: teamMem13, name: "Philippe Lachance", expertise: "Director ⏤ Quality Assurance" },
    { img: teamMem14, name: "Thierry Fortier", expertise: "Director ⏤ Software Development Team" },
    { img: teamMem15, name: "Olivier Cartier", expertise: "Director ⏤ Agility and Project Management" },
    { img: teamMem16, name: "Jean Benoit Dubé", expertise: "Director ⏤ Digital Strategy" },
    { img: teamMem17, name: "Sylvain Jacques", expertise: "Director ⏤ Design" },
  ];
  useEffect(()=>{  
    gsap.set(".teamHeadingAnima",{y:0, opacity:1})
    gsap.from(".teamHeadingAnima",{
      duration:0.8,
      opacity:0,  
      y:50,
      scrollTrigger:{
      trigger:".teamHeadingAnima",              
    } 
    })
    gsap.set(".teamParaAnima",{opacity:1,y:0})
    gsap.from(".teamParaAnima",{
      duration:0.8,
      opacity:0,  
      y:50,
      scrollTrigger:{
      trigger:".teamParaAnima",            
    } 
    })
      gsap.set(".teamRow1",{opacity:1})
      gsap.from(".teamRow1",{
        duration:0.8,
        opacity:0,         
        scrollTrigger:{
        trigger:".teamRow1",
        start:"top 80%"     
      } 
      })
      gsap.set(".teamRow2",{opacity:1})
      gsap.from(".teamRow2",{
        duration:0.8,
        opacity:0,         
        scrollTrigger:{
        trigger:".teamRow2",      
        start:"top 90%"     
      } 
      })
      gsap.set(".teamRow3",{y:0, opacity:1})
      gsap.from(".teamRow3",{
        duration:0.8,
        opacity:0,        
        scrollTrigger:{
        trigger:".teamRow3",        
        start:"top 90%"     
      } 
      })
      gsap.set(".teamRow4",{y:0, opacity:1})
      gsap.from(".teamRow4",{
        duration:0.8,
        opacity:0,          
        scrollTrigger:{
        trigger:".teamRow4",      
        start:"top 90%"     
      } 
      })
      gsap.set(".teamRow5",{opacity:1})
      gsap.from(".teamRow5",{
        duration:0.8,
        opacity:0,  
        scrollTrigger:{
        trigger:".teamRow5",      
        start:"top 90%"     
      } 
      })
  },[])
 
  return (
    <div className="pt-32 max-xl:pt-24 max-md:pt-16 max-sm:pt-12">
      <h1 className="home-h1 teamHeadingAnima">Our team</h1>
      <ParaResuse 
        text2="Mirego is a team of passionate people dedicated to creating remarkable digital products. We believe that work should be an opportunity to innovate, have fun, and make a difference. We work as a team, sharing our ideas in the hope of making a difference and creating a better world." 
        showParagraph={true} 
        teamClasses="px-0" 
        teamText2Class="mb-[15px]" 
        teamParaAnima="teamParaAnima" 
        paraContainer="para-container" 
        text3="Quality is deeply rooted in our DNA. Our team members, all salaried, are hand-picked to ensure our clients receive nothing less than exceptional results. We’re known for our unmatched culture, and we don't hire freelancers or outside consultants for any of our projects." 
        text3Classes="mt-[15px]"
      />
      <div className='pt-32 pb-52 grid grid-cols-4 gap-2 font-AlmiregoDisplayRegular text-white max-xl:grid-cols-2 max-xl:pt-24 max-xl:pb-40 max-lg:pt-20 max-lg:pb-32 max-md:pt-16 max-md:pb-24 max-md-large:grid-cols-1 max-sm:pt-12 max-sm:pb-[88px]'>
        {teamMembers.map((map, index) => (
          <div
            key={index}
            className={`relative rounded-3xl overflow-hidden ${index<4? 'teamRow1':index>=4 && index<=7?"teamRow2":index>=8 && index<=11?"teamRow3":index>=12 && index<=15?"teamRow4":'teamRow5'} ${
              index === 1 || index === 4 || index === 7 || index === 10 || index === 13 || index === 16
                ? 'custom-class-1'
                : index === 2 || index === 5 || index === 8 || index === 11 || index === 14
                ? 'custom-class-2'
                : ''
            }`}
            onMouseEnter={() => setShowShapes(index)}
            onMouseLeave={() => setShowShapes(null)}
          >
            <div className='aspect-[2/3]'>
              <img src={map.img} alt="team member" className='h-full w-full object-cover' />
            </div>
            
            <div
              className={`teamShapes absolute rounded-3xl inset-0 transition-transform duration-500 ease-in-out ${
                showShapes === index ? '-translate-x-full' : 'translate-x-0'
              }`}            
            >               
            </div>                    
              <div className={`px-6 py-7 rounded-t-2xl absolute bottom-0 left-0 right-0 backdrop-blur-[40px] transition-transform duration-500 ease-in-out ${showShapes === index? 'translate-y-0' :'translate-y-full'}`} style={{ background: "rgba(247, 237, 222, 0.16)"}}>
                <h1 className='text-base mb-6 leading-relaxed-md'>{map.name}</h1>
                <p className='text-[15px]'>{map.expertise}</p>
              </div>           
          </div>
        ))}
      </div>
    </div>
  );
}
