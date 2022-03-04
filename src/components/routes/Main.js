/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import uniqid from 'uniqid'
import { useInView } from 'react-intersection-observer'

import '../../all-style/main.scss'
import { Trail } from '../shared/AnimateLogos'
import ScrollDown from '../shared/ScrollDown'

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
    visible: { opacity: 1, transition: { delay: 1.7, duration: 1 } },
    hidden: {
      opacity: 0
    }
  }

  const iconVariants = {
    visible: { opacity: 1, transition: { delay: 2.2, duration: 1 } },
    hidden: {
      opacity: 0
    }
  }



  return (
    <>
      <div className='name-wrapper'>
        {/* <Trail>{fname}</Trail>
          <Trail>{lname}</Trail> */}

        <Trail>
          {fname.map((sik, index) => (
            <div key={index}>{sik}</div>
          ))}
          &nbsp;&nbsp;
          {lname.map((sikko, index) => (
            <div key={index}>{sikko}</div>
          ))}
        </Trail>
      </div>
      <motion.div variants={divVariants} initial='hidden' animate='visible' id='main'>
        <motion.div variants={devVariants} initial='hidden' animate='visible' className='developer'>
          <span className='soft'>SOFTWARE</span>
          <span className='dev'>DEVELOPER</span>
        </motion.div>

        <motion.div variants={iconVariants} initial='hidden' animate='visible' className='icongram'>
          <span style={{ cursor: 'pointer' }}>
            <a href='https://github.com/hanif101' target='_blank' rel='noreferrer'>
              <img
                src='https://icongr.am/octicons/mark-github.svg?size=37&color=ffffff'
                alt='github'
              />
            </a>
          </span>
          <span>
            <a href='https://www.linkedin.com/in/hanifa-ahmadov/' target='_blank' rel='noreferrer'>
              <img
                src='https://icongr.am/material/linkedin.svg?size=45&color=ffffff'
                alt='linkedin'
              />
            </a>
          </span>
          <span>
            <img src='https://icongr.am/material/gmail.svg?size=45&color=ffffff' alt='email' />
          </span>

          <span>
            <a
              href='https://drive.google.com/file/d/1ngRvnIPjOpJzip4W_2S2Q_phP394umSf/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://icongr.am/material/file-pdf.svg?size=45&color=ffffff'
                alt='linkedin'
              />
            </a>
          </span>
     
        </motion.div>
      </motion.div>
    </>
  )
}

export default Main
