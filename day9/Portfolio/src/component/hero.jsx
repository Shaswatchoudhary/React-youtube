import React from 'react'
import {HERO_CONTENT} from '../constants'
import DP from '../assets/DP.jpg'
import { motion } from "motion/react"

const Container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {x: 0, opacity: 1, transition: {delay: delay}},
})




const Hero = () => {
  return (
    <>
      <div className="border-b border-purple-500/10 pb-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
        <motion.h1 
        variants={Container(0.2)}
        initial="hidden"
        animate="visible"
        className='text-6xl font-bold pb-16 tracking-tight lg:mt-16 lg:text-6xl'>Shaswat Choudhary</motion.h1>
        <motion.span 
        variants={Container(0.7)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> Full Stack Developer</motion.span>
        <motion.p variants={Container(1.2)}
        initial="hidden"
        animate="visible" className="my-2 max-w-xl py-6 font-medium tracking-tight">{HERO_CONTENT}</motion.p>
        </div>
        </div>
    <div className="w-full lg:w-1/2 lg:p-8">
    <div className="flex justify-center ">
      <motion.img whileInView={{opacity:1 , x:0}} initial={{opacity:0 , x:-100}}  transition={{duration:1}} src={DP} alt="" className='rounded-full' />
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero