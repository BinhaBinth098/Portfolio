import React from 'react'
import {motion} from 'framer-motion';
import { EDUCATION } from '../constants';

const Education = () => {
  return <div id="edu" className='border-b border-neutral-800 pt-4 pb-15' >
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className='my-20 text-center text-4xl mt-50'>Education</motion.h1>
    <div>
        {EDUCATION.map((education, index) => (
                  <div 
                  key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        
                       <p className='mb-2 text-1.5xl text-neutral-400'>{education.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                     <h6 className='mb-2 font-semibold'>{education.institute} </h6>
                     <p className='mb-4 text-neutral-400'>{education.role}</p>
                    </motion.div>
                  </div>
                ))}
    </div>

  </div>
  
}

export default Education