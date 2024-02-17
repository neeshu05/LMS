import React from 'react'
import { useState } from 'react'
import CTAbutton from './button'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
function Template() {   
    const ACCOUNT_TYPE = {
        STUDENT: "Student",
        INSTRUCTOR: "Instructor",
        ADMIN: "Admin",
      }
 // student or instructor
 const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

 const [formData, setFormData] = useState({
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
 })

 const [showPassword, setShowPassword] = useState(false)
 const [showConfirmPassword, setShowConfirmPassword] = useState(false)

 const { firstName, lastName, email, password, confirmPassword } = formData

 // Handle input fields, when some value changes
 const handleOnChange = (e) => {
   setFormData((prevData) => ({
     ...prevData,
     [e.target.name]: e.target.value,
   }))
 }

 // Handle Form Submission
 const handleOnSubmit = (e) => {
   e.preventDefault()

   if (password !== confirmPassword) {
     toast.error("Passwords Do Not Match")
     return
   }
   const signupData = {
     ...formData,
     accountType,
   }


   setFormData({
     firstName: "",
     lastName: "",
     email: "",
     password: "",
     confirmPassword: "",
   })
   setAccountType(ACCOUNT_TYPE.STUDENT)
 }

 // data to pass to Tab component
 const tabData = [
   {
     id: 1,
     tabName: "Student",
     type: ACCOUNT_TYPE.STUDENT,
   },
   {
     id: 2,
     tabName: "Instructor",
     type: ACCOUNT_TYPE.INSTRUCTOR,
   },
 ]

  return (
    <div className='flex flex-col'>
        <div>
            Join the millions learning tp code with StudyNotion for free
        </div>
        <div>
            Build skills for today,tommorow, and beyond.
            <span>Education to future-proof your career</span>
        </div>  

        <div>
        <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-4 w-full">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <div className='w-[90%]'>
            <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
        </div>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
        </div>      
    </div>
  )
}

export default Template