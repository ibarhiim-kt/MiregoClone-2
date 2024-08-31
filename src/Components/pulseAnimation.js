import React, { useState } from 'react';


const AnimatedSVG = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleAnimation = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <svg
        className={`your-svg-class ${isActive ? 'active' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2071 520"
        width="100%"
        height="520"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <clipPath id="__lottie_element_23">
            <rect width="2071" height="520" x="0" y="0" className="svg-elem-1"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_23)">
          <g transform="matrix(1,0,0,1,1035.5,260)" opacity="1" style={{ display: 'block' }}>
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                className="svg-elem-1"
                strokeLinecap="square"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="rgb(247,237,222)"
                strokeOpacity="1"
                strokeWidth="21.138"
                d="M1024.928955078125,248.6179962158203 C1024.928955078125,248.6179962158203 1024.928955078125,-41.736000061035156 1024.928955078125,-41.736000061035156 C1024.928955078125,-79.09200286865234 994.6500244140625,-109.3759994506836 957.2899780273438,-109.3759994506836 C957.2899780273438,-109.3759994506836 955.9190063476562,-109.3759994506836 955.9190063476562,-109.3759994506836 C918.5590209960938,-109.3759994506836 888.280029296875,-79.09200286865234 888.280029296875,-41.736000061035156 C888.280029296875,-41.736000061035156 888.280029296875,152.78599548339844 888.280029296875,152.78599548339844 C888.280029296875,1"
              />
            </g>
          </g>
        </g>
      </svg>

      <button onClick={toggleAnimation}>
        Toggle Animation
      </button>
    </div>
  );
};

export default AnimatedSVG;
