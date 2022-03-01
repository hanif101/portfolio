import React from 'react'
import ouichat_img from '../../images/ouichat2.png'

import '../../all-style/ouichat.scss'

const OuiChat = () => {
  return (
    <>
      <div id='ouichat-js'>
        <h1>Oui Chat</h1>

        <div className='img-tech'>
          <div className='img'>
            <img src={ouichat_img} alt='placefinder_img' />
          </div>
          <p className='img-text'>
            This project was a team project that I have worked with my 4 other classmates. 
            Application allows users to process the simple user functionalites like a signup or create account.
            Project inspired ny Slack application. Users are able to join rooms and share ideas.  
            Users are also able to create room also and send invitation to others (working on it).

            I had done user functionalities in the backend Express js
            and fron end design routes React library. 

          </p>
        </div>
        <div className='tech'>
          <h4>TECHNOLOGIES USED</h4>
          <p className='mt-1'>
            <img src='https://icongr.am/devicon/express-original.svg?size=55&color=ffffff'  alt=''/>
            <img src='https://icongr.am/devicon/mongodb-original-wordmark.svg?size=55&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/javascript-original.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/bootstrap-plain.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/react-original.svg?size=50&color=ffffff' alt=''  />
            <img src='https://icongr.am/devicon/css3-plain.svg?size=50&color=ffffff' alt=''/>
            <img src='https://icongr.am/devicon/html5-original.svg?size=50&color=000000' alt='' />
            <img src='https://icongr.am/simple/socketio.svg?size=50&color=e61919&colored=false' alt='' />
            <img src='https://icongr.am/devicon/npm-original-wordmark.svg?size=70&color=ffffff' alt=''/>
            <img src='https://icongr.am/devicon/nodejs-plain-wordmark.svg?size=70&color=ffffff' alt='' />
          </p>
        </div>

        <div className='lunch-project'>
          <h4 className='mb-2 ms-0'>LUNCH AND REPO </h4>

          <a
            href='https://ga-git-good.github.io/chat-app/'
            target='_blank'
            rel='noreferrer'
            className='me-3'
          >
             <img src='https://icongr.am/octicons/play.svg?size=32&color=ffffff' alt=''/>
          </a>
          
          <a href='https://github.com/ga-git-good/chat-app' target='_blank' rel='noreferrer'>
            <img src='https://icongr.am/fontawesome/github.svg?size=37&color=ffffff' alt=''/>
          </a>
        </div>
      </div>
    </>
  )
}

export default OuiChat
