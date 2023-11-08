import React from 'react'
import { useState , useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motions'
const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({name:"",email:"",message:""})
  const [Loading,setLoading] = useState(false)
  // const handelChange = (e) = {e}
  // const handelSubmit = (e) = {e}
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.heroHeadText}>Contact</h3>
        <form ref={formRef} /*onSubmit={handelSubmit}*/ className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" name='name' value={form.name} /*onChange={handelChange} */placeholder='Chnoo smiitek' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} /*onChange={handelChange} */placeholder='Gmail oula Outlook' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea type="text" rows='7' name='message' value={form.message} /*onChange={handelChange} */placeholder='Merhba ach 7eeb Lkhater' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none font-bold text-white w-fit shadow-md shadow-primary rouded-xl '>
            Send </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
<EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')