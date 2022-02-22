import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/main.scss'

const Main = () => {
  let [contact, setContact] = useState(false)
  let history = useHistory()

  const handleContact = (event) => {
    let prev = !contact
    setContact(prev)
  }

  // const handleExperience = (event) => {
  //   history.push('/experience')
  // }

  const handleProjects = (event) => {
    history.push('/projects')
  }

  const handleAbout = event=> {
    history.push('/about')
  }

  return (
    <>
      <div id='main-wrapper'>
        <div className='name-wrapper'>
          <p>HANIFA</p>
          <p className='lastname'>AHMADOV</p>
        </div>

        <motion.div className='dev'>SOFTWARE DEVELOPER</motion.div>

        <div className='link-wrapper'>
          <ul>
            <motion.li
               onClick={handleAbout}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.07,
                color: '#fff',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut'
                }
              }}
              whileTap={{
                scale: 1.04,
                transition: {
                  duration: 0
                }
              }}
            >
              ABOUT
            </motion.li>
            <motion.li
              onClick={handleProjects}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.07,
                color: '#fff',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut'
                }
              }}
              whileTap={{
                scale: 1.04,
                transition: {
                  duration: 0
                }
              }}
            >
              PROJECTS
            </motion.li>
            {/* <motion.li
              onClick={handleExperience}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.07,
                color: '#fff',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut'
                }
              }}
              whileTap={{
                scale: 1.04,
                transition: {
                  duration: 0
                }
              }}
            >
              EXPERIENCE
            </motion.li> */}

            <motion.a
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.07,
                color: '#fff',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut'
                }
              }}
              whileTap={{
                scale: 1.04,
                transition: {
                  duration: 0
                }
              }}
              href='https://docs.google.com/document/d/1F_N9WV3cv4secb4GGPvb2OimgAqubiEs0S6iMcQJNsw/edit?usp=sharing'
              target='_blank '
              rel='noreferrer'
            >
              RESUME
            </motion.a>

            <motion.li
              onClick={handleContact}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.07,
                color: '#fff',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut'
                }
              }}
              whileTap={{
                scale: 1.04,
                transition: {
                  duration: 0
                }
              }}
            >
              CONTACT
            </motion.li>
          </ul>
        </div>

        <AnimatePresence>
          {contact && (
            <motion.div
              className='icongram'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              exit={{ opacity: 0, transition: { ease: 'easeInOut' } }}
            >
              <span>
                <a href='https://github.com/hanif101' target='_blank' rel='noreferrer'>
                  <img
                    src='https://icongr.am/octicons/mark-github.svg?size=31&color=b3b3b3'
                    alt='github'
                  />
                </a>
              </span>
              <span>
                <img src='https://icongr.am/material/gmail.svg?size=38&color=cfcfcf' alt='email' />
              </span>
              <span>
                <a
                  href='https://www.linkedin.com/in/hanifa-ahmadov/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='https://icongr.am/material/linkedin.svg?size=37&color=cfcfcf '
                    alt='linkedin'
                  />
                </a>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Main
