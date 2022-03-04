/* eslint-disable */
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/skills.scss'
import AnimateLogos from '../shared/AnimateLogos'
import Tooltips from '../shared/Tooltips'
import { logos } from '../shared/Logos'
import AnimateText from '../shared/AnimateText'

const Skills = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false
  })

  const textVariants = {
    visible: { opacity: 1, transition: {duration: 0.7 } },
    hidden: {
      opacity: 0
    }
  }

  const logosVariants = {
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    hidden: {
      opacity: 0
    }
  }

  // const skills = ['T', 'E', 'C', 'H', 'N', 'O', 'L', 'O', 'G', 'I', 'E', 'S']
  const skills = ['S', 'K', 'I', 'L', 'L', 'S']
  return (
    <div>
      <div id='skills'>
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          ref={ref}
          id='animate-text'
        >
          <AnimateText text={skills} />
        </motion.div>

        <Tooltips />

        <motion.div 
          animate={inView ? 'visible' : 'hidden'}
          variants={logosVariants}
          ref={ref}
          className='body'>
          <AnimateLogos logos={logos} />
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
