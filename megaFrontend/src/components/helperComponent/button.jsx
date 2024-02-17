import React from 'react'
import { Link } from 'react-router-dom'

function button({children,active, linkto}) {
  return (
    <div>
        <Link to={linkto}>

            <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold ${active? "bg-yellow-50 text-black" : "bg-richblack-600"} shadow-[2px_2px_rgba(104,104,104)] hover:text-[18px] transition-all duration-200`}>
                {children}
            </div>
        </Link>
    </div>
  )
}

export default button