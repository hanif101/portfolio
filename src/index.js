import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './components/context/context'

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StoreProvider>
      <App />
    </StoreProvider>

  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
