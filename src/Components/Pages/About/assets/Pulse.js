// import React, { useEffect } from 'react';
// import gsap from 'gsap';

// export default function Pulse() {
//   const numCircles = 6; // Total number of circles you want to animate

//   useEffect(() => {
//     const container = document.querySelector('.circle-container');

//     // Create and animate circles
//     const createAndAnimateCircle = (index) => {
//       const circle = document.createElement('div');
//       circle.className = 'rings absolute border-[2px] border-green-500 rounded-[50%]';
      
//       // Set size based on index
//       const size = (index + 1) * 20; // Adjust size multiplier if needed
//       circle.style.width = `${size}px`;
//       circle.style.height = `${size}px`;
//       circle.style.opacity = 0; // Start invisible
//       container.appendChild(circle); // Append to the container

//       // Animate the circle
//       gsap.to(circle, {
//         scale: 1.75,
//         opacity: 1, // Fade in
//         duration: 2,
//         onComplete: () => {
//           // Create next circle only when the current one is done
//           if (index < numCircles - 1) {
//             createAndAnimateCircle(index + 1);
//           }
//         },
//       });
//     };

//     // Start the animation with the first circle
//     createAndAnimateCircle(0);
//   }, []);

//   return (
//     <div className='circle-container flex justify-center items-center relative rounded-[50%]'>      
//     </div>
//   );
// }

import React from 'react'
import ball from './innovative.svg'


export default function Pulse() {
  return (
    <div>
    {/* <div className='Circle'></div> */}
</div>
  )
}

