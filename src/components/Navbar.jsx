import React, { useState } from 'react'
import logo from '../assets/mlogo.png';




const Navbar = () => {

  // 



  return (

<nav className='w-full md:h-20 sm:h-12 h-15 flex items-center justify-between py-6 md:px-12 sm:px-6 fixed top-0
 z-50'>

  <div className='flex flex-shrink-0 sm:gap-x-4 gap-x-2 items-center lg:px-0'>
        {/* <img className=' w-35' src={logo} alt="logo" />     */}
  </div>
    
    <div className='m-8 flex items-center justify-center gap-4 text-1xl font-thin lg:px-24 xl:px-30'>

        <ul className='hidden md:flex space-x-4 '>
          <li><a href='#home' 
          className='btn btn-sm btn-ghost'>Home</a></li>
          <li><a href='#about' className='btn btn-sm btn-ghost'>About</a></li>
          <li><a href='#edu' className='btn btn-sm btn-ghost'>Education</a></li>
          <li><a href='#skill' className='btn btn-sm btn-ghost'>Skills</a></li>
          <li><a href='#exp' className='btn btn-sm btn-ghost'>Experience</a></li>
          <li><a href='#pro' className='btn btn-sm btn-ghost'>Projects</a></li>
          <li><a href='#contact' className='btn btn-sm btn-ghost'>Contact</a></li>
        </ul>
               
    </div>


  </nav>
  )
}

export default Navbar