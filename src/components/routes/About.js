/* eslint-disable */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { useInView } from 'react-intersection-observer'

import '../../all-style/about.scss'
import avatar from '../../images/meinbus.jpg'
import ScrollDown from '../shared/ScrollDown'

const About = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false
  })

  const imgVariants = {
    visible: { opacity: 10, scale: 1.5, y: 10, x: 0 },
    hidden: {
      opacity: 0.1,
      scale: 1.2,
      x: -10
    }
  }

  const textVariants = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0
    }
  }

  const aboutVariants = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 2, ease: 'easeOut' } },
    hidden: {
      opacity: 0,
      x: 100
    }
  }

  const scrollVariants = {
    visible: { opacity: 1, transition: { delay: 2.2, duration: 2 } },
    hidden: {
      opacity: 0
    }
  }

  return (
    <>
      <AnimatePresence>
        <div id='about'>

          <motion.div variants={scrollVariants} initial='hidden' animate='visible' id='scrolldown'>
            <ScrollDown />
          </motion.div>

          <motion.div
            className='header'
            animate={inView ? 'visible' : 'hidden'}
            variants={aboutVariants}
            ref={ref}
          >
            <h1>ABOUT</h1>
          </motion.div>

          <div className='paragh'>
            <motion.div>
              <motion.img
                animate={inView ? 'visible' : 'hidden'}
                variants={imgVariants}
                transition={{ duration: 2, ease: 'easeOut' }}
                ref={ref}
                src={avatar}
              />
            </motion.div>

            <motion.div
              variants={textVariants}
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 1, ease: 'easeOut' }}
              ref={ref}
            >
              <p>
                <span className='first-letter'>I</span> live in Boston, MA but I love to travel and
                explore. In my spare time, you can find me walking, reading, learning new
                technologies and working on new projects for improvement. After a few years of
                working in the field of events and hospitality, I knew it was time for a change. I
                asked myself how I enjoyed spending my time and decided to pursue programming
                because it's like solving a puzzle. That brings me to why you are here. I started
                self-teaching JavaScript, TypeScript, Python in February, then lost my job, due to
                COVID. This gave me time to learn and focus on what I could do to shift my career
                into the tech field.
              </p>
              <p>
                I graduated from General Assembly school as a Software Developer in Feb 2022. During
                12 weeks, 500 hours commitment in GA full-stack software immersive class, I have
                built four projects by getting proficiency in the most popular technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default About
