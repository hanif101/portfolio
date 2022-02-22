//  NPM packages
import React, { Fragment } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import Main from './components/main/Main'
import Projects from './components/main/Projects.js'
import About from './components/main/About'
// import Experience from './components/main/Experience'

const App = () => {
  const location = useLocation( )
  return (
    <Fragment>
      <h2>V5 Switch Added</h2>
      <AnimatePresence>
        <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/projects'>
          <Projects />
        </Route>

        {/* <Route exact path='/experience'>
        <Experience />
      </Route> */}
      </Switch>
      </AnimatePresence>
    </Fragment>
  )
}

export default App
