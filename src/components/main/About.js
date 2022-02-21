/* eslint-disable */
import React from 'react'
import { useHistory } from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


import '../../all-style/about.scss'

const Main = () => {
  let history = useHistory()
  const handleClick = (event) => {
    history.push('/about')
  }



  return (
    <>
      <div id='about-wrapper'>

        <p>

        </p>
        <p>
          My Portfolio
        </p>
        <p>
          Welcome!
          I am Senior Software Developer that have graduated from General Assemble (GA) school in 2022.
          During 500 hours commitment in GA full-stack software immersive class, 
          I have built 4 projects and have expericnecd most popular technologies.
          Coming from Ocupation Safety Sicence background, have worked different fields, 
          I decided to change my carier after checking coding fields by trying coding by myself getting online educational lessons.

          After graduated from General Assembly bootcamp school. 
        </p>

      </div>
    </>
  )
}

export default Main
