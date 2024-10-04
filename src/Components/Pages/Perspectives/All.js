import React from 'react'
import CardsCode from './CardsCode'
import digitalTrends from '../HomePage/assets/digitalTrends.webp'
import githubCopilot from '../HomePage/assets/githubCopilot.webp'
import basicNeeds from '../HomePage/assets/basicNeeds.webp'
import safeguarding from './assets/safeguarding.webp'
import valorization from './assets/valorization.webp'
import scout from './assets/scout.webp'
import hrAnalytics from './assets/hrAnalytics.webp'
import laRuche from './assets/laRuche.webp'
import threeLevels from './assets/threeLevels.webp'
import reins from './assets/reins.webp'
import reinventing   from './assets/reinventing.webp'
import collaborative from './assets/collaborative.webp'
import leveraging from './assets/leveraging.webp'
import mitigate from './assets/mitigate.webp'
import airTransat from './assets/airTransat.webp'
import newSkills from './assets/newSkills.webp'
import qualityAssurance from './assets/qualityAssurance.webp'
import workspaces from './assets/workspaces.webp'
import evolution from './assets/evolution.webp'
import security from './assets/securtiy.webp'
import billGates from './assets/billGates.png'
import david from './assets/david.jpg'
import remi from '../../Pages/About/assets/teamMem8.webp'
import philippe from '../../Pages/About/assets/teamMem13.webp'
import robert from './assets/robert.jpeg'
import alex from './assets/alex.jpeg'
import invertedCommas from './assets/invertedCommas.svg'
import invertedCommasBlack from './assets/invertedCommasBlack.svg'
import smarterExperiences from './assets/smarterExperiences.webp'
import greenSymbol from './assets/greenSymbol.svg'
import symbol from './assets/symbol.svg'
import pauseIcon from './assets/pauseIcon.svg'
// import { symbol } from 'framer-motion/client'
import yoshua from '../HomePage/assets/yoshua.webp'
import Filter from './Filter'
// import { i } from 'framer-motion/client'
export default function All() {
  
  const cards = [
    {
      id:0,
      btn1:'Development',
      btn2:'Security',
      read:'Read',        
      image:safeguarding,
      primaryPara:'Safeguarding innovation through cybersecurity',      
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:1,      
      read:'Read',       
      image:valorization,
      primaryPara:'Digital trends on data valorization in agriculture',
      showbtn1:false,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:2,
      btn1:'Development',
      btn2:'AI',
      read:'Read',       
      image:githubCopilot,
      primaryPara:'Using GitHub Copilot and generative AI to accelerate software development',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:3,
      btn1:'Report',
      btn2:'Sport',
      read:'Read',       
      image:digitalTrends,
      primaryPara:'Digital trends for augmented reality in professional sports',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {      
      id:4,
      primaryPara:'Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.',
      image:yoshua,
      name:'Yoshua Bengio',
      showbtn1:false,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false,
      symbol:symbol
    },
    {
      id:5,
      btn1:'Work',
      btn2:'AI',
      read:'Read',       
      image:basicNeeds,
      primaryPara:'The future of work: three basic needs shaping the next evolution of work',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:6,
      btn1:'AI',
      read:'Watch',     
      image:scout,  
      primaryPara:'Scout: an AI tool to help organizations integrate AI and ensure data privacy',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      pauseIcon:pauseIcon,
      showSecondaryPara:false
    },
    {
      id:7,
      btn1:'Work',      
      read:'Read',       
      image:hrAnalytics,
      primaryPara:'HR Analytics: from operational to predictable',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:8,
      btn1:'AI',      
      read:'Watch',       
      image:laRuche,
      primaryPara:'La Ruche',
      secondaryPara:'Artificial intelligence empowering crowdfunding',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:true,
      pauseIcon:pauseIcon,
    },
    {
      id:9,
      btn1:'AI',
      btn2:'Strategy',
      read:'Read',       
      image:threeLevels,
      primaryPara:'Three levels of AI to improve your efficiency and maximize its content',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:10,
      btn1:'Development',
      image:reins,      
      read:'Read',
      primaryPara:'Taking the reins: secrets to a successful project handover',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:11,
      btn1:'AI',
      btn2:'Retail',
      read:'Read',       
      image:reinventing,
      primaryPara:'Reinventing retail: key trends and innovations',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:12,
      btn1:'Design',
      btn2:'AI',
      read:'Read',       
      image:collaborative,
      primaryPara:'AI and human input: the future of product design is collaborative',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:13,
      btn1:'AI',
      btn2:'QA',        
      primaryImage:remi,
      secondaryImage:philippe,
      primaryPara:'Podcast · QA, AI and Automation (French only)',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false,
      showTertiaryImage:false,
      pauseIcon:pauseIcon,
    },
    {
      id:14,
      btn1:"AI",
      btn2:"Strategy",
      read:'Read',
      image:leveraging,
      primaryPara:'Leveraging data in the age of Automation',
      secondaryPara:'An overviewo of the different ways of integrating personalizationi into your digital...',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:true
    },
    {
      id:15,
      btn1:'Multiplatform',
      btn2:'Product Management',
      read:'Read',       
      image:mitigate,
      primaryPara:'How to mitigate spiralling costs in a multiplatform client ecosystem?',
      secondaryPara: 'How to mitigate spiralling costs in a multiplatform client ecosystem?',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:true
    },
    {
      id:16,
      btn1:'AI',
      primaryPara:"Our Vision on Artificial Intelligence",
      showbtn1:false,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:17,
      btn1:invertedCommas,
      invertedCommasBlack:invertedCommasBlack,
      image:billGates,
      read:'Source',
      name:'Bill Gates',
      primaryPara:'In my lifetime, I’ve seen two demonstrations of technology that struck me as revolutionary: the GUI and ChatGPT.',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false,
      symbol:symbol
    },
    {
      id:18,
      btn1:'AI',
      btn2:'Travel',
      read:'Read',       
      image:airTransat,
      primaryPara:'Air Transat',
      secondaryPara:'Using generative AI to better support travellers.',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:true
    },   
    {
      id:19,
      btn1:'Work',
      btn2:'AI',
      btn3:'Development',
      read:'Read',       
      image:newSkills,
      primaryPara:'The new developer skill set',
      secondaryPara:'Artificial Intelligence is revolutionizing the way we write code and develop software.',
      showbtn1:true,
      showbtn2:true,
      showbtn3:true,
      showSecondaryPara:true
    },
    {      
      id:20,
      read:'Read',       
      primaryImage:remi,
      secondaryImage:robert,
      tertiaryImage:alex,
      primaryPara:'Podcast · Web3 Development  (French only) ',
      showbtn1:false,
      showbtn2:false,
      showbtn3:false,
      showTertiaryImage:true,
      pauseIcon:pauseIcon,
    },
    {
      id:21,
      btn1:'QA',
      btn2:'AI',
      read:'Read',       
      image:qualityAssurance,
      primaryPara:'Quality Assurance will remain relevant with AI',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false
    },
    {
      id:22,
      btn1:"Work",
      image:workspaces,
      name:'Yoshua Bengio',
      read:'Read',
      primaryPara:'Tomorrows worksapces',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:23,
      image:david,
      invertedCommasBlack:invertedCommasBlack,
      btn2:invertedCommas,
      name:'David Deutsch',
      primaryPara:'We have a duty to be optimistic. Because the future is open, not predetermined and therefore cannot just be accepted: we are all responsible for what it holds. Thus it is our duty to fight for a better world.',
      showbtn1:false,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false,
      symbol:greenSymbol
    },    
    {
      id:24,
      btn1:'QA',     
      read:'Read',       
      image:evolution,
      primaryPara:'The evolution of traditional test cases in quality assurance',
      showbtn1:true,
      showbtn2:false,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:25,
      btn1:'Development',
      btn2:'Security',
      read:'Read',       
      image:security,
      primaryPara:'Putting seurity & compliance at the head of software development',
      showbtn1:true,
      showbtn2:true,
      showbtn3:false,
      showSecondaryPara:false
    },
    {
      id:26,
      btn1:'Development',
      btn2:'IoT',
      btn3:'AI',
      read:'Read',       
      image:smarterExperiences,
      primaryPara:'The future of software engineering: More devices, more data, smarter experiences',
      showbtn1:true,
      showbtn2:true,
      showbtn3:true,
      showSecondaryPara:false
    },    
  ]
  return (
    <div>
    <Filter cards={cards}/>
    </div>
  )
}
