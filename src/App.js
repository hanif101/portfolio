//  NPM packages
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Main from './components/main/Main'
import About from './components/main/About'
import Projects from './components/main/Projects.js'

const App = () => {
  return (
    <Fragment>
      <h1>Version2</h1>
      <Route exact path='/'>
        <Main />
      </Route>

      <Route exact path='/about'>
        <About />
      </Route>

      <Route exact path='/projects'>
        <Projects />
      </Route>
    </Fragment>
  )
}

export default App
