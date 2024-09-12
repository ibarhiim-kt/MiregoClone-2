import React from 'react'
// import Enterprenuership from '../Pages/About/Enterprenuership'
export default function ParaResuse({
    text1,
    marginClasses,
    text2,
    showParagraph=false,
    showButton=false,
    buttonLink="",
    buttonText="",
    distinctiveClasses,
    distinctiveParaAnima,
    distinctiveButtonAnima,
    discoverClasses,
    discoverParaAnima,
    discoverButtonAnima,
    stickyCardsClasses,
    stickyCardsPadding,
    aboutHeroParaClasses,
    aboutHeroParaAnima,
    buildFutureClasses,
    buildFutureAnima,
    enterprenuershipClasses,
    paraContainer,
    enterpreneurshipParaAnima,
    text3,
    teamClasses,
    teamParaAnima,
    teamText2Class,
}) {    
  return (
    <>
      <p className={`font-AlmiregoDisplayRegular text-xl leading-relaxed-md max-xl:text-lg max-lg:text-sm max-sm:text-base max-xxs:text-sm-base ${marginClasses} ${aboutHeroParaAnima}`}>
      {text1}
      </p>
      {showParagraph && (
        <div className={`${paraContainer} ${distinctiveClasses} ${discoverClasses} ${stickyCardsClasses} ${buildFutureClasses} ${enterprenuershipClasses} ${aboutHeroParaClasses} ${teamClasses}`}>
          <div className='w-1/2 max-md:w-0'></div>
          <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
            <p className={`home-para ${distinctiveParaAnima} ${discoverParaAnima} ${buildFutureAnima} ${stickyCardsPadding} ${aboutHeroParaAnima} ${teamParaAnima} ${teamText2Class} ${enterpreneurshipParaAnima}`}>
              {text2}
            </p>
            <p className={`home-para ${teamParaAnima}`}>
              {text3}
            </p>
            {showButton && (
              <div className='home-btn-container overflow-hidden'>  
                <a href={buttonLink} className={`home-btns ${distinctiveButtonAnima} ${discoverButtonAnima}`}>
                  {buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {/* {showCards &&(
        
        <div
            
        className={`bg-cream-primary p-8 w-1/4 rounded-3xl max-lg:rounded-xl max-lg:w-[calc(50%-4px)] max-md:w-full max-md:p-7 max-sm:p-7 animaCard${cardsIndex + 1}`}>
        <div>
          <p className='mb-4 leading-tight-sm mt-[38px] max-md:mt-[21px] max-sm:mt-[15px] max-xxs:mt-2'>
            <span className='text-5xl tracking-[-1.75px] max-xl:text-7xl max-md:text-xl max-sm:text-md max-xxs:text-xs'>{cardsNumber}</span>
            <sup className='text-[48.4px] relative top-[-0.75em] max-lg:text-[39.6px] max-md:text-[30.8px] max-sm:text-[22px] max-xxs:text-[17.6px]'>{cardsPlus}</sup>
          </p>
          <p className="text-[21px] leading-relaxed-lg mt-11 tracking-normal font-AlmiregoRegular max-md:text-small  max-xs:text-x-small">  
          {cardsText}
          </p>
        </div>
      </div>
      
      )} */}
    
    </>
  )
}
