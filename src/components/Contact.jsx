import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'

const Contact = () => {
  return <div id="contact" className='border-b border-neutral-900 pt-20 pb-15' >
    <motion.h1 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1}}
    className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0,x:100}}
    transition={{duration:1.5}}
    className="text-center tracking-tighter">
        <p className='my-4 '>{CONTACT.address}</p>
        {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
        <a href='#' className='border-b'>{CONTACT.email}</a>
    </motion.div>
  </div>
  
}

export default Contact