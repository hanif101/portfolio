/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import uniqid from 'uniqid'
import { useInView } from 'react-intersection-observer'

import '../../all-style/main.scss'
import { Trail } from '../shared/AnimateLogos'
import AnimateIcons from '../shared/AnimateIcons'
import ScrollDown from '../shared/ScrollDown'
import { icons } from '../shared/Logos'

const Main = () => {
  const fname = ['H', 'A', 'N', 'I', 'F', 'A']
  const lname = ['A', 'H', 'M', 'A', 'D', 'O', 'V']

  const { ref, inView } = useInView({
    threshold: 0
  })

  // const scrollVariants = {
  //   visible: { opacity: 1 },
  //   hidden: {
  //     opacity: 0
  //   }
  // }

  const divVariants = {
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
    hidden: {
      opacity: 0
    }
  }

  const devVariants = {
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
    hidden: {
      opacity: 0
    }
  }

  const iconVariants = {
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
    hidden: {
      opacity: 0
    }
  }

  return (
    <>
      <div className='main-header'>
      <div className='d-flex fname'>
          <Trail>
            {fname.map((sik, index) => (
              <div className='d-flex' key={index}>
                {sik}
              </div>
            ))}
          </Trail>
        </div>

          
        <div className='d-flex lname'>
          <Trail>
            {lname.map((sikko, index) => (
              <div className='d-flex' key={index}>
                {sikko}
              </div>
            ))}
          </Trail>
        </div>
      </div>


        <div  className='main-body'>
          <motion.div
            variants={devVariants}
            initial='hidden'
            animate='visible'
            className='developer'
          >
            <div className='soft'>SOFTWARE</div>
            <div className='dev'>DEVELOPER</div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial='hidden'
            animate='visible'
            className='icongram'
          >
            <AnimateIcons icons={icons} />
          </motion.div>
        </div>

    </>
  )
}

export default Main

/* 

        <span className='d-flex me-4'>
          <Trail>
            {fname.map((sik, index) => (
              <div className='d-flex' key={index}>
                {sik}
              </div>
            ))}
          </Trail>
        </span>

            

        <span className='d-flex ms-4'>
          <Trail>
            {lname.map((sikko, index) => (
              <div className='d-flex' key={index}>
                {sikko}
              </div>
            ))}
          </Trail>
        </span>

*/
