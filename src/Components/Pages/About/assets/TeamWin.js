import { useEffect,useRef} from "react";
import * as React from "react"
import {motion} from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const SvgComponent = (props) => {
  
  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={151}
    // height={151}
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0,0,0)",
      contentVisibility: "visible",
    }}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h151v151H0z" />
      </clipPath>
      <clipPath id="b">
        <path d="M0 0h200v200H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g  
        clipPath="url(#b)"
        style={{
          display: "block",
        }}
        transform="translate(-25 -26)"
      >
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.3-.001c0 39.378-31.92 71.299-71.3 71.299-39.38 0-71.3-31.921-71.3-71.299 0-39.377 31.92-71.297 71.3-71.297 39.38 0 71.3 31.92 71.3 71.297z"
          style={{
            display: "block",
          }}
          transform=" rotate(180 50.246 51.047)"
        />

        <path
        
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0 2.87-10.364 11.103-71.12 11.103s-71.09-8.238-71.09-11.134"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0-.815-9.92-3.112-71.121-3.112-61.202 0-71.089 2.251-71.089 3.081"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0-4.61-10.731-17.287-71.151-17.287-60.42 0-71.059 12.564-71.059 17.256"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0-8.403-11.543-31.462-71.181-31.462S-71.105-12.739-71.105-4.185"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0-12.198-12.355-45.637-71.211-45.637-58.856 0-70.999 33.19-70.999 45.606"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0-15.992-13.167-59.812-71.241-59.812S-71.105-20.463-71.105-4.185M71.105-4.154c0 17.755-13.572 69.019-71.144 69.019s-71.066-51.139-71.066-69.05"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0 14.1-12.784 54.794-71.138 54.794-58.354 0-71.072-40.602-71.072-54.825"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0 10.443-11.996 40.569-71.132 40.569S-71.105 6.35-71.105-4.185"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0 6.788-11.208 26.344-71.126 26.344-59.918 0-71.084-19.528-71.084-26.375"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
        <path
          fill="none"
          stroke="#B5A6FF"
          strokeWidth={2.5}
          d="M71.105-4.154c0 3.132-10.42 12.119-71.12 12.119s-71.09-8.99-71.09-12.15"
          style={{
            display: "block",
          }}
          transform="rotate(180 50.25 48.938)"
        />
      </g>
    </g>
  </svg>
  )
}
export default SvgComponent
