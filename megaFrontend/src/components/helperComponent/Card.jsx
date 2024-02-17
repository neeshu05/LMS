import React from 'react'

function Card({cardData , currentCard, handleCard}) {
  return (
    <div className={`flex flex-col gap-10 item-start  px-6 py-6 ${currentCard === cardData.heading ? 'shadow-[6px_6px_yellow] bg-white' : ' bg-richblack-900' } cursor-pointer`} 
    
        onClick={() => handleCard(cardData.heading)}
    >
        <div className={`text-base font-semibold  ${currentCard !== cardData.heading ? 'text-richblack-5' : 'text-richblack-600'}`}>
            {cardData.heading}
        </div>
        <div className={`text-[15px] ${currentCard !== cardData.heading ? 'text-richblack-600' : 'text-richblack-900'}` }>
            {cardData.description}
        </div>
        <div className={`flex flex-row justify-between ${currentCard !== cardData.heading ? 'text-richblack-600' : 'text-richblack-900'}`}>
            <div>
                {cardData.level}
            </div>
            <div>
                {cardData.lessionNumber}
            </div>
        </div>
    </div>
  )
}

export default Card