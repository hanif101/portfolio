//  NPM packages
/* eslint-disable */
import React, { Fragment } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Main from './components/routes/Main'
import Projects from './components/routes/Projects.js'
import About from './components/routes/About'
import Progress from './components/routes/Progress'
// import Experience from './components/main/Experience'
import code from './images/vfv.jpg'


const App = () => {
  const location = useLocation()
  return (
    <Fragment>
      <div style={{ width: '100%', height: '100%' }}>
        <Parallax pages={6}>
          <ParallaxLayer offset={0} speed={0.1}>
            <Main />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#fff' }}>
            <About />
          </ParallaxLayer>
        
        

            {/* 
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
            </ParallaxLayer> */}

          <ParallaxLayer
            offset={2}
            speed={0.3}
            factor={3}
          >
            <Projects/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.3}
            // factor={3}
            style={{

            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={3.7}
            speed={0.3}
            style={{

            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.3}
            speed={0.3}
            style={{
                background:'#fff'
            }}
          >
          </ParallaxLayer>
        </Parallax>
      </div>
    </Fragment>
  )
}

export default App

{
  /* <Switch location={location} key={location.key}>
<Route exact path='/'>
  <Main />
</Route>

<Route exact path='/about'>
  <About />
</Route>
<Route exact path='/projects'>
  <Projects />
</Route>
</Switch> */
}

/* 




<div style={{ width: '100%', height: '100%'}}>
        <Parallax pages={5}>
          <ParallaxLayer offset={0} speed={0.1}>
            <Main />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#fff' }}>
            <About />
          </ParallaxLayer>
{/* 
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none'}}>
            <img src={code} style={{ width: '15%', marginLeft: '70%', marginLeft: '89%' }} />
          </ParallaxLayer> */

//     <ParallaxLayer
//       offset={2}
//       speed={0.3}
//       factor={3}
//       style={{
//         background: '#000'
//       }}
//     ></ParallaxLayer>

//     <ParallaxLayer
//       offset={3}
//       speed={0.3}
//       factor={3}
//       style={{
//         background: '#fff'
//       }}
//     ></ParallaxLayer>

//     <ParallaxLayer
//       offset={4}
//       speed={0.3}
//       style={{
//         background: '#000'
//       }}
//     >
//       <h1>Hello there</h1>

//     </ParallaxLayer>

//   </Parallax>
// </div>
