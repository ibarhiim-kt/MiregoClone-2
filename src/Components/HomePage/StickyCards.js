// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import cardImg1 from '../../assets/sliderCards/card1.webp'
// import cardImg2 from '../../assets/sliderCards/card2.webp'
// import cardImg3 from '../../assets/sliderCards/card3.webp'


// const HeroSection = () => {
//   const cardSlider = [
//     {name:"DuProprio",
//      btn1:"Mobile Application",
//      btn2:"Tablet Application",
//      btn3:"Home",
//      img:cardImg1
//     },
//     {name:"Air Transat",
//       btn1:"Mobile Application",
//       btn2:"Tablet Application",
//       btn3:"Travel",
//       img:cardImg2
//      },
//      {name:"Winnipeg Jets",
//       btn1:"Mobile Application",      
//       btn3:"Sports",
//       img:cardImg3
//      },
//      {
//         name:"See all projects"
//      }
//   ]
//   useEffect(() => {
//     // Register GSAP plugins
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//     // Initialize ScrollSmoother
//     const scrollerSmoother = ScrollSmoother.create({
//       content: "#content",
//       wrapper: "#wrapper",
//       smooth: true,
//       effects: false,
//       normalizeScroll: true,
//     });

//     // GSAP Timeline for animations
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".accordions",
//         pin: true,
//         start: "top 10%",
//         end: "bottom 90%",
        
//         scrub: 1,
//         ease: "linear",
//         // markers:SVGComponentTransferFunctionElement
//       },
//     });

//     // Accordion text animation
//     tl.to(".accordion .text", {
//       height: 0,
//       paddingBottom: 0,
//       opacity: 0,
//       stagger: 0.5,
//     }).to(
//       ".accordion",
//       {
//         marginBottom: -500,
//         stagger: 0.5,
//       },
     
//     );

//     return () => {     
//       scrollerSmoother.kill();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div  className="w-full h-screen bg-whitestatic">
//       <div id="content">
//     <div className="px-10 relative max-h-[2800px] max-[1500px]:max-h-[2300px]">
//       <p className="text-[68px] lg:text-8xl font-[Almirego-Light] lg:py-7">
//         Made with <span className="font-[NewsReader-Italic] font-light">passion</span>
//       </p>
//       <div className="flex flex-col md:flex-row justify-evenly md:py-4 pb-8">
//         <div className="hidden md:block w-1/2"></div>
//         <div className="font-[Almirego] text-[21px] w-full md:w-1/2">
//           Through the years, we've built digital products that millions of people use every day on phones,
//           web browsers, tablets, connected watches, TVs, kiosks, and voice assistants.
//         </div>
//       </div>    
    
    
//         <div className="mt-[10vh]"></div>
      
//         <div className="accordions ">
//           {cardSlider.map((map,index)=>(
//           <div className={`accordion bg-gradient-to-bl cursor-pointer  p-8 rounded-[32px] border-[2px] border-[white] 
//           shadow-xl mb-[-120px] ${index === 3?"bg-black":""}`} style={{ backgroundImage: `url(${map.img})`, backgroundSize:"cover"}}>
            
//             <div className="flex items-center justify-between">
//             <div className="font-[Almirego-Display] text-[28px] text-white">
//               {map.name}
//             </div>
//             <ul className={`${index >2?"hidden":"inline"} flex items-center  font-[Almirego-Display] text-[18px] gap-[4px]`}>
//               <li className="py-[5px] px-[13px] bg-[#fff] rounded-[32px]">{map.btn1}</li>
//               <li className={`${index === 2?"hidden":"inline"} py-[5px] px-[13px] bg-[#fff] rounded-[32px]`}>{map.btn2}</li>
//               <li className="py-[5px] px-[13px] bg-[#fff] rounded-[32px]">{map.btn3}</li>
//             </ul>
//               <ul className={`${index < 3?"hidden":"inline"} flex items-center gap-[6px]`}>
//                 <li className="h-[32px] w-[32px] border-[2px] border-white rounded-[10px]"></li>
//                 <li className="h-[32px] w-[32px] rounded-[50%] bg-white"></li>
//               </ul>
//             </div>
//             <div className="mt-[499.37px]">
//             </div>
//           </div>
//           ))}          
//         </div>
//         <div className="h-[70vh]"></div>
//         <h1 className="text-[50px] mt-[50px] bg-[red]">Hi My name is something</h1>
//       </div>
//     </div>
   
//     </div>
//   );
// };

// export default HeroSection;
