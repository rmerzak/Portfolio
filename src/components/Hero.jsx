import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {  StarsCanvas, MarsCanvas, JubiterCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-4'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-50 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'> Rabi</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          A software architect and enthusiastic developer<br className='sm:block hidden' /> deeply passionate about emerging technologies. 
          </p>
        </div>
      </div>
          {/* <MarsCanvas /> */}
      <StarsCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div className='w-[3px] h-[20px] bg-secondary rounded-full' initial={{ y: 0 }} animate={{ y: 20 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.6 }} />
          </div></a>
      </div>
    </section>
  )
}

export default Hero