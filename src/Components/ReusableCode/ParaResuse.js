import React from 'react'

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
    buildFutureClasses,
    paraContainer,
}) {    
  return (
    <div>
      <p className={`font-AlmiregoDisplayRegular text-xl leading-relaxed-md max-xl:text-lg max-lg:text-sm max-sm:text-base max-xxs:text-sm-base ${marginClasses}`}>
      {text1}
      </p>

      {showParagraph && (
        <div className={`${paraContainer} ${distinctiveClasses} ${discoverClasses} ${stickyCardsClasses} ${buildFutureClasses}
        ${aboutHeroParaClasses}`}>
          <div className='w-1/2 max-md:w-0'></div>
          <div className='w-1/2 font-AlmiregoRegular max-md:w-full'>
            <p className={`home-para ${distinctiveParaAnima} ${discoverParaAnima} ${stickyCardsPadding}`}>
              {text2}
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
    </div>
  )
}
