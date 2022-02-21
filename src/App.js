//  NPM packages
import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './components/main/Main'
import About from './components/main/About'
import Projects from './components/main/Projects.js'

const App = () => {
  return (
    <Fragment>
      <h1>Siktirrrrrrrr</h1>
      <Route exact path='/'>
        <Main />
      </Route>
      <BrowserRouter>
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          {/* <Route exact path='/experince'>
      <Experience/>
    </Route> */}
          <Route exact path='/projects'>
            <Projects />
          </Route>
          {/* <Route exact path='/resume'>
      <Resume/>
    </Route> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
