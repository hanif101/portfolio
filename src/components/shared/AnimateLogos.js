/* eslint-disable */

import React, { useState } from 'react'
import { useSpring, animated, interpolate, config, useTrail } from 'react-spring'
import uniqid from 'uniqid'

import '../../all-style/animateLogo.scss'

export function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 135 },
    opacity: 1,
    x: 1,
    y: 1,

    from: {
      opacity: 0,
      x: 0,
      y: 0
    }
  })

  return (
    <div className='trails-wrapper-div'>
      {trail.map(({ x, y, ...rest }, index) => (
        <animated.div
          key={uniqid()}
          className='trails-text'
          style={{
            ...rest,
            transform: interpolate(
              [
                x.interpolate({
                  range: [0, 0.9, 1],
                  output: [0.5, 1.2, 1]
                }),
                y.interpolate({
                  range: [0, 0.9, 1],
                  output: [1, 0.8, 1]
                })
              ],
              (x, y) => `scale(${x},${y})`
            )
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  )
}

const SqueezeSpring = ({ children }) => {
  const [state, toggle] = useState(false)
  const { x, y } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1 },
    config: { mass: 0.5, tension: 120, friction: 2, precision: 0.001 },
    reset: state,
    onStart: (state) => toggle(false)
  })

  return (
    <animated.div
      className='squeezespring-wrapper-div'
      onMouseEnter={() => toggle(true)}
      style={{
        transform: interpolate(
          [
            x.interpolate({
              range: [0, 0.3, 1],
              output: [1, 1.1, 1]
            }),
            y.interpolate({
              range: [0, 0.3, 1],
              output: [1, 0.9, 1]
            })
          ],
          (x, y) => `scale(${x},${y})`
        )
      }}
    >
      {children}
    </animated.div>
  )
}

const AnimateLogos = ({ logos }) => {
  return (
    <div id='animate-logos' className='row row-cols-6'>
      {logos.map((logo, index) => (
        <SqueezeSpring className='letter' key={index}>
          {logo}
        </SqueezeSpring>
      ))}
    </div>
  )
}

export default AnimateLogos

// {' '}
//         &nbsp;&nbsp;
//         {World.map((word) => (
//           <SqueezeSpring>{word}</SqueezeSpring>
//         ))}
