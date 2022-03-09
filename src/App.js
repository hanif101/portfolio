//  NPM packages
/* eslint-disable */
import React, { Fragment } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Main from './components/routes/Main'
import Projects from './components/routes/Projects.js'
import About from './components/routes/About'
import Skills from './components/routes/Skills'

// import Experience from './components/main/Experience'
import code from './images/vfv.jpg'

const App = () => {
  const location = useLocation()
  return (
    <Fragment>
    
<Parallax pages={5.2307}>
          <ParallaxLayer offset={0} speed={0.1}>
            <Main />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#fff' }}>
            <About />
          </ParallaxLayer>

            <ParallaxLayer
            offset={2}
            speed={0.3}
          >
            <Projects/>
          </ParallaxLayer>


          <ParallaxLayer
            offset={4.3}
            speed={0.3}
            style={{
                background:'#fff'
            }}
          >
               <Skills/>
          </ParallaxLayer>
        </Parallax>
    </Fragment>
  )
}

export default App

/* 



<Parallax pages={5.2307}>
          <ParallaxLayer offset={0} speed={0.1}>
            <Main />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#fff' }}>
            <About />
          </ParallaxLayer>

            <ParallaxLayer
            offset={2}
            speed={0.3}
            factor={3}
          >
            <Projects/>
          </ParallaxLayer>


          <ParallaxLayer
            offset={4.3}
            speed={0.3}
            style={{
                background:'#fff'
            }}
          >
               <Skills/>
          </ParallaxLayer>
        </Parallax>

*/
