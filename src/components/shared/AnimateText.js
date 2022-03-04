/* eslint-disable */

import React, { useState, useMemo, Fragment } from 'react'
import { useSpring, animated, interpolate, config, useTrail } from 'react-spring'
import uniqid from 'uniqid'

import '../../all-style/animateText.scss'

export function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 135 },
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
    <div className='trails-wrapper-text-div'>
      {trail.map(({ x, y, ...rest }, index) => (
        <animated.div
          className='animated-div-trails'
          key={uniqid()}
          style={{
            ...rest,
            transform: interpolate(
              [
                x.interpolate({
                  range: [1, 0.5, 1],
                  output: [1, 1, 1]
                }),
                y.interpolate({
                  range: [0, 0.9, 1],
                  output: [0, 0.8, 1]
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
      className='squeezespring-wrapper-text-div row rows-6'
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

const AnimateText = ({ text }) => {
  return (
    <div id='animate-text' className='row'>
      <Trail>
        <>
          {text.map((letter, index) => (
            <SqueezeSpring className='letter' key={index}>
              {letter}
            </SqueezeSpring>
          ))}
        </>
      </Trail>
    </div>
  )
}

export default AnimateText

// {' '}
//         &nbsp;&nbsp;
//         {World.map((word) => (
//           <SqueezeSpring>{word}</SqueezeSpring>
//         ))}
