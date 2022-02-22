/* eslint-disable */
import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import '../../all-style/experience.scss'

const Experience = () => {
  let history = useHistory()

  const handleBackArrow = (event) => {
    history.push('/')
  }

  return (
    <Fragment>
      <motion.span
        id='back-arrow'
        onClick={handleBackArrow}
        initial={{ opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
      >
        <motion.img src='https://icongr.am/jam/arrow-left.svg?size=40&color=9e9e9e' alt='' />
        <motion.span>home</motion.span>
      </motion.span>
      <div id='experience-wrapper'>
        <h1>Experience</h1>

        <div id='tictactoe'></div>
      </div>
    </Fragment>
  )
}

export default Experience
