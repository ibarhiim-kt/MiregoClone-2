import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Logo from '../SvgsComponents/Logo';
import { color } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const links = [
    { text: "About", to: "/about" },
    { text: "Expertise", to: "/Expertise" },
    { text: "Projects", to: "/Projects" },
    { text: "Culture", to: "/Culture" },
    { text: "Perspectives", to: "/Perspectives" },
  ];

  const location = useLocation(); // Hook to get the current location
  const [isClicked, setIsClicked] = useState(null);

  // Update isClicked based on the current pathname
  useEffect(() => {
    const currentLinkIndex = links.findIndex(link => link.to === location.pathname);
    setIsClicked(currentLinkIndex !== -1 ? currentLinkIndex : null);
  }, [location.pathname, links]);

  useEffect(() => {
    gsap.set(".blackNavbarAnima", { x: 0 });
    gsap.to(".blackNavbarAnima", {
      background: "rgba(0,0,0,.24)",
      color: "white",
      scrollTrigger: {
        trigger: ".blackNavbarTrigger",
        start: "top 13%",
        toggleActions: "play none none reverse"
      }
    });
    gsap.to(".logo-white", {
      fill: 'red',
      scrollTrigger: {
        trigger: ".blackNavbarTrigger",
        start: "top 13%",
        toggleActions: "play none none reverse",
      }
    });
    
  }, []);

  const handleClick = (index) => {
    setIsClicked(index);
  };

  return (
    <header className={`pt-2xl ${isClicked === 4 ? 'bg-black' : ''}`}>
      <div className='flex justify-between items-center pt-2md px-2md w-full font-AlmiregoDisplayRegular fixed top-0 z-50 max-lg:p-10 max-md:p-8 max-sm:p-6 max-xxs:p-5'>
        <a href="/" className='pr-2xs py-3'>
          <Logo className={`max-sm:h-xs-base max-xxs:h-4 logo-white`} />
        </a>
        <div className={`text-xxs-base flex items-center gap-2md text-black-primary justify-between 
          bg-gray-tertiary rounded-lg backdrop-blur-14 leading-tight-xs max-2xl:gap-0  max-lg:hidden min-[1729px]:text-x-small ${isClicked!=4?'blackNavbarAnima':''}`} style={{background:isClicked===4?'rgba(0,0,0,.24)':'', backdropFilter: 'blur(14px)', color:isClicked===4?'white':''}}>
          {links.map((map, index) => (
            <Link 
              to={map.to} 
              className='px-2xs py-3 relative group' 
              onClick={() => handleClick(index)} 
              key={index}
            >
              {map.text}
              <div className={`top-[80%] w-1 h-1 bg-black-primary opacity group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-full absolute left-[45%] ${isClicked === index ? 'opacity-100' : 'opacity-0'} ${isClicked===4?'bg-white':''}`}></div>
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-1 text-black-primary text-xxs-base leading-none min-[1729px]:text-x-small'>
          <button className='px-2xs py-2.5 border rounded-xl border-gray-secondary bg-gray-tertiary max-lg:hidden blackNavbarAnima' style={{ backdropFilter: 'blur(14px)', transition: 'transform 0.3s ease',background:isClicked===4?'rgba(0,0,0,.24)':'', color:isClicked===4?'white':'', borderColor:isClicked===4?'rgba(165,164,166,.16)':'' }}>News</button>
          <button className='px-2xs py-2.5 border rounded-xl border-gray-secondary bg-gray-tertiary max-lg:hidden blackNavbarAnima' style={{ backdropFilter: 'blur(14px)', transition: 'transform 0.3s ease' ,background:isClicked===4?'rgba(0,0,0,.24)':'', color:isClicked===4?'white':'',borderColor:isClicked===4?'rgba(165,164,166,.16)':''}}>Contact</button>
          <button className='px-2xs py-2.5 border rounded-xl border-black-primary bg-gray-tertiary hidden max-lg:inline max-md:px-3 max-xxs:text-[14px] blackNavbarAnima' style={{ backdropFilter: 'blur(14px)', transition: 'transform 0.3s ease', background:isClicked===4?'rgba(0,0,0,.24)':'', color:isClicked===4?'white':'',borderColor:isClicked===4?'rgba(165,164,166,.16)':''}}>Menu</button>
        </div>
      </div>
    </header>
  );
}
