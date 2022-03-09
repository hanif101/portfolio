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
    visible: { opacity: 1, y: -90, transition: {duration:1} },
    hidden: {
      opacity: 0
    }
  }

  const openstoreVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0.3
    }
  }

  const openstoreimgVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: {
      opacity: 0
    }
  }

  return (
    <Fragment>
      <div id='projects'>
        <div id='cover'></div>
        <motion.span
          className='header-span'
          animate={inView ? 'visible' : 'hidden'}
          variants={spanVariants}
          ref={ref}
        >
          PROJECTS
        </motion.span>

        <div className='body'>
          <div id='left'>
            <div>
              <OpenStore />
            </div>

            <div className='oui-chat-image-div'>
              <img src={ouichat_img} />
            </div>

            <div>
              <PlaceFinder />
            </div>

            <div className='tictactoe-image-div'>
              <img src={tictactoe_img} />
            </div>
          </div>

          <div>
            <Progress />
          </div>

          <div id='right'>
            <div className='open-store-image-div'>
              <img src={openstore_img} />
            </div>

            <OuiChat />

            <div className='place-finder-image-div'>
              <img src={placefinder_img} />
            </div>

            <TicTacToe />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Projects
