import React from 'react'
import DP from '../assets/DP.jpg'
import {ABOUT_TEXT} from '../constants'
import { motion } from "framer-motion";

const Container1 = (delay) => ({
  hidden: {x: -400, opacity: 0},
  visible: {x: 0, opacity: 1, transition: {duration:1 ,delay: delay}},
})



const About = () => {
    return (
<motion.div className="border-b border-purple-500/10 pb-24">            <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}  transition={{duration:0.8, delay:0.5}} className="my-20 text-center text-4xl">About <span className="text-netural-500">Me</span></motion.h1>

           <div className='flex flex-wrap items-center'>
            <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0 , x:-100}}  transition={{duration:1}}className='w-full lg:w-1/2 p-4'>
              <div className="flex justify-center lg:justify-start">
                <img src={DP} alt="Profile" className='rounded-lg max-w-full h-auto' />
              </div>
            </motion.div>
            <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0 , x:100}}  transition={{duration:1}} className='w-full lg:w-1/2 p-4'>
              <p className='my-2 max-w-xl py-4 font-medium tracking-tight text-justify lg:text-left'>{ABOUT_TEXT}</p>
            </motion.div>
           </div>
        </motion.div>
    )
}

export default About