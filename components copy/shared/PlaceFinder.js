import React from 'react'
import placefinder_img from '../../images/placefinder.png'

import '../../all-style/placefinder.scss'

const PlaceFinder = () => {
  return (
    <>
      <div id='placefinder-js'>
        <h1>Place Finder</h1>

        <div className='img-tech'>
          <div className='img'>
            <img src={placefinder_img} alt='placefinder_img' />
          </div>
          <p className='img-text'>
            The application allows users to find places around. User is able to look place nearby
            just entering a valid zipcode. Application serach engine gets data fro Yelp public API.
            User sign up functionalities also saving users favprites places and comments or see
            others comments are also provided.Application was a first full stack project in GA
            bootcamp. at the client side, sematic HTML5, JQuery for backend server calls, as a
            styling, native css3 and bootstrap library used. Serverside rendering uses Express Js,
            MongoDB ATLAS & Mongoose Schema object as a database, and jwt || passport npm packages
            for user authantication.
          </p>
        </div>
        <div className='tech'>
          <h4>TECHNOLOGIES USED</h4>
          <p className='mt-1'>
            <img src='https://icongr.am/devicon/express-original.svg?size=55&color=ffffff' alt='' />
            <img
              src='https://icongr.am/devicon/mongodb-original-wordmark.svg?size=55&color=ffffff'
              alt=''
            />
            <img
              src='https://icongr.am/devicon/javascript-original.svg?size=50&color=ffffff'
              alt=''
            />
            <img src='https://icongr.am/devicon/bootstrap-plain.svg?size=50&color=ffffff' alt='' />
            <img
              src='https://icongr.am/devicon/jquery-plain-wordmark.svg?size=50&color=ffffff'
              alt=''
            />
            <img src='https://icongr.am/devicon/css3-plain.svg?size=50&color=ffffff' alt='' />
            <img src='https://icongr.am/devicon/html5-original.svg?size=50&color=000000' alt='' />
            <img src='https://icongr.am/material/package-down.svg?size=50&color=ffffff' alt='' />
            <img
              src='https://icongr.am/devicon/npm-original-wordmark.svg?size=70&color=ffffff'
              alt=''
            />
            <img
              src='https://icongr.am/devicon/nodejs-plain-wordmark.svg?size=70&color=ffffff'
              alt=''
            />
          </p>
        </div>

        <div className='lunch-project'>
          <h4 className='mb-2 ms-0'>LUNCH AND REPO </h4>

          <a
            href='https://hanif101.github.io/place-finder/'
            target='_blank'
            rel='noreferrer'
            className='me-3'
          >
            <img src='https://icongr.am/octicons/play.svg?size=32&color=ffffff' alt='' />
          </a>

          <a href='https://github.com/hanif101/place-finder' target='_blank' rel='noreferrer'>
            <img src='https://icongr.am/fontawesome/github.svg?size=37&color=ffffff' alt='' />
          </a>
        </div>
      </div>
    </>
  )
}

export default PlaceFinder
