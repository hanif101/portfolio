/* eslint-disable */
import React, { Fragment, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { useHistory } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { Timeline, Item } from '@mantine/core'

import '../../all-style/projects.scss'
import openstore_img from '../../images/openstore.png'
import tictactoe_img from '../../images/tictactoe.png'
import ouichat_img from '../../images/ouichat.png'
import placefinder_img from '../../images/placefinder.png'
import Progress from './Progress'
import OpenStore from '../shared/OpenStore'
import OuiChat from '../shared/OuiChat'
import PlaceFinder from '../shared/PlaceFinder'
import TicTacToe from '../shared/TicTacToe'

const Projects = () => {
  const [state, setState] = useState(false)
  const [tictactoe, setTictactoe] = useState(false)
  const [placefinder, setPlacefinder] = useState(false)
  const [ouichat, setOuichat] = useState(false)
  let history = useHistory()

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false
  })

  const spanVariants = {
    visible: { opacity: 1, y: -90, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0
    }
  }

  return (
    <Fragment>
      <motion.div id='projects' ref={ref}>
        <div id='cover'></div>
        <motion.span
          className='header-span'
          animate={inView ? 'visible' : 'hidden'}
          variants={spanVariants}
        >
          PROJECTS
        </motion.span>

        <motion.div className='body'>

          {/* Place Finder */}
          <div id='os-wrapper-div'>
            <div className='os-text'>
              <OpenStore />
            </div>
            <div className='os-number'>1</div>
            <div className='os-img'>
              <img src={openstore_img} />
            </div>
          </div>

          {/* Oui Chat */}
          <div id='ou-wrapper-div'>
            <div className='ou-img'>
              <img src={ouichat_img} />
            </div>
            <div className='ou-number'>2</div>
            <div className='ou-text'>
              <OuiChat />
            </div>
          </div>


          {/* Open Store */}
          <div id='pf-wrapper-div'>
            <div className='pf-text'>
              <PlaceFinder />
            </div>
            <div className='pf-number'>3</div>
            <div className='pf-img'>
              <img src={placefinder_img} />
            </div>
          </div>


          {/* Tic Tac Toe*/}
          <div id='ttt-wrapper-div'>
            <div className='ttt-img'>
              <img src={tictactoe_img} />
            </div>
            <div className='ttt-number'>4</div>
            <div className='ttt-text'>
              <TicTacToe />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  )
}

export default Projects
