/* eslint-disable */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import uniqid from 'uniqid'

import '../../all-style/main.scss'
import { Trail } from '../shared/AnimateLogos'
import AnimateLogos from '../shared/AnimateLogos'

const Main = () => {
  const fname = ['H', 'A', 'N', 'I', 'F', 'A']
  const lname = ['A', 'H', 'M', 'A', 'D', 'O', 'V']

  return (
    <>
      <div id='main'>
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

        <div className='developer'>
          <span className='soft'>SOFTWARE</span>
          <span className='dev'>DEVELOPER</span>
        </div>

        <div className='icongram'>
          <span style={{ cursor: 'pointer' }}>
            <a href='https://github.com/hanif101' target='_blank' rel='noreferrer'>
              <img
                src='https://icongr.am/octicons/mark-github.svg?size=40&color=ffffff'
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
        </div>
      </div>
    </>
  )
}

export default Main
