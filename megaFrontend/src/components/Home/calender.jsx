import React from 'react'
import know_your_progress from  '../../assets/Images/Know_your_progress.png'
import plan_your_lessons from  '../../assets/Images/plan_your_lessons.png'
import compare_with_others from  '../../assets/Images/compare_with_others.png'
import Button from '../helperComponent/button'

function calender() {
  return (
    <div className='flex flex-col items-center'>
        <div className='text-4xl font-semibold text-center hover:text-richblack-600  transition-all duration-200 hover:text-[40px] hover:tracking-4'>
          Your Swiss Knife For
        </div>
        <div className='text-center mx-auto w-[70%] mt-4 font-30 text-richblack-600 text-base'>
          Using spin making learning multiple languge easy.with 20+ languages realistice voice-over, progress tracking, custom schedulle and more.
        </div>
        <div className='flex flex-row w-[70%] mx-auto relative items-center justify-center'>
            <img src={know_your_progress} alt='calender' className='object-contain lg:-mr-32'></img>
            <img src={compare_with_others} alt='calender' className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'></img>
            <img src={plan_your_lessons} alt='calender' className='object-contain lg:-ml-36 lg:-mt-5 -mt-16'></img>
        </div>

        <div className='item-center w-fit mt-12 mb-12'>
          <Button active = {true} linkto='/signup'>Learn More</Button>
        </div>
    </div>
  )
}

export default calender