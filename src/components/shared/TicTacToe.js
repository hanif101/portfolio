/* eslint-disable */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/tictactoe.scss'

function TicTacToe() {
  return (
    <>
      <div id='tictactoe'>
        <div className='tictactoe-header'>
          <span>TIC</span>
          <span>TAC</span>
          <span>TOE</span>
        </div>

        <div className='tictactoe-body'>
          <p>
            The first project I completed at GA was a tic-tac-toe game. The goal for this project
            was to create a functional tic-tac-toe game from scratch using new tools we learned
            before hand. Players are able to start a fresh game, keep track of games, change their
            password, and sign out of the application. Sematic HTML5, CSS3 & Bootstrap and JQuery
            technologoes used.
          </p>

          <div className='d-flex mt-5 me-5 justify-content-center align-item-center'>
            <div className='col-2 live'>
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
                href='https://hanif101.github.io/tic-tac-toe/'
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
                href='https://github.com/hanif101/tic-tac-toe'
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

export default TicTacToe
