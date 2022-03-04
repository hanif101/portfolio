/* eslint-disable */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/openstore.scss'

function OpenStore() {
  return (
    <>
      <div id='open-store'>
        <div className='open-store-header'>
          <span>OPEN</span>
          <span>STORE</span>
        </div>

        <div className='open-store-body'>
          <p>
            Application offers users to list their product for sale. Users are able to do CRUD apis
            to the server and see realtime updates. App has been inspired by offer apps and built
            using React and React Routing, Rest APIs, and Framer-Motion library for smooth dropdowns
            in the client-side. ExpressJS, Node JS and MongoDB ATLASS +Mongoose have been used on
            the server side. Planning to use Socket.IO to have activation of relationship between
            seller and buyers.
          </p>

          <div className='d-flex mt-5 me-5 justify-content-center align-item-center'>
            <div className='col-2 me-4'>
              <motion.a
                whileHover={{
                  scale: 1.08,
                  color: '#fff',
                  transition: {
                    duration: 0.4,
                    ease: 'easeInOut'
                  }
                }}
                whileTap={{
                  scale: 1.05,
                  transition: {
                    duration: 0
                  }
                }}
                href='https://hanif101.github.io/open-store/'
                target='_blank'
                className='btn btn-secondary p-1 px-3'
                type='button'
                style={{ letterSpacing: '3px' }}
              >
                Live
              </motion.a>
            </div>

            <div className='col-1'>
              <motion.a
                whileHover={{
                  scale: 1.08,
                  color: '#fff',
                  transition: {
                    duration: 0.4,
                    ease: 'easeInOut'
                  }
                }}
                whileTap={{
                  scale: 1.05,
                  transition: {
                    duration: 0
                  }
                }}
                href='https://github.com/hanif101/open-store'
                target='_blank'
                className='btn btn-secondary p-1 px-3'
                type='button'
                style={{ letterSpacing: '2px' }}
              >
                Github
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OpenStore
