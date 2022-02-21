/* eslint-disable */
import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../all-style/resume.scss'

const Contact = () => {
  let history = useHistory()
  const handleClick = (event) => {
    history.push('/about')
  }

  return (
    <>
      <div id='resume-wrapper'>
        <h1>Resume</h1>
      </div>
    </>
  )
}

export default Contact