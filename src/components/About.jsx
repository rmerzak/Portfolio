import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motions'
import SectionWrapper from '../hoc/SectionWrapper'
const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I am a design and development engineer with a state diploma in computer science. I am passionate about software development and new technologies.
    I am constantly on the lookout for new opportunities to expand my knowledge and contribute to the field of computer science by working on projects related to the development, maintenance, and enhancement of information systems.
    I have the ability to analyze, design, and develop information systems while maintaining a high level of customer satisfaction.
    <br /> My specialties include: C++, Java, Spring Boot, JavaScript, ReactJs, Angular and Docker.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {
        services.map((service, index)=>(
          <ServiceCard key={services.title} index={index} {...service}/>
        ))
      }

    </div>
    </>
  )
}

export default SectionWrapper(About,"about")