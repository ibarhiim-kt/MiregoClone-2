import React from 'react'
import digitalTrends from '../../assets/digitalTrends.webp'
import arrow from '../../assets/arrow.svg'
import githubCopilot from '../../assets/githubCopilot.webp'
import basicNeeds from '../../assets/basicNeeds.webp'
import symbol from '../../assets/symbol.svg'
import yoshua from '../../assets/yoshua.jpeg'
export default function DiscoverVision() {
  return (
    <div className='pt-64 text-[050307]'>
      <h1 className='text-[120px] font-AlmiregoDisplayLight leading-[105%] px-10 '>Building for the future</h1>
      <div className='pt-[64px] px-[140px] flex justify-between gap-[8px] mb-11'>
        <div className='w-[50%]'></div>
        <div className='w-[50%] font-AlmiregoRegular'>
        <p className='text-[21px] tracking-[0.4px] leading-[125%]'>Over the past decade and a half, mobile and cloud computing have transformed countless industries. But emerging technologies will drive even greater change in the years to come. Want to take a peek at what tomorrow holds? From a diversity of angles, our experts share insights on the digital future.</p>
        <div className='mt-12 flex'>
      <a href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[0.3px] 
      flex items-center justify-center leading-[1]'>Discover our vision of the future</a>
      </div>  
        </div>
      </div>
      <div className='px-10 pt-32 grid grid-cols-4 gap-[32px]'>
        <a className='group'>
          <div className='relative overflow-hidden rounded-[44px] border-[1.5px] border-[#272425] text-white cursor-pointer font-AlmiregoRegular max-w-[354.4px] min-h-[408.8px]'>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>
            <img src={digitalTrends} alt="digitalTrends" className='h-full w-full max-w-[100%] object-cover'/>
            </div>
            <div className='py-8 px-6 absolute text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='text-base flex  items-center max-w-[80%] gap-1'>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>Sport</li>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>Report</li>
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-[15px] mr-1 group-hover:mr-2 duration-300">Read</p> 
                    <img src={arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-2xl leading-[125%]">Digital trends for augmented reality in professional sports</p>
              </div>
            </div>
          </div>
        </a>
        <a className='group'>
          <div className='relative overflow-hidden rounded-[44px] border-[1.5px] border-[#e0dfe0] text-white cursor-pointer font-AlmiregoRegular max-w-[354.4px] h-[440.4px]'>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>
            <img src={githubCopilot} alt="digitalTrends" className='h-full w-full object-cover opacity-100'/>
            </div>
            <div className='py-8 px-6 absolute text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='text-base flex  items-center max-w-[80%] gap-1'>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>Development</li>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>AI</li>
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-[15px] mr-1 group-hover:mr-2 duration-300">Read</p> 
                    <img src={arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-2xl leading-[125%]">Using GitHub Copilot and generative AI to accelerate software development</p>
              </div>
            </div>
          </div>
        </a>
        <a>
          <div className='relative overflow-hidden rounded-[44px] border-[1.5px] border-[#272425] text-white cursor-pointer font-AlmiregoRegular max-w-[354.4px] h-[767.2px] bg-[#242424]'>
            
            <div className='py-8 px-6 text-transparent top-0 left-0 w-full h-full flex flex-col'>
                <div className='relative  my-[88px] bg-clip-text ' style={{ background: 'linear-gradient(251deg, #b5a6ff 2.43%, #f7edde 98.82%)', WebkitBackgroundClip: 'text',textIndent:'60px' }}>
                  <img src={symbol} alt="symbol" className='absolute top-[12px] left-0 w-[52px]'/>
                  <p className="text-[40px] leading-[100%]">Artificial intelligence is not just about efficiency gains, it’s about opening up new possibilities, unlocking human potential and solving some of society’s biggest challenges.</p>
                </div>
                <div className='items-center inline-flex text-white gap-[15px]'>
                  <img src={yoshua} alt="Yoshua Bengio" className='w-[44px] h-[44px] rounded-[50%] overflow-hidden object-cover'/>
                  <p className='text-[15px]'>Yoshua Bengio</p>
                </div>
            </div>
          </div>
        </a>
        <a className='group'>
          <div className='relative overflow-hidden rounded-[44px] border-[1.5px] border-[#e0dfe0] text-white cursor-pointer font-AlmiregoRegular max-w-[354.4px] h-[440.4px]'>
            <div className='absolute top-0 left-0 w-full h-full object-cover overlay'>
            <img src={basicNeeds} alt="digitalTrends" className='h-full w-full object-cover'/>
            </div>
            <div className='py-8 px-6 absolute text-white top-0 left-0 w-full h-full flex flex-col'>
              <div className='flex justify-between items-center'>
                <ul className='text-base flex  items-center max-w-[80%] gap-1'>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>Work</li>
                  <li className='py-[2px] px-3 rounded-[50vh] border border-white'>AI</li>
                </ul>
                <ul>
                  <a href="#" className='flex items-center'>
                    <p className="text-[15px] mr-1 group-hover:mr-2 duration-300">Read</p> 
                    <img src={arrow} alt="arrow"/></a>
                </ul>
              </div>
              <div className='mt-64'>
                <p className="text-2xl leading-[125%]">The future of work: three basic needs shaping the next evolution of work</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

  )
}
