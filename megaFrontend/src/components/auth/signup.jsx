import React from 'react'
import Template from '../helperComponent/Template'
import signupImage from '../../assets/Images/signup.webp'

function signup() {
  return (
    <div className='flex flex-row width-[80%] mx-auto justify-between gap-10'>
    <div>
      <Template />
    </div>
    <div>
      <img src= {signupImage} />
    </div>
    </div>
  )
}

export default signup