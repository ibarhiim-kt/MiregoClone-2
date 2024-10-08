import React, {useState} from 'react'
import collapseArrow from './assets/collapseArrow.svg'
import { div } from 'framer-motion/client'
export default function Collapse() {
const [visibleA, setVisibleA] = useState(false)
const [visibleB, setVisibleB] = useState(false)
  return (
    <div>
      <div className='cursor-pointer flex items-center justify-between py-8 border-b border-black-primary' onClick={()=>setVisibleA(!visibleA)}>
       <p className='text-base font-AlmiregoDisplayRegular'> Work Schedule and enviorment </p>
       <img src={collapseArrow} alt="Arrow" />
      </div>
      {
        visibleA?(
            <div className='max-w-[80%] pt-6 pb-8 leading-normal '>
                <p className='text-lm mb-[18px]'>Our mission is to create the best work environment. We want to simplify the lives of our team members and offer them maximum flexibility.</p>
                <ul>
                    <li>
                        <div className='collapseBeforDot'></div>
                        <p>The first day of work at Mirego is set for Tuesday. New team members thus have Monday to set up their home office and/or take time off.</p>
                    </li>
                    <li>
                        <div className='collapseBeforDot'></div>
                        <p>The first day of work at Mirego is set for Tuesday. New team members thus have Monday to set up their home office and/or take time off.</p>
                    </li>
                    <li>
                        <div className='collapseBeforDot'></div>
                        <p>The first day of work at Mirego is set for Tuesday. New team members thus have Monday to set up their home office and/or take time off.</p>
                    </li>
                    <li>
                        <div className='collapseBeforDot'></div>
                        <p>The first day of work at Mirego is set for Tuesday. New team members thus have Monday to set up their home office and/or take time off.</p>
                    </li>
                </ul>
            </div>
        ):(
            ''
        )
      }
    </div>
  )
}
