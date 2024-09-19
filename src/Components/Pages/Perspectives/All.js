import React from 'react'
import CardsCode from './CardsCode'
import arrow from '../HomePage/assets/arrow.svg'
import digitalTrends from '../HomePage/assets/digitalTrends.webp'
import githubCopilot from '../HomePage/assets/githubCopilot.webp'
import basicNeeds from '../HomePage/assets/basicNeeds.webp'
import { symbol } from 'framer-motion/client'
import yoshua from '../HomePage/assets/yoshua.webp'

export default function All() {
  const cards = [
    {
      btn1:'Development',
      btn2:'Security',
      read:'Read',
      arrow: arrow, 
      image:digitalTrends,
      para:'Safeguarding innovation through cybersecurity'
    },
    {
      btn1:'Development',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Digital trends on data valorization in agriculture'
    },
    {
      btn1:'Development',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Using GitHub Copilot and generative AI to accelerate software development'
    },
    {
      btn1:'Report',
      btn2:'Sport',
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'Digital trends for augmented reality in professional sports'
    },
    {
      // btn1:'Sport',
      // btn2:'Report',
      // read:'Read',
      // arrow: arrow,
      // image:digitalTrends,
      para:'Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.'
    },
    {
      btn1:'Work',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'The future of work: three basic needs shaping the next evolution of work'
    },
    {
      btn1:'AI',
      read:'Watch',
      arrow: arrow,
      para:'Scout: an AI tool to help organizations integrate AI and ensure data privacy'
    },
    {
      btn1:'Work',
      
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'HR Analytics: from operational to predictable'
    },
    {
      btn1:'AI',
      
      read:'Watch',
      arrow: arrow,
      image:digitalTrends,
      para:'La Ruche'
    },
    {
      btn1:'AI',
      btn2:'Strategy',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Three levels of AI to improve your efficiency and maximize its content '
    },
    {
      btn1:'Development',
      image:yoshua,      
      para:'Taking the reins: secrets to a successful project handover'
    },
    {
      btn1:'AI',
      btn2:'Retail',
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'Reinventing retail: key trends and innovations'
    },
    {
      btn1:'Design',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:digitalTrends,
      para:'AI and human input: the future of product design is collaborative'
    },
    {
      btn1:'AI',
      btn2:'QA',
      // read:'Read',
      // arrow: arrow,
      image:githubCopilot,
      para:'Podcast AQ,AI'
    },
    {
      btn1:"AI",
      btn2:"Strategy",
      image:githubCopilot,
      para:'Leveraging data in the age of Automation'
    },
    {
      btn1:'Multiplatform',
      btn2:'Product Management',
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'How to mitigate spiralling costs in a multiplatform client ecosystem?'
    },
    {
      image:digitalTrends,

    },
    {
      image:yoshua,
      name:'Bill Gates',
      para:'In my lifetime, I’ve seen two demonstrations of technology that struck me as revolutionary: the GUI and ChatGPT.'
    },
    {
      btn1:'AI',
      btn2:'Travel',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Air Transat'
    },
   
    {
      btn1:'Work',
      btn2:'AI',
      btn3:'Development',
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'The new developer skill set'
    },
    {
      btn1:'Sport',
      btn2:'Report',
      read:'Read',
      arrow: arrow,
      image:digitalTrends,
      para:'Podcast . Web 3'
    },
    {
      btn1:'QA',
      btn2:'AI',
      read:'Read',
      arrow: arrow,
      image:githubCopilot,
      para:'Quality Assurance will remain relevant with AI'
    },
    {
      btn1:"Work",
      image:yoshua,
      name:'Yoshua Bengio',
      para:'Tomorrows worksapces'
    },
    {
      image:yoshua,
      name:'David Deutsch',
      para:'Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.'
    },    
    {
      btn1:'QA',
     
      read:'Read',
      arrow: arrow,
      image:basicNeeds,
      para:'The evolution of traditional test cases in quality assurance'
    },
    {
      btn1:'Development',
      btn2:'Security',
      read:'Read',
      arrow: arrow,
      image:digitalTrends,
      para:'putting seurity & compliance at the head of software development'
    },
    {
      btn1:'Development',
      btn2:'IoT',
      read:'AI  ',
      arrow: arrow,
      image:githubCopilot,
      para:'The future of software engineering: More devices, more data, smarter experiences'
    },
    
  ]
  return (
    <div>
    <CardsCode cards={cards}/>
    </div>
  )
}
