/* eslint-disable */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/ouichat.scss'

function OuiChat() {
  return (
    <>
     <div id ='oui-chat'>
              <div className='oui-chat-header'>
                <span>OUI</span>
                <span>CHAT</span>
              </div>

              <div className='oui-chat-body'>
                <p>
                This project was a team project that I have worked on with my 4 other classmates.
                  Application allows users to process simple user functionality like a signup
                  or create an account. Project inspired any Slack application. Users are able to join
                  rooms and share ideas. Users are also able to create rooms and send invitations
                  to others. I had done user functionalities in the backend Express
                  js and front end design routes React library.
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
                      href='https://ga-git-good.github.io/chat-app/'
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
                      href='https://github.com/ga-git-good/chat-app'
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

export default OuiChat
