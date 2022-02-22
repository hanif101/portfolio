//  NPM packages
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Main from './components/main/Main'
import Projects from './components/main/Projects.js'
import About from './components/main/About'
import Experience from './components/main/Experience'

const App = () => {
  return (
    <Fragment>
      <h2>V4</h2>
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
    </Fragment>
  )
}

export default App
