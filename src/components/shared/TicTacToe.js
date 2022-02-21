import React from 'react'
import tictactoe_img from '../../images/tictactoe.png'

import '../../all-style/tictactoe.scss'

const TicTacToe = () => {
  return (
    <>
      <div id='tictactoe-js'>
        <h1>Tic-Tac-Toe</h1>

        <div className='img-tech'>
          <div className='img'>
            <img src={tictactoe_img} alt='tictactoe_png' />
          </div>
          <p className='img-text'>
            The first project I completed at GA was a tic-tac-toe game. The goal for this project
            was to create a functional tic-tac-toe game from scratch using new tools we learned
            before hand. Players are able to start a fresh game, keep track of games, change their
            password, and sign out of the application.{' '}
          </p>
        </div>
        <div className='tech'>
          <h4>TECHNOLOGIES USED</h4>
          <p className='col-9 mt-1'>
            <img src='https://icongr.am/devicon/javascript-original.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/bootstrap-plain.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/jquery-plain-wordmark.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/css3-plain.svg?size=50&color=ffffff'  alt=''/>
            <img src='https://icongr.am/devicon/html5-original.svg?size=50&color=000000' alt='' />
          </p>
        </div>

        <div className='lunch-project'>
          <h4 className='mb-2 ms-0'>LUNCH AND REPO </h4>

          <a
            href='https://hanif101.github.io/tic-tac-toe/'
            target='_blank'
            rel='noreferrer'
            className='me-3'
          >
            <img src='https://icongr.am/octicons/play.svg?size=32&color=ffffff' alt='' />
          </a>

          <a href='https://github.com/hanif101/tic-tac-toe' target='_blank' rel='noreferrer'>
            <img src='https://icongr.am/fontawesome/github.svg?size=37&color=ffffff' alt=''/>
          </a>
        </div>
      </div>
    </>
  )
}

export default TicTacToe
