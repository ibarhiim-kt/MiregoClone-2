import React, {useEffect,useState} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img_01 from "./assets/primarySlider_img_01.webp"
import slider_img_02 from "./assets/primarySlider_img_02.webp"
import slider_img_03 from "./assets/primarySlider_img_03.webp"
import slider_img_04 from "./assets/primarySlider_img_04.webp"
import slider_img_05 from "./assets/primarySlider_img_05.webp"
import dragIcon from "../About/assets/dragIcon.svg"

export default function PrimarySlider() {
    const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
    const settings = {        
        infinite: true,
        slidesToShow: 3,        
        slidesToScroll: 1,       
        autoplay: true,         
        speed: 30000,            
        autoplaySpeed: 1000,        
        cssEase: "linear", 
        pauseOnHover: true,    
        draggable: true,   
        swipeToSlide:true,         
      };
  return (
    <div >
        {isHovering && (
          <img
            src={dragIcon}
            alt="drag Icon"
            style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            className="fixed h-[5vw] w-[5vw] transform -translate-x-1/2 -translate-y-1/2 custom-cursor pointer-events-none"
          />
        )}
        
          <div className='overflow-hidden cursor-none' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Slider {...settings}>        
          <img src={slider_img_01} alt="slider_img_01" className='rounded-[24px] max-h-[547.54px] h-[82vw]'/>    
          <img src={slider_img_02} alt="slider_img_02" className='rounded-[24px] max-h-[470.89px] h-[82vw]'/>      
          <img src={slider_img_03} alt="slider_img_03" className='rounded-[24px] max-h-[293.33px] h-[82vw]'/> 
          <img src={slider_img_04} alt="slider_img_04" className='rounded-[24px] max-h-[469.33px] h-[82vw]'/> 
          <img src={slider_img_05} alt="slider_img_05" className='rounded-[24px] max-h-[293.33px] h-[82vw]'/> 
          </Slider>
          </div>
        </div>
  )
}
