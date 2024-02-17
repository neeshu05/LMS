import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Signup from './components/auth/signup'
function App() {

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App
