import React from 'react'
import instructor from '../../assets/Images/instructor.png'
import { FaArrowRight } from "react-icons/fa";
import Button from '../helperComponent/button';
function Instructor() {
  return (
    <div className='flex flex-row mx-auto w-[80%] mt-12 pt-8 gap-20'>

        <div className='w-[70%] '>
            <img src = {instructor} className = 'w-[100%] h-fit shadow-[-15px_-15px_rgba(255,255,255)]' alt='' />
        </div>
        <div className='flex flex-col justify-center gap-5'>
            <div className='text-4xl text-white font-bold text-uppercase'>
                Become An  <br/>
                <div className='font-bold text-5xl text-richblue-100' style={{
                    textShadow: '2px 2px lightblue'
                }}>Instructor</div>
            </div>
            <div className='text-[18px] text-richblack-200'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </div>
            <div className='w-fit flex flex-row gap-1 mt-8'>
                <Button active = {true}>
                    <div className='flex gap-2 items-center'>
                    Become an Instructor 
                    <FaArrowRight></FaArrowRight>
                    </div>
                </Button>
                
            </div>
        </div>
    </div>
  )
}

export default Instructor