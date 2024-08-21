import React,{useState} from 'react'
import together from '../../assets/together.svg'
export default function Hero() {
    const words = ['of bussiness','of organization','of sports','of media','of entertainment','of travel','of agriculture','of retail','of food','of health','of real estate','of manufacturing','of finance', 'of insurance'];
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleHover = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
//   };
  return (
    <div>    
    <div className='pt-[175px] px-[140px] font-AnekDevanagari'>
      <div className='text-[91px] leading-[0.45] tracking-[-2px] '>
        <p>
          Building the future
        </p>
      </div>
      <div className='mt-3'>           
      <div className='overflow-hidden h-[134px]'>
        <div className='animate-wordSlide'>
      {words.map((word)=>(      
      <div className='mb-[4px] word-slide'>
      <div className='flex'>
        <div className='py-[2px] text-[78px] px-[37px] border-[4px] border-black rounded-[70px]'>
        <h className='flex gap-3 mb-[-22px] py-3 '>{word}</h>
        </div>
      </div>
      </div>      
      ))}
      <div>  <img src={together} alt="" className='h-normal'/> </div>
      </div>
      </div>
      </div> 
      </div>
    {/* <div className='overflow-hidden h-[134px]'>
    <div className='animate-wordSlide flex flex-col gap-[4px]'>   

    <div className='border-[4px] border-black w-[490px] flex items-center justify-center rounded-[70px] overflow-hidden '>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of bussiness</h1>
    </div> 
    <div className='border-[4px] border-black w-[590px] flex items-center justify-center rounded-[70px] text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of organization</h1>
    </div>
    <div className='border-[4px] border-black w-[365px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of sports</h1>
    </div>
    <div className='border-[4px] border-black w-[365px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of media</h1>
    </div>
    <div className='border-[4px] border-black w-[640px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of entertainment</h1>
    </div>
    <div className='border-[4px] border-black w-[350px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of travel</h1>
    </div>
    <div className='border-[4px] border-black w-[530px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of agriculture</h1>
    </div>
    <div className='border-[4px] border-black w-[330px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of retail</h1>
    </div>
    <div className='border-[4px] border-black w-[330px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of food</h1>
    </div>
    <div className='border-[4px] border-black w-[380px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px] '>of health</h1>
    </div> 
    <div className='border-[4px] border-black w-[520px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]  '>of real estate</h1>
    </div>    
    <div className='border-[4px] border-black w-[670px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px] '>of manufacturing</h1>
    </div> 
    <div className='border-[4px] border-black w-[420px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px]'>of finance</h1>    
    </div>
    <div className='border-[4px] border-black w-[500px] flex items-center justify-center rounded-[70px]    text-[70px]'>                
    <h1 className='text-[78px] mt-[-20px] py-[12px] '>of insurance</h1>    
    </div>
    
    </div>
    </div> */}
      
      <div className="pt-[60px] px-[140px] pb-32">
      <p className='text-[56px] mb-12 leading-[112%] tracking-[-1.6px]'>
      Mirego is a multidisciplinary development, strategy, and design team that powers the digital transformation of its partners.</p> 
      <div className='mt-12'>
      <button href="#" className='px-5 py-3 bg-[#050307] rounded-xl text-[#FFFFFF] tracking-[-0.1px] 
      flex items-center justify-center leading-[1]'>Learn more about our expertise</button>
      </div>  
      </div>  
    </div>
  )
}
