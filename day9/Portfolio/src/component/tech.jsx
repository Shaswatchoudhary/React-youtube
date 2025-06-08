import React from 'react'
import {FaReact} from 'react-icons/fa'
import {RiNodejsLine} from 'react-icons/ri'
import {SiMongodb, SiExpress} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io5'
import {motion} from 'framer-motion'

const IconVariant = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: duration || 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Tech = () => {
  return (
    <div className="border-b border-purple-500/10 pb-24">
      <motion.h1 
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y:-100}}  
        transition={{duration:0.8, delay:0.5}} 
        className='my-20 text-center text-4xl'>
          Technologies
      </motion.h1>
      
      <div className='flex flex-wrap items-center justify-center gap-8'>
        <motion.div 
          variants={IconVariant(2.5)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg hover:shadow-blue-500/20 transition-all'
        >
          <FaReact className='text-7xl text-blue-500'/>
        </motion.div>
        
        <motion.div 
          variants={IconVariant(2.8)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg hover:shadow-green-500/20 transition-all'
        >
          <RiNodejsLine className='text-7xl text-green-500'/>
        </motion.div>
        
        <motion.div 
          variants={IconVariant(3.2)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg hover:shadow-green-500/20 transition-all'
        >
          <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>
        
        <motion.div 
          variants={IconVariant(2.7)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg hover:shadow-blue-500/20 transition-all'
        >
          <SiExpress className='text-7xl text-blue-700'/>
        </motion.div>
        
        <motion.div 
          variants={IconVariant(3)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg hover:shadow-yellow-500/20 transition-all'
        >
          <IoLogoJavascript className='text-7xl text-yellow-500'/>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech