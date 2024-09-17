import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Img1 from './assets/expertise-1.webp';
import Img2 from './assets/expertise-2.webp';
import Img3 from './assets/expertise-3.webp';
import Img4 from './assets/expertise-4.webp';
import Img5 from './assets/expertise-5.webp';
import Person1 from './assets/person-1.webp';
import Person2 from './assets/person-2.webp';
import Person3 from './assets/person-3.webp';
import Person4 from './assets/person-4.webp';
import Person5 from './assets/person-5.webp';
import './Expertise.css';
import GFoot from '../../assets/GFooterImg.png';
import Arrow from './assets/black-arrow-right.webp';

gsap.registerPlugin(MotionPathPlugin);

export default function Expertise() {
  const [openSections, setOpenSections] = useState([false, false, false, false]);
  const ourApproachRef = useRef(null); 
  const tags = [
    'IGA', 'Golf Canada', 'SAQ', 'Winnipeg Jets', 'Schluter',
    'Canadian Football League', 'Cominar', 'Bombardier', 'Archibald',
    'DAVIDs TEA', 'TV5 Québec Canada', 'Sinai Health System', 'Airthings',
    'Familiprix', 'Air Transat', 'Glo Bakery', 'BRP GO!', 'DuProprio',
    'Bell', 'Le Massif de Charlevoix', 'Premier Tech', 'The Montréal Canadiens',
    'Groupe Capitales Médias', 'Cineplex'
  ];

  const randomizeTags = () => {
    return tags
      .map(tag => ({ tag, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ tag }) => tag);
  };

  const generateShape = (index) => {
    switch (index % 3) {
      case 0:
        return 'rounded-ls'; // Rectangular with rounded corners
      case 1:
        return 'rounded-[72px]'; // Fully round
      case 2:
        return 'rounded-[40px]'; // Semi-rectangle semi-round
      default:
        return '';
    }
  };

  useEffect(() => {
    gsap.to('#arrowStrategy', {
      duration: 11,  
      repeat: -1,
      motionPath: {
        path: '#pathStrategy',
        align: '#pathStrategy',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: "linear",  
    });

    const tweenDevelopment = gsap.to('#arrowDevelopment', {
      duration: 11,
      repeat: -1,
      motionPath: {
        path: '#pathDevelopment',
        align: '#pathDevelopment',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: 'linear',
    });
    tweenDevelopment.progress(0.5);
  }, []);

  const sections = [
    {
      title: 'Discover',
      subtitle: 'Research & Strategy',
      content: 'First, the discovery phase enables our team to understand the context in which your business operates, the goals you want to achieve, and the users you are trying to serve. Once armed with a comprehensive understanding of your reality and that of the market, our team begins a series of exercises that seek to explore different creative avenues. We then prioritize the best ideas, validate their feasibility, deliver prototypes that will be validated with users, and deliver a concrete, actionable plan.',
      keyServices: true,
      services: ['Competitive analysis (benchmark)', 'Product performance analysis (analytics)', 'User surveys and interviews', 'Field observation and journey mapping', 'Technological analysis', 'User concept testing', 'Product visions and roadmaps'],
      index: 0,
    },
    {
      title: 'Define',
      subtitle: 'Design & Product Management',
      content: 'Once the product vision has been clarified and the main functionalities are known, the design team proceeds with product definition and design. At Mirego, we believe that the quality of the experience delivered to users is intimately linked to the number of iterations carried out in the design phase. Thanks to the various activities in this phase, our product definition process achieves the maximum number of iterations on interfaces in the minimum possible time. We move fast and prefer to create prototypes that can be tested by users rather than heavy documentation that ends up gathering dust.',
      keyServices: true,
      services: ['Backlog definition & prioritization', 'Information architecture', 'Visual prototype', 'Usability testing', 'Screen mockups', 'Digital brand design'],
      index: 1,
    },
    {
      title: 'Build',
      subtitle: 'Development and operation',
      content: [
        <p>Once the product vision and design have been defined, we start building it by using the best technologies, tools, and practices in order to reach world-class quality and experience levels. We use the Agile software development methodology to run two-week sprints that allow us to constantly deliver features that can be tested and validated through functional deliverables. Once the product has been deployed in production, we make sure it stays highly available and runs smoothly.</p>,
        <p className='mt-3'>We are technology-agnostic, which means we are not bound to a finite set of technologies—we favour using the right platforms and technologies for the right product. We have extensive experience building applications for:</p>
      ],
      keyServices: false, 
      services: ['Mobile and tablet platforms', 'Web and cloud-native', 'Smart watch', 'Kiosk (trade shows, customer demos)', 'Smart TV & media streaming', 'AI and ML', 'Blockchain', 'IoT'],
      index: 2,
    },
    {
      title: 'Evolution',
      subtitle: 'Iteration & Support',
      content: "Products only survive if they can adapt. We believe that lasting solutions are constantly evolving. A product's past performance doesn't guarantee its future success. Staying one step ahead allows us to create user experiences that remain relevant over time.",
      keyServices: false, 
      services: ['Continuous development', 'Ad hoc development', '24/7 support', 'Product audits (security, accessibility, UX)'],
      index: 3,
    },
  ];

  const toggleSection = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  // Scroll to "Our Approach" section when button is clicked
  const scrollToApproach = () => {
    ourApproachRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const avatars = [
    { imgSrc: Person1, outlineColor: '#ff451e' },
    { imgSrc: Person2, outlineColor: '#3d8371' },
    { imgSrc: Person3, outlineColor: '#b5a6ff' },
    { imgSrc: Person4, outlineColor: '#f7ecde' },
    { imgSrc: Person5, outlineColor: '#ff4523' },
  ];

  return (
    <>
      <Helmet>
        <title>Expertise - Mirego</title>
        <meta name="description" content="This is the expertise page description" />
      </Helmet>
      <div className='min-h-screen mx-auto max-w-screen-6xl'>
        <div className='flex-grow'>
        <div className='pt-24 max-6xl:px-2xl max-medium-large:px-lg flex max-md:px-6 max-md:pt-20'>
          <div>
            <p className='text-5xl font-[AlmiregoDisplayLight] font-extralight leading-[98%] max-xxs:text-base max-sm:text-xs max-large:text-xl max-4.5xl:text-4xl'>
              We help build <span className='font-NewsreaderItalic font-light tracking-normal'>digital businesses. </span>
            </p>
            <div className='mt-12'>
              <button onClick={scrollToApproach} className='px-5 py-[8px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-ls text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Discover our approach
              </button>
            </div>
            <br></br>
          </div>
          <div className='w-1/3 hidden md:block'></div>
        </div>

        <div className='flex justify-center align-middle pt-lg'>
          <img src={Img1} className='w-[94%] rounded-3xl' />
        </div>

        <div className='pt-24 flex max-md:-pt-3 max-md:flex-col gap-0 max-md:mx-7'>
        <div className='w-1/2 max-md:w-full'>
        <div className='relative left-5 w-full max-md:left-0 max-6xl:h-[820px] max-2xl:h-[750px] max-medium-large:h-[700px] max-1.5xl:h-[650px] max-large:h-[540px] max-md:h-[720px] max-medium:h-[530px] max-sm:h-[400px]' >
        {/* Shape #1 */}
        <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 1100 500" xmlns="http://www.w3.org/2000/svg">
       {/* Slightly Rounded Rectangle */}
        <rect x="107" y="-330" width="900" height="318" rx="95" ry="95" fill="transparent" stroke="black" strokeWidth="4"/>
        {/* Path for the Arrow to Follow */}
        <path id="pathStrategy" d="M 202,-330 H 912 A 95,95 0 0 1 1007,-235 V -107 A 95,95 0 0 1 912,-12 H 202 A 95,95 0 0 1 107,-107 V -235 A 95,95 0 0 1 202,-330 Z" fill="none" stroke="none"/>
        {/* Moving Arrow */}
        <image id="arrowStrategy" href={Arrow} width="30" height="30"/>
       {/* Centered Text */}
        <text x="550" y="-180" fill="black" fontSize="40" fontFamily="Arial" textAnchor="middle" alignmentBaseline="middle">STRATEGY</text>
        </svg>

       {/* Shape #2 */}
         <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 1100 500" xmlns="http://www.w3.org/2000/svg">
         {/* Rounded Shape */}
          <rect x="107" y="-102" width="900" height="318" rx="157.5" ry="157.5" fill="transparent" stroke="black" strokeWidth="4"/>
         {/* Centered Text */}
         <text x="550" y="63" fill="black" fontSize="40" fontFamily="Arial" textAnchor="middle" alignmentBaseline="middle">DESIGN</text>
         </svg>

      {/* Shape #3 */}
        <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 1100 500" xmlns="http://www.w3.org/2000/svg">
       {/* Rounded Corners Rectangle */}
        <rect x="107" y="130" width="900" height="318" rx="30" ry="30" fill="transparent" stroke="black" strokeWidth="4"/>
        {/* Path for the Arrow to Follow */}
        <path
          id="pathDevelopment" d="M 137,130 H 977 A 30,30 0 0 1 1007,160 V 418 A 30,30 0 0 1 977,448 H 137 A 30,30 0 0 1 107,418 V 160 A 30,30 0 0 1 137,130 Z" fill="none" stroke="none"/>
        {/* Moving Arrow */}
        <image id="arrowDevelopment" href={Arrow} width="30" height="30"/>
       {/* Centered Text */}
        <text x="550" y="300" fill="black" fontSize="40" fontFamily="Arial" textAnchor="middle" alignmentBaseline="middle">DEVELOPMENT</text>
        </svg>

        </div>
       </div>
          
          {/* Text div */}
          <div className='w-1/2 pl-8 max-large:pl-0 max-md:w-full max-md:-mt-40 max-medium:-mt-32'>
            <p className='font-[AlmiregoDisplayRegular] text-lg leading-tight-md tracking-tight max-large:text-sm max-large:leading-none max-sm:text-base'>One of a few end-to-end digital product teams.</p>
            <p className='font-[AlmiregoRegular] mt-12 text-lm pr-[80px] tracking-normal max-md:pr-0 max-large:mt-10 max-md:mt-7 max-sm:text-small max-sm:mt-3'>
              No matter how well defined or vague their idea, our clients can count on us to help them turn their vision into a functional digital product or service that delivers an exceptional user experience, enables them to achieve their business goals, and supports their digital strategy.
            </p>
          </div>
        </div>

        <br />
        <div className='max-6xl:-mt-28 max-md:mt-4 max-medium-large: flex gap-14 mx-md max-md:flex-col max-md:mx-7'>
          <div className='w-1/2 max-md:w-full'>
            <p className='font-[AlmiregoDisplayRegular] text-xl leading-relaxed-lg tracking-tight max-medium-large:text-lg max-large:text-sm'>Build the right things,<br className='max-md:mt-8'/> build things right.</p>
            <p className='font-[AlmiregoRegular] mt-12 text-lm pr-[5px] leading-relaxed-lg tracking-normal max-large:mt-6 max-md:pr-0'>
              We've been immersed in the technology industry for decades, working on a wide variety of projects. Among the startups we've helped, some have enjoyed resounding success at launch, while others have been less fortunate. Among the established organizations we have helped, some have managed to reinvent themselves rather than disappear, while others could not adapt to the new environment.
              <br className='max-md:hidden' />
              The most important lesson we've learned is this: A robust strategy without proper execution is useless, and vice versa. One constantly supports the other.<br />
              <span className='mt-3 block'>We have perfected a rigorous process and developed the skills needed to identify the right things to build and the ideal way to build them. We learn by doing. We think while building. And with each iteration, we help create digital businesses driven by new digital products and services.</span>
            </p>
          </div>
          <div className='w-1/2 max-md:w-full'>
            <img alt='error_Img' src={Img2} className='rounded-3xl' />
          </div>
        </div>

        <div className='flex mx-md gap-14 mt-[155px] max-md:flex-col max-md:mx-7 max-md:mt-20'>
          <div className='w-1/2 max-md:w-full'>
            <p className='font-[AlmiregoDisplayRegular] text-xl leading-relaxed-lg tracking-tight max-medium-large:text-lg max-large:text-sm'>Our manifesto</p>
          </div>
          <div className='w-1/2 max-md:w-full'>
            <p className='font-[AlmiregoRegular] text-lm pr-[5px] leading-relaxed-lg tracking-normal max-md:mt-5'>
              A single digital product now has the power to transform an entire industry. The performance and survival of many organizations now depend on their ability to integrate digital products into the core of their business strategy. Our team's manifesto documents 16 principles that we believe are the cornerstone of creating exceptional digital products that achieve their goals and stand the test of time.
            </p>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-ls text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Read our manifesto
              </button>
            </div>
          </div>
        </div>

        <div className='mx-9 mt-14'>
          <img alt='error_Img' src={Img3} className='rounded-3xl' />
        </div>

        {/* Our Approach section */}
        <div className='w-full max-w-full'>
          {/* Card 1 */}
          <div className='mt-24 w-full pb-2.5xl max-large:pb-2xl rounded-t-4xl bg-[#ff462a]'>
            <div className='max-2xl:mx-md pt-24 max-6xl:mx-2xl max-md:mx-8'>
              <div className='inline-block py-sm-base px-3 rounded-full border text-x-small font-AlmiregoDisplayRegular text-white border-white max-large:text-[15px]'>
                Devices
              </div>
              <p className='font-[AlmiregoDisplayLight] mt-5 max-2.5xl:text-7xl text-white-primary leading-tight-sm tracking-tight max-6xl:text-[120px] max-large:text-2xl max-sm:text-md max-xxs:text-xs'>
                We build for these platforms
              </p>
              <p className='font-AlmiregoDisplayRegular mt-14 max-medium-large:text-lg text-white-primary leading-tight-md max-6xl:text-xl max-large:text-sm max-sm:text-base'>
                Mobile ⏤ Tablet ⏤ Web ⏤ Cloud-native ⏤ Wearables ⏤ Kiosk ⏤ Smart TV ⏤ Streaming ⏤ AR & VR ⏤ AI & ML ⏤ Blockchain ⏤ IoT
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={ourApproachRef} className='-mt-10 w-full pb-36 rounded-t-4xl text-cream-primary bg-[#113b31]'>
            <div className='max-2xl:mx-md max-6xl:mx-2xl max-md:mx-8 pt-24'>
              <div className='inline-block py-sm-base px-3 rounded-full border text-x-small font-AlmiregoDisplayRegular border-white max-large:text-[15px]'>
                Services
              </div>
              <p className='font-[AlmiregoDisplayLight] mt-5 max-2.5xl:text-7xl leading-tight-sm tracking-tight max-6xl:text-[120px] max-large:text-2xl max-sm:text-md max-xxs:text-xs'>
                Our approach
              </p>

              <div className='pt-24 max-xxs:pt-14'>
                {/* Section - 1 Roll-up/down functionality */}
                {sections.map((section, idx) => (
                  <div className={`pt-2 ${idx !== 0 ? 'mt-4' : ''}`} key={section.index}>
                    <div className='flex justify-between items-center max-sm:justify-center max-sm:align-middle'>
                      <p className='max-medium-large:text-sm font-AlmiregoRegular max-6xl:text-md max-large:text-xs max-md:text-sm-base max-xxs:text-[22px]'>
                        <span className='font-NewsreaderItalic'>{section.title}</span> ⏤ {section.subtitle}
                      </p>

                      {/* Chevron Button */}
                      <button  onClick={() => toggleSection(section.index)}  className={`border-2 rounded-full w-7 h-7 flex justify-center items-center transition-all duration-300 ${openSections[section.index] ? 'bg-cream-primary' : '' } hover:bg-cream-primary`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 transition-transform duration-300 ${openSections[section.index] ? '' : 'hover:rotate-180'}`} 
                          fill={openSections[section.index] ? '#113b31' : '#FFFFFF'} onMouseEnter={(e) => (e.currentTarget.style.fill = '#113b31')} onMouseLeave={(e) => (e.currentTarget.style.fill = openSections[section.index] ? '#113b31' : '#FFFFFF')}>
                          <path d="M12 15.75l-6-6 1.06-1.06L12 13.69l4.94-4.94 1.06 1.06z"/>
                        </svg>
                      </button>
                    </div>

                    {/* Section Content */}
                    {openSections[section.index] && (
                      <div className='mt-8'>
                        <p className='text-lm font-AlmiregoRegular'>{section.content}</p>

                        {/* Conditionally render the "Key Services" title if needed */}
                        {section.keyServices && (
                          <p className='text-[20px] font-AlmiregoDisplayBold mt-4'>Key services:</p>)}

                        <ul className='mt-3'>
                          {section.services.map((service, idx) => (
                            <li key={idx} className='mt-2 pb-4 text-small font-AlmiregoRegular'>• {service}</li>))}
                        </ul>
                      </div>
                    )}
                    {/* Add a divider line below all sections except the last one */}
                    {idx < sections.length - 1 && (
                      <hr className='mt-5 border-t border-cream-primary' />  // Horizontal line
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Add two images side by side */}
            <div className='flex px-lg pt-32 gap-2 max-md:flex-col max-md:px-8 max-md:pt-28'>
            <img src={Img4} alt='error_expertise' className='rounded-3xl w-[49.7%] max-md:w-full'/>
            <img src={Img5} alt='error_expertise' className='rounded-3xl w-[49.7%] max-md:w-full'/>
            </div>

            <div className='pt-24'>
             <p className='max-2xl:mx-md max-6xl:mx-2xl max-md:mx-8 max-xxs:mx-6 font-[AlmiregoDisplayLight] mt-5 max-medium-large:text-4xl leading-[140%] tracking-tight max-6xl:text-5xl max-large:text-xl max-md:text-xs max-xxs:text-base'>
               We believe that a great digital product is as beautiful as it is useful and reliable, meeting business goals while satisfying user needs.
              <span className="inline-block -mt-24 ml-4 align-middle max-large:-mt-11 max-md:-mt-6">
               {/* Avatar Stack */}
              <div className="space-x-[-28px] inline-flex items-center align-middle max-large:space-x-[-20px] max-md:space-x-[-14px]">
              {avatars.map((avatar, index) => (
               <div key={index} className="relative w-[58px] h-[58px] p-[6px] rounded-full align-middle overflow-hidden bg-[#113b31] max-large:h-10 max-large:w-10 max-large:p-1 max-md:h-6 max-md:w-6 max-md:p-[2px]" 
                style={{ border: `1.5px solid ${avatar.outlineColor}`, zIndex: avatars.length - index }}>
              <img src={avatar.imgSrc} alt={`Person ${index + 1}`} className="w-auto h-full object-cover align-middle" />
              </div>
              ))}
              </div>
             </span>
             </p>
            </div>

            <div className='max-2xl:mx-md max-6xl:mx-2xl max-md:mx-8 max-sm:pt-24 pt-32 flex gap-12 max-md:flex-col'>
            <p className='w-1/2 max-md:w-full font-[AlmiregoDisplayRegular] max-medium-large:text-lg leading-tight-md tracking-normal max-6xl:text-xl max-large:text-sm max-sm:text-base max-xxs:text-sm-base'>Making a difference in people's everyday lives</p>
            <p className='w-1/2 max-md:w-full font-[AlmiregoRegular] -mr-1 leading-tight text-lm tracking-tight max-sm:text-small max-xs:text-x-small'><strong className='tracking-[1.1px]'>We have vast ambitions in creating digital products.</strong> To make thousands of families aware of the quality of the air they breathe ⏤ Accompany thousands of people on their travels ⏤ Reinventing the way millions of Canadians view their favorite content ⏤ Building tomorrow's health-centric pharmacy ⏤ Reinventing telemedicine with a human approach ⏤ Inspiring the discovery of new wines, beers, and spirits for millions of Quebecers  ⏤ Creating tomorrow's grocery experience across Canada ⏤ Building the future of driving experiences for millions of recreational product fans
            </p>
            </div>

          {/* Carousel of words */}
          <div className="mt-16 pb-12 overflow-hidden max-sm:mt-12 max-sm:pb-2 max-xxs:pb-0">
          {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className="carousel-row cursor-pointer flex space-x-6 mt-8 max-sm:mt-3 max-sm:space-x-3">
              {[...randomizeTags(), ...randomizeTags()].map((tag, index) => (
                <div key={`${tag}-${index}`}
                  className={`inline-block py-5 px-11 border-4 border-cream-primary text-cream-primary font-AlmiregoDisplayRegular text-1.75xl max-large:text-mid max-large:py-3 max-large:px-8 max-sm:text-sm-base max-sm:py-2 max-sm:px-4 max-sm:border-2 ${generateShape(index)} whitespace-nowrap transition-colors duration-300 hover:bg-cream-primary hover:text-black`}>
                  {tag}
                </div>
              ))}
            </div>
             ))}
             </div>
            </div>

            {/* Card 3 */}
            <div className='-mt-10 w-full pb-36 rounded-t-4xl text-cream-primary bg-black-secondary max-md:pb-11'>
              <div className='flex justify-between items-center mx-10 max-md:mx-6'>
              <a href='/projects' className='flex items-center mt-14 cursor-pointer hover:text-purple-primary transition-colors duration-300 ease-in-out'>
                  <p className='font-AlmiregoDisplayRegular max-medium-large:text-sm-base max-6xl:text-base max-md:text-[22px] max-xxs:text-m'>Go to Projects</p>
                  <span className='inline-block ml-2 group-hover:text-purple-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-6 fill-current transform rotate-180">
                  <path d="M12 2l1.41 1.41L7.83 9H22v2H7.83l5.58 5.59L12 18l-8-8 8-8z"/>
                 </svg>
                 </span>
              </a>
              <img src={GFoot} alt='error_Footer' className='mt-14 w-[108px] h-14 max-medium:w-12 max-medium:h-6'/>
             </div>
            </div>          
          </div>
        </div>
      </div>
    </>
  );
}