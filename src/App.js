//  NPM packages
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Main from './components/main/Main'
import Projects from './components/main/Projects.js'
import About from './components/main/About'

const App = () => {
  return (
    <Fragment>
      <h1>V3</h1>
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
