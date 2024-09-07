import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import './App.css';

const AnimatedButtons = () => {
  const buttonsRef = useRef([]);

  useEffect(() => {
    // Animate the buttons upward until the last button reaches the top
    gsap.to(buttonsRef.current, {
      yPercent: (i, el) => -100 * i, // Move each button up 100% of its height
      stagger: 1, // Delay between each button's animation
      duration: 1.5, // Duration of the animation
      ease: "power1.inOut",
      onComplete: () => {
        console.log("Animation complete!");
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="button" ref={(el) => (buttonsRef.current[0] = el)}>Button 1</div>
      <div className="button" ref={(el) => (buttonsRef.current[1] = el)}>Button 2</div>
      <div className="button" ref={(el) => (buttonsRef.current[2] = el)}>Button 3</div>
      <div className="button" ref={(el) => (buttonsRef.current[3] = el)}>Button 4</div>
      <div className="button" ref={(el) => (buttonsRef.current[4] = el)}>Button 5</div>
    </div>
  );
};

export default AnimatedButtons;
