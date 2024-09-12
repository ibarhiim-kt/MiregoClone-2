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
import Arrow from '../../assets/arrow.svg';

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
    gsap.to('#arrowRight', {
      duration: 10,  
      repeat: -1,
      motionPath: {
        path: '#pathTop',
        align: '#pathTop',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: "linear",  
    });

    gsap.to('#arrowLeft', {
      duration: 10,  
      repeat: -1,
      motionPath: {
        path: '#pathBottom',
        align: '#pathBottom',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.25,
        end: 1.25,
      },
      ease: "linear",  
    });
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
      <div className='min-h-screen mx-auto max-w-screen-xl'>
        <div className='flex-grow'>
        <div className='pt-24 px-lg flex'>
          <div>
            <p className='text-2xl font-[AlmiregoDisplayLight] font-extralight leading-[98%] max-2xl:text-5xl min-2xl:px-24 max-xl:text-4xl'>
              We help build <span className='font-NewsreaderItalic font-light tracking-normal'>digital businesses. </span>
            </p>
            <div className='mt-12'>
              <button onClick={scrollToApproach} className='px-5 py-[8px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-ls text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Discover our approach
              </button>
            </div>
            <br></br>
          </div>
          <div className='w-1/3'></div>
        </div>

        <div className='flex justify-center align-middle pt-lg'>
          <img src={Img1} className='w-[94%] rounded-3xl' />
        </div>

        <div className='pt-20 flex gap-14'>
          <div className='w-1/2'>{/* Animation div */}</div>
          
          {/* Text div */}
          <div className='w-1/2'>
            <p className='font-[AlmiregoDisplayRegular] text-lg leading-tight-md tracking-tight'>One of a few end-to-end digital product teams.</p>
            <p className='font-[AlmiregoRegular] mt-12 text-lm pr-[85px] tracking-normal'>
              No matter how well defined or vague their idea, our clients can count on us to help them turn their vision into a functional digital product or service that delivers an exceptional user experience, enables them to achieve their business goals, and supports their digital strategy.
            </p>
          </div>
        </div>

        <br />
        <div className='flex gap-14 mx-md'>
          <div className='w-1/2'>
            <p className='font-[AlmiregoDisplayRegular] text-lg leading-relaxed-lg tracking-tight'>Build the right things, build things right.</p>
            <p className='font-[AlmiregoRegular] mt-12 text-lm pr-[5px] leading-relaxed-lg tracking-normal'>
              We've been immersed in the technology industry for decades, working on a wide variety of projects. Among the startups we've helped, some have enjoyed resounding success at launch, while others have been less fortunate. Among the established organizations we have helped, some have managed to reinvent themselves rather than disappear, while others could not adapt to the new environment.
              <br />
              The most important lesson we've learned is this: A robust strategy without proper execution is useless, and vice versa. One constantly supports the other.<br />
              <span className='mt-3 block'>We have perfected a rigorous process and developed the skills needed to identify the right things to build and the ideal way to build them. We learn by doing. We think while building. And with each iteration, we help create digital businesses driven by new digital products and services.</span>
            </p>
          </div>
          <div className='w-1/2'>
            <img alt='error_Img' src={Img2} className='rounded-3xl' />
          </div>
        </div>

        <div className='flex mx-md gap-14 mt-[155px]'>
          <div className='w-1/2'>
            <p className='font-[AlmiregoDisplayRegular] text-lg leading-relaxed-lg tracking-tight'>Our manifesto</p>
          </div>
          <div className='w-1/2'>
            <p className='font-[AlmiregoRegular] text-lm pr-[5px] leading-relaxed-lg tracking-normal'>
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
        <div className='w-full'>
          {/* Card 1 */}
          <div className='mt-24 w-full pb-2.5xl rounded-t-4xl bg-[#ff462a] '>
            <div className='mx-md pt-24'>
              <div className='inline-block py-sm-base px-3 rounded-full border text-x-small font-AlmiregoDisplayRegular text-white border-white'>
                Devices
              </div>
              <p className='font-[AlmiregoDisplayLight] mt-5 text-7xl text-white-primary leading-tight-sm tracking-tight'>
                We build for these platforms
              </p>
              <p className='font-AlmiregoDisplay mt-14 text-lg text-white-primary leading-tight-md'>
                Mobile ⏤ Tablet ⏤ Web ⏤ Cloud-native ⏤ Wearables ⏤ Kiosk ⏤ Smart TV ⏤ Streaming ⏤ AR & VR ⏤ AI & ML ⏤ Blockchain ⏤ IoT
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={ourApproachRef} className='-mt-10 w-full pb-36 rounded-t-4xl text-cream-primary bg-[#113b31]'>
            <div className='mx-md pt-24'>
              <div className='inline-block py-sm-base px-3 rounded-full border text-x-small font-AlmiregoDisplayRegular border-white'>
                Services
              </div>
              <p className='font-[AlmiregoDisplayLight] mt-5 text-7xl leading-tight-sm tracking-tight'>
                Our approach
              </p>

              <div className='pt-24'>
                {/* Section - 1 Roll-up/down functionality */}
                {sections.map((section, idx) => (
                  <div className={`pt-2 ${idx !== 0 ? 'mt-4' : ''}`} key={section.index}>
                    <div className='flex justify-between items-center'>
                      <p className='text-sm font-AlmiregoRegular'>
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
            <div className='flex px-lg pt-32 gap-2'>
            <img src={Img4} alt='error_expertise' className='rounded-3xl w-[49.7%]'/>
            <img src={Img5} alt='error_expertise' className='rounded-3xl w-[49.7%]'/>
            </div>

            <div className='pt-24'>
             <p className='mx-md font-[AlmiregoDisplayLight] mt-5 text-4xl leading-[140%] tracking-tight'>
               We believe that a great digital product is as beautiful as it is useful and reliable, meeting business goals while satisfying user needs.
              <span className="inline-block -mt-24 ml-4 align-middle">
               {/* Avatar Stack */}
              <div className="space-x-[-28px] inline-flex items-center align-middle">
              {avatars.map((avatar, index) => (
               <div key={index} className="relative w-[58px] h-[58px] p-[6px] rounded-full align-middle overflow-hidden bg-[#113b31]" 
                style={{ border: `1.5px solid ${avatar.outlineColor}`, zIndex: avatars.length - index }}>
              <img src={avatar.imgSrc} alt={`Person ${index + 1}`} className="w-auto h-full object-cover align-middle" />
              </div>
              ))}
              </div>
             </span>
             </p>
            </div>

            <div className='mx-md pt-32 flex gap-12'>
            <p className='w-1/2 font-[AlmiregoDisplayRegular] text-lg leading-tight-md tracking-normal'>Making a difference in people's everyday lives</p>
            <p className='w-1/2 font-[AlmiregoRegular] -mr-1 leading-tight text-lm tracking-tight'><strong className='tracking-[1.1px]'>We have vast ambitions in creating digital products.</strong> To make thousands of families aware of the quality of the air they breathe ⏤ Accompany thousands of people on their travels ⏤ Reinventing the way millions of Canadians view their favorite content ⏤ Building tomorrow's health-centric pharmacy ⏤ Reinventing telemedicine with a human approach ⏤ Inspiring the discovery of new wines, beers, and spirits for millions of Quebecers  ⏤ Creating tomorrow's grocery experience across Canada ⏤ Building the future of driving experiences for millions of recreational product fans
            </p>
            </div>

          {/* Carousel of words */}
          <div className="mt-16 pb-12 overflow-hidden">
          {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className="carousel-row cursor-pointer flex space-x-6 mt-8">
              {[...randomizeTags(), ...randomizeTags()].map((tag, index) => (
                <div key={`${tag}-${index}`}
                  className={`inline-block py-5 px-11 border-4 border-cream-primary text-cream-primary font-AlmiregoDisplayRegular text-1.75xl ${generateShape(index)} whitespace-nowrap transition-colors duration-300 hover:bg-cream-primary hover:text-black`}>
                  {tag}
                </div>
              ))}
            </div>
             ))}
             </div>
            </div>

            {/* Card 3 */}
            <div className='-mt-10 w-full pb-36 rounded-t-4xl text-cream-primary bg-black-secondary'>
              <div className='flex justify-between items-center mx-10'>
              <a href='/projects' className='flex items-center mt-14 cursor-pointer hover:text-purple-primary transition-colors duration-300 ease-in-out'>
                  <p className='font-AlmiregoDisplayRegular text-sm-base'>Go to Projects</p>
                  <span className='inline-block ml-2 group-hover:text-purple-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-6 fill-current transform rotate-180">
                  <path d="M12 2l1.41 1.41L7.83 9H22v2H7.83l5.58 5.59L12 18l-8-8 8-8z"/>
                 </svg>
                 </span>
              </a>
              <img src={GFoot} alt='error_Footer' className='mt-14 w-[108px] h-14'/>
             </div>
            </div>          
          </div>
        </div>
      </div>
    </>
  );
}