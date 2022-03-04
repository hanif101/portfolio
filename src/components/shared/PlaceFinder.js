/* eslint-disable */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/placefinder.scss'

function PlaceFinder() {
  return (
    <>
      <div id='place-finder'>
        <div className='place-finder-header'>
          <span>PLACE</span>
          <span>FINDER</span>
        </div>

        <div className='place-finder-body'>
          <p>
          The application allows users to find places around. Users are able to look up places nearby
            just entering a valid zip code. Application search engine gets data from Yelp public API.
            User sign up functionalities also saving users favorites places and comments or see
            others comments are also provided. At the client side, semantic HTML5, JQuery,CSS3 and Bootstrap libraries are used. Serverside Express Js,
            MongoDB ATLAS & Mongoose, JWT || Passport npm packages
            for user authentication.
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

export default PlaceFinder
