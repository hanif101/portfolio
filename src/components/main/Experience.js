/* eslint-disable */
import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../all-style/experience.scss'


const Experience = () => {
  let history = useHistory()
  const handleClick = (event) => {
    history.push('/')
  }

  return (
    <>
      <div id='experience-wrapper'>
        <h1>Experience</h1>

        <div id='tictactoe'>
       
        </div>
      </div>
    </>
  )
}

export default Experience