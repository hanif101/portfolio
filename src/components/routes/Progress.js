/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { Timeline } from '@mantine/core'


import '../../all-style/progress.scss'

const Progress = () => {
  const [state, setState] = useState(-1)
  return (
    <>
      <div>
        <div id='progress-bar'>
          <Timeline active={state} bulletSize={30} lineWidth={1}>
            <Timeline.Item bullet={1} className='zero' />  
            <Timeline.Item bullet={1} className='one' />
            <Timeline.Item bullet={2} className='two' />
            <Timeline.Item bullet={3} className='three'/>
              {/* bulletSize={33} */}
            <Timeline.Item bullet={4} className='four' />
            <Timeline.Item bullet={4} className='five' />

          </Timeline>
        </div>
      </div>
    </>
  )
}

export default Progress
