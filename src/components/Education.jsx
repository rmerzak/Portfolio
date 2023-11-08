import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { educations } from '../constants'
import { fadeIn,textVariant } from '../utils/motions'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import SectionWrapper from '../hoc/SectionWrapper'
const EducationCard=({education}) => (
    <VerticalTimelineElement contentStyle={{background: '#1d1836', color: '#fff'}} contentArrowStyle={{borderRight: '7px solid #232631'}} date={education.date} iconStyle={{background: education.iconBg}} icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={education.icon} alt={education.school_name} className="w-[90%] h-[90%] object-contain" />
        </div>}>
          <div>
            <h3 className='text-white text-[18px] font-bold'>{education.title}</h3>
            <p className='text-secondary text-[16px] ' style={{margin:0}}>{education.school_name}</p>
          </div>
        </VerticalTimelineElement>
)
const Education = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Educational Background</p>
    <h2 className={styles.heroHeadText}>Academics.</h2>
  </motion.div>
  <div className='mt-20 flex flex-col'>
  <VerticalTimeline>
        {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
  </div>
  </> 
  )
}

export default SectionWrapper(Education,"education")