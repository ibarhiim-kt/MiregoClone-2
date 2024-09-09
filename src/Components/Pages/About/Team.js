import React from 'react'
import ParaResuse from '../../ReusableCode/ParaResuse'
export default function Team() {
  return (
    <div className="pt-32">
      <h1 className="home-h1">Our team</h1>
      <ParaResuse text2="Mirego is a team of passionate people dedicated to creating remarkable digital products. We believe that work should be an opportunity to innovate, have fun, and make a difference. We work as a team, sharing our ideas in the hope of making a difference and creating a better world." showParagraph={true} teamClasses="px-0" teamText2Class="mb-[15px]" teamParaAnima="teamParaAnima" paraContainer="para-container" text3="Quality is deeply rooted in our DNA. Our team members, all salaried, are hand-picked to ensure our clients receive nothing less than exceptional results. We’re known for our unmatched culture, and we don't hire freelancers or outside consultants for any of our projects." text3Classes="mt-"/>
    </div>
  )
}
