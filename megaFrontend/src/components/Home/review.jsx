import React from 'react'
import { useState } from 'react'
function review() {
    const [reviews,setReviews] = useState([])

  return (
    <div className='flex flex-col gap-5 items-center mt-20'>
        <div className='text-3xl font-bold text-white tracking-[2px] leading-3' style={{
            textShadow:"1.5px 1px white"
        }}>
            Review From Other Learners
        </div>
        <div className='flex flex-row w-[80%] gap-2 mx-auto'>

        </div>
    </div>
  )
}

export default review