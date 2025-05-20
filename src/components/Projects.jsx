
import { PROJECTS } from '../constants'
import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project10 from '../assets/projects/project-10.jpg';
import project11 from '../assets/projects/project-11.jpg';
import project12 from '../assets/projects/project-12.jpg';
import project6 from '../assets/projects/project-6.jpg';
import project14 from '../assets/projects/project-14.jpg';
import project15 from '../assets/projects/project-15.jpg';
import project16 from '../assets/projects/project-16.jpg';
import project17 from '../assets/projects/project-17.jpg';
import project9 from '../assets/projects/project-9.jpg';
import { motion } from 'framer-motion';



const Projects = () => {
    

  return <div id="pro" className='border-b border-neutral-900 pt-4 pb-15'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:1}}
      className='my-20 text-center text-4xl mb-15'>PROJECTS</motion.h1> 

    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1}}
    className='font-thin text-2xl px-4 py-8 sm:px-6 md:px-8'>
    <p>Modern Interior</p>
    </motion.div>    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8">
            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.2}}
            src={project6} alt='' 
            className='rounded-2xl shadow-xl min-h-[50px] duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            src={project2} alt='' className='rounded-2xl shadow-xl h-[309px] duration-300  transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.9}}
            src={project1} alt='' className=' rounded-2xl shadow-xl min-h-[50px] duration-300  transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.7}}
            src={project9} alt='' className=' rounded-2xl shadow-xl h-[309px] duration-300  transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>
        </div>
    {/* </div>  */}

        
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1}}
    className='font-thin text-2xl px-4 py-8 sm:px-6 md:px-8'>
    <p>Contemporary Interior</p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-4 sm:px-6 md:px-8">

        <motion.img 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.2}}
        src={project10} alt='' className=' rounded-2xl shadow-xl h-[310px]  duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

        <motion.img 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        src={project11} alt='' className=' rounded-2xl shadow-xl min-h-[50px]  duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

        <motion.img 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.9}}
        src={project12} alt='' className=' rounded-2xl shadow-xl min-h-[50px]  duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

        {/* <motion.img 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.7}}
        src={project13} alt='' className=' rounded-2xl shadow-xl h-[230px] transition-all duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/> */}
    </div>
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1}}
    className='font-thin text-2xl px-4 py-8 sm:px-6 md:px-8'>
    <p>Exterior Design</p>
    </motion.div>    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8">
        {/* <div className='columns-1 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not (:first-child)]:mt-5 lg:[&>img:not (:first-child)]:mt-8 gap-4 '> */}

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.2}}
            src={project14} alt='' 
            className=' rounded-2xl shadow-xl h-[309px] duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            src={project15} alt='' className=' rounded-2xl shadow-xl h-[309px] w-full  duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.9}}
            src={project16} alt='' className=' rounded-2xl shadow-xl h-[309px] duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>

            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.7}}
            src={project17} alt='' className=' rounded-2xl shadow-xl h-[309px] duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer hover:shadow-[#3f3f3f]'/>
        </div>

    </div>
  
}

export default Projects