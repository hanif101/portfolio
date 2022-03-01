/* eslint-disable */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/about.scss'
import avatar from '../../images/meinbus.jpg'

const About = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 1.2, opacity: 0.9 },
    enter: { scale: 1.6, opacity: 1, transition: { delay: 1, duration: 1.5 } },
    exit: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5 }
    }
  }

  const textVariants= {
    initial: { opacity: 0.4, y:-10 },
    enter: { opacity: 1, y: 0, transition: { delay: 1, duration: 1.5 } },
    exit: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5 }
    }
  }

  return (
    <>
      <AnimatePresence>
        <div id='about'>
          <div className='header'>
            <h1>About</h1>
          </div>

          <div className='paragh'>
            <motion.div>
              <motion.img
                variants={thumbnailVariants}
                initial='initial'
                animate='enter'
                exit='exit'
                transition={transition}
                src={avatar}
              />
            </motion.div>

            <motion.div
               variants={textVariants}
               initial='initial'
               animate='enter'
               exit='exit'
               transition={transition}
            >
              <p>
                I am Hanif. I live in Boston, MA but I love to travel and explore. In my spare time,
                you can find me walking, reading, learning new technologies and working on new
                projects for improvement. After a few years of working in the field of events and
                hospitality, I knew it was time for a change. I asked myself how I enjoyed spending
                my time and decided to pursue programming because it's like solving a puzzle. That
                brings me to why you are here. I started self-teaching JavaScript, TypeScript,
                Python in February, then lost my job, due to COVID. This gave me time to learn and
                focus on what I could do to shift my career into the tech field.
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
