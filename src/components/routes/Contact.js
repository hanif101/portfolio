/* eslint-disable */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import '../../all-style/contact.scss'

const Contact = () => {
  let history = useHistory()
  const handleClick = (event) => {
    history.push('/about')
  }

  return (
    <>
      <div id='contact-wrapper'>
        <h1>Contact</h1>
      </div>
    </>
  )
}

export default Contact
