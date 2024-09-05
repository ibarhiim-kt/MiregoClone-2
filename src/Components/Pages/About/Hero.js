import React from 'react'
import ParaResuse from '../../ReusableCode/ParaResuse'

export default function Hero() {
  return (
    <div className='px-2xl pt-32 max-xl:px-lg max-xl:pt-24 max-lg:pt-20 max-md:px-8 max-md:pt-16 max-sm:pt-12 max-xs:px-6 3xl:px-3xl'>
      <ParaResuse 
      text1="At Mirego, digital products are not an afterthought. They are the lens through which we view the world. They're the tools we've used for the past 15 years to build the future for our clients." marginClasses="mb-12 max-lg:mb-8 max-sm:mb-6"
      text2="Mirego is not your typical one-stop shop. For the past 15 years, our team has focused on one simple thing: creating delightful digital products and services that power our clients' digital transformation. As a result of this focus, we've developed unique expertise and experience in what we believe is truly critical to creating successful and delightful digital products: strategy, design, and engineering."
      showParagraph={true}
      aboutParaAnima="aboutParaAnima"
      paraContainer="para-container"
      aboutHeroParaClasses="px-0 py-2"/>        
    </div>
    )
}
