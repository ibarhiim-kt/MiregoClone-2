import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Img1 from '../../assets/expertise-1.webp';
import Img2 from '../../assets/expertise-2.webp';
import Img3 from '../../assets/expertise-3.webp';

gsap.registerPlugin(MotionPathPlugin);

export default function Expertise() {
  const [openSections, setOpenSections] = useState([false, false, false, false]);

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
      content: 'First, the discovery phase enables our team to understand the context in which your business operates...',
      keyServices: true,
      services: ['Competitive analysis (benchmark)', 'Product performance analysis (analytics)', 'User surveys and interviews', 'Field observation and journey mapping', 'Technological analysis', 'User concept testing', 'Product visions and roadmaps'],
      index: 0,
    },
    {
      title: 'Define',
      subtitle: 'Design & Product Management',
      content: 'During the define phase, we shape ideas and design solutions that solve real business problems...',
      keyServices: true,
      services: ['Backlog definition & prioritization', 'Information architecture', 'Visual prototype', 'Usability testing', 'Screen mockups', 'Digital brand design'],
      index: 1,
    },
    {
      title: 'Build',
      subtitle: 'Development and operation',
      content: 'The build phase involves hands-on development, ensuring the product is built to the highest standards...',
      keyServices: false, 
      services: ['Mobile and tablet platforms', 'Web and cloud-native', 'Smart watch', 'Kiosk (trade shows, customer demos)', 'Smart TV & media streaming', 'AI and ML', 'Blockchain', 'IoT'],
      index: 2,
    },
    {
      title: 'Evolution',
      subtitle: 'Iteration & Support',
      content: 'Once the product is live, we move into an evolution phase where we continuously iterate...',
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

  return (
    <>
      <Helmet>
        <title>Expertise - Mirego</title>
        <meta name="description" content="This is the expertise page description" />
      </Helmet>
      <div className='mx-auto max-w-screen-xl'>
        <div className='pt-24 px-lg flex'>
          <div>
            <p className='text-2xl font-[AlmiregoDisplayLight] font-extralight leading-[98%] max-2xl:text-5xl min-2xl:px-24 max-xl:text-4xl'>
              We help build <span className='font-NewsreaderItalic font-light -tracking-[1.75px]'>digital businesses. </span>
            </p>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-xl text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
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
            <p className='font-[AlmiregoRegular] mt-12 text-[21px] pr-[85px] tracking-normal'>
              No matter how well defined or vague their idea, our clients can count on us to help them turn their vision into a functional digital product or service that delivers an exceptional user experience, enables them to achieve their business goals, and supports their digital strategy.
            </p>
          </div>
        </div>

        <br />
        <div className='flex gap-14 mx-md'>
          <div className='w-1/2'>
            <p className='font-[AlmiregoDisplayRegular] text-lg leading-relaxed-lg tracking-tight'>Build the right things, build things right.</p>
            <p className='font-[AlmiregoRegular] mt-12 text-[21px] pr-[5px] leading-relaxed-lg tracking-normal'>
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
            <p className='font-[AlmiregoRegular] text-[21px] pr-[5px] leading-relaxed-lg tracking-normal'>
              A single digital product now has the power to transform an entire industry. The performance and survival of many organizations now depend on their ability to integrate digital products into the core of their business strategy. Our team's manifesto documents 16 principles that we believe are the cornerstone of creating exceptional digital products that achieve their goals and stand the test of time.
            </p>
            <div className='mt-12'>
              <button href="#" className='px-5 py-[9px] cursor-pointer font-[AlmiregoDisplayRegular] bg-[#050307] rounded-xl text-xxs text-[#FFFFFF] tracking-[0.3px] align-middle'>
                Read our manifesto
              </button>
            </div>
          </div>
        </div>

        <div className='mx-9 mt-14'>
          <img alt='error_Img' src={Img3} className='rounded-3xl' />
        </div>

        {/* Ending cards */}
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
          <div className='-mt-10 w-full pb-36 rounded-t-4xl text-cream-primary bg-[#113b31]'>
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
                  <div className={`pt-10 ${idx !== 0 ? 'mt-5' : ''}`} key={section.index}>
                    <div className='flex justify-between items-center'>
                      <p className='text-sm font-AlmiregoRegular'>
                        <span className='font-NewsreaderItalic'>{section.title}</span> ⏤ {section.subtitle}
                      </p>

                      {/* Chevron Button */}
                      <button  onClick={() => toggleSection(section.index)}  className={`border-2 rounded-full w-7 h-7 flex justify-center items-center transition-all duration-300 ${openSections[section.index] ? 'bg-white' : '' } hover:bg-white`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 transition-transform duration-300 ${openSections[section.index] ? '' : 'hover:rotate-180'}`} 
                        fill={openSections[section.index] ? '#113b31' : '#FFFFFF'} onMouseEnter={(e) => (e.currentTarget.style.fill = '#113b31')} onMouseLeave={(e) => (e.currentTarget.style.fill = openSections[section.index] ? '#113b31' : '#FFFFFF')}>
                      <path d="M12 15.75l-6-6 1.06-1.06L12 13.69l4.94-4.94 1.06 1.06z"/>
                       </svg>
                      </button>
                    </div>

                    {/* Section Content */}
                    {openSections[section.index] && (
                      <div className='mt-8'>
                        <p className='text-[21px] font-AlmiregoRegular'>{section.content}</p>

                        {/* Conditionally render the "Key Services" title if needed */}
                        {section.keyServices && (
                          <p className='text-[20px] font-AlmiregoDisplayBold mt-4'>Key services:</p>
                        )}

                        <ul className='mt-4'>
                          {section.services.map((service, idx) => (
                            <li key={idx} className='mt-2 pb-4 text-small font-AlmiregoRegular'>• {service}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}