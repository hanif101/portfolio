/* eslint-disable */
import React from 'react'
import { useHistory } from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/about.scss'

const About = () => {
  let history = useHistory()

  const handleBackArrow = (event) => {
    history.push('/')
  }

  return (
    <>
      <motion.span
        id='back-arrow'
        onClick={handleBackArrow}
        initial={{ opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        exit={{ x: '-100vw', transition: { duration: 0.7, ease: 'easeInOut' } }}
      >
        <motion.img src='https://icongr.am/jam/arrow-left.svg?size=40&color=9e9e9e' alt='' />
        <motion.span>home</motion.span>
      </motion.span>

      <motion.div
        id='about-wrapper'
        initial={{ opacity: 0, y: '-100' }}
        animate={{ opacity: 1, y: '100' }}
        transition={{ delay: 1, duration: 0.3, ease: 'easeInOut' }}
        exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.7, ease: 'easeInOut' } }}
      >
        <h1 className='portfolio'>WHOAMI</h1>
        <hr />
        <div>
          <span>Greetings!</span> <br />
          <p>
            I am Hanif. I live in Boston, MA but I love to travel and explore. In my spare time, you
            can find me walking, reading, learning new technologies and working on new projects for
            improvement. After a few years of working in the field of events and hospitality, I knew
            it was time for a change. I asked myself how I enjoyed spending my time and decided to
            pursue programming because it's like solving a puzzle. That brings me to why you are
            here. I started self-teaching JavaScript, TypeScript, Python in February, then lost my
            job, due to COVID. This gave me time to learn and focus on what I could do to shift my
            career into the tech field.
          </p>
          <p>
            I graduated from General Assembly (GA) school as a Software Developer in Feb 2022.
            During 12 weeks commitment in GA full-stack software immersive class, I have built four
            projects by getting proficiency in the most popular technologies.
          </p>
        </div>

        <div className='technologies'>
          <h1>SKILLS</h1>
          <hr />

          <p className='skills'>
            <span
              class='btn btn-secondary'
              data-toggle='tooltip'
              data-placement='top'
              title='Tooltip on top'
            >
              Tooltip on top
            </span>
            <img src='https://icongr.am/devicon/express-original.svg?size=55&color=ffffff' alt='' />
            <img
              src='https://icongr.am/devicon/mongodb-original-wordmark.svg?size=55&color=ffffff'
              alt=''
            />
            <img
              src='https://icongr.am/devicon/javascript-original.svg?size=50&color=ffffff'
              alt=''
            />
            <img src='https://icongr.am/devicon/bootstrap-plain.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/react-original.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/css3-plain.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/html5-original.svg?size=50&color=000000' alt='' />
            <img
              src='https://icongr.am/simple/socketio.svg?size=50&color=e61919&colored=false'
              alt=''
            />
            <img
              src='https://icongr.am/devicon/npm-original-wordmark.svg?size=70&color=ffffff'
              alt=''
            />
            <img
              src='https://icongr.am/devicon/nodejs-plain-wordmark.svg?size=70&color=ffffff'
              alt=''
            />
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default About
