import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilepic from "../assets/mishab.jpg"
import {delay, motion} from "framer-motion"


const container = (delay) => ({
  hidden:{x: -100 , opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay}
  }
})

const Hero = () => {
  return <div id="home" className='w-full h-screen flex flex-col justify-center items-center border-b border-neutral-900 pd-4 lg:mb-35' >
    <div className='flex flex-wrap mt-20 max-sm:auto-cols-auto '>
        <div className='w-full lg:w-1/2 '>
           <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className= 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl'>
              Hello !
            </motion.h1>
             <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-4xl font-thin tracking-tight lg:mt-5 text-center sm:text-left 
              lg:text-8xl'>I'm<span className='ps-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
             bg-clip-text text-transparent'>Muhammed Mishab</span></motion.h1>
             <motion.h1 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='text-3xl mb-4 text-center sm:text-left'
            >An 
             <span className='bg-clip-text text-3xl tracking-tight  ps-2 text-center sm:text-center'>
                Interior Designer</span></motion.h1> 
                
           </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img 
                 initial={{x:100,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{duration:1,delay:1.2}}
                className='rounded-2xl'
                src={profilepic} alt="" />
                
            </div>
        </div>
    </div>
  </div>
}

export default Hero