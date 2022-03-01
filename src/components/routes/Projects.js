/* eslint-disable */
import React, { Fragment, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { useHistory } from 'react-router-dom'

import '../../all-style/projects.scss'
import tictactoe_img from '../../images/tictactoe.png'
import ouichat_img from '../../images/ouichat.png'
import placefinder_img from '../../images/placefinder.png'
import TicTacToe from '../shared/TicTacToe'
import PlaceFinder from '../shared/PlaceFinder'
import OuiChat from '../shared/OuiChat'

const Projects = () => {
  const [state, setState] = useState(false)
  const [tictactoe, setTictactoe] = useState(false)
  const [placefinder, setPlacefinder] = useState(false)
  const [ouichat, setOuichat] = useState(false)
  let history = useHistory()

  const handleModalTicTacToe = () => {
    return <>{console.log('hello')}</>
  }

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
        transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        exit={{ x: '-100vw', transition: { duration: 0.7, ease: 'easeInOut' } }}
      >
        <motion.img src='https://icongr.am/jam/arrow-left.svg?size=40&color=9e9e9e' alt='' />
        <motion.span>home</motion.span>
      </motion.span>

      <motion.div
        id='wrapper'
        initial={{ opacity: 0, y: '-100' }}
        animate={{ opacity: 1, y: '100' }}
        transition={{ delay: 1, duration: 0.3, ease: 'easeInOut' }}
        exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.7, ease: 'easeInOut' } }}
      >
        <div className='header'>
          <h1>Projects</h1>
        </div>

        <div className='body'>
          <>
            <Modal
              opened={ouichat}
              onClose={() => setOuichat(false)}
              transition='fade'
              transitionDuration={600}
              transitiontimingfunction='ease'
              size='70vw'
              centered
            >
              <OuiChat />
            </Modal>

            <Group position='center'>
              <div id='ouichat' onClick={() => setOuichat(true)}>
                <div className='place-finder-header'>
                  <h2>Oui Chat</h2>
                </div>

                <div className='ouichat-body'>
                  <span>
                    <img src={ouichat_img} alt='project3' />
                  </span>
                </div>
              </div>
            </Group>
          </>

          <>
            <Modal
              opened={placefinder}
              onClose={() => setPlacefinder(false)}
              transition='fade'
              transitionDuration={600}
              transitiontimingfunction='ease'
              size='65vw'
              centered
            >
              <PlaceFinder />
            </Modal>

            <Group position='center'>
              <div id='place-finder' onClick={() => setPlacefinder(true)}>
                <div className='place-finder-header'>
                  <h2>Place Finder</h2>
                </div>
                <div className='place-finder-body'>
                  <span>
                    <img src={placefinder_img} alt='project2' />
                  </span>
                </div>
              </div>
            </Group>
          </>

          <>
            <Modal
              opened={tictactoe}
              onClose={() => setTictactoe(false)}
              transition='fade'
              transitionDuration={600}
              transitiontimingfunction='ease'
              size='40rem'
              centered
            >
              <TicTacToe />
            </Modal>

            <Group position='center'>
              <div id='tictactoe' onClick={() => setTictactoe(true)}>
                <div className='tictactoe-header'>
                  <h2>Tic Tac Toe</h2>
                </div>

                <div className='tictactoe-body'>
                  <span>
                    <img
                      style={{ height: '200px', width: '250px' }}
                      src={tictactoe_img}
                      alt='project1'
                    />
                  </span>
                </div>
              </div>
            </Group>
          </>
        </div>
      </motion.div>
    </Fragment>
  )
}

export default Projects
