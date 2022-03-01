/* eslint-disable */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/main.scss'

const Main = () => {
  return (
    <>
      <div id='main'>
        <div className='name-wrapper'>
          <p>
            <span className='fname'>HANIFA</span>
            <span className='lname'>AHMADOV</span>
          </p>
        </div>

        <div className='developer'>
          <span className='soft'>SOFTWARE</span>
          <span className='dev'>DEVELOPER</span>
        </div>

        <div className='icongram'>
          <span style={{cursor: 'pointer'}}>
            <a href='https://github.com/hanif101' target='_blank' rel='noreferrer'>
              <img
                src='https://icongr.am/octicons/mark-github.svg?size=31&color=ffffff'
                alt='github'
              />
            </a>
          </span>
          <span>
            <a href='https://www.linkedin.com/in/hanifa-ahmadov/' target='_blank' rel='noreferrer'>
              <img
                src='https://icongr.am/material/linkedin.svg?size=38&color=ffffff'
                alt='linkedin'
              />
            </a>
          </span>
          <span>
            <img src='https://icongr.am/material/gmail.svg?size=38&color=ffffff' alt='email' />
          </span>

          <span>
            <a
              href='https://drive.google.com/file/d/1ngRvnIPjOpJzip4W_2S2Q_phP394umSf/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://icongr.am/material/file-pdf.svg?size=36&color=ffffff'
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
