/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { Timeline } from '@mantine/core'
import { useInView } from 'react-intersection-observer'

import '../../all-style/progress.scss'

const Progress = () => {
  const [state, setState] = useState(-1)

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })

  useEffect(() => {
    if (inView) {
      console.log(ref)
    }
  }, [useInView])
  return (
    <>
      <div>
        <div id='progress-bar'>
          <Timeline active={state} bulletSize={30} lineWidth={1}>
            <Timeline.Item bullet={1} className='zero' />
            <Timeline.Item bullet={1} className='one' />
            <Timeline.Item bullet={2} className='two' />
            <Timeline.Item bullet={3} className='three' />
            <Timeline.Item bullet={4} className='four' />
            <Timeline.Item bullet={4} className='five' />
          </Timeline>
        </div>
      </div>
    </>
  )
}

export default Progress
