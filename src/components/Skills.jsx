import React from 'react'
import coohom from '../assets/coohom.png';
import auto from '../assets/autocad.png';
import ds from '../assets/3ds.png';
import sketch from '../assets/schtUp.png';



import {motion} from 'framer-motion';


const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})


const Skills = () => {
  return <div id="skill" className='border-b border-neutral-800 pt-4 pb-15'>
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className='my-20 text-center text-4xl' >Skills</motion.h1>
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    
    className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img src={coohom} alt="" width={70}/>
        <p className='text-center pt-1.5  text-blue-400'>coohom</p>
      </motion.div>

      <motion.div
      variants={iconVariants(3.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img src={auto} alt="" width={70}/>
        <p className='text-center pt-1.5 text-red-800'>Autocad</p>
      </motion.div>
      <motion.div
      variants={iconVariants(5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img src={ds} alt="" width={70}/>
        <p className='text-center pt-1.5 text-cyan-200'>3Ds Max</p>
      </motion.div>
      <motion.div
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img  className='h-18' src={sketch} alt="" width={70}/>
        <p className='text-center pt-1.5 text-blue-900'>SketchUp</p>
      </motion.div>
      
      
    </motion.div>
    
  </div>
  
  
}

export default Skills