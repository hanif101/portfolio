import React from 'react'
import ReactTooltip from 'react-tooltip'

function Tooltips() {
  return (
    <div style={{ letterSpacing: '1px' }}>
      <ReactTooltip id='express' place='top' effect='solid'>
        Express
      </ReactTooltip>

      <ReactTooltip id='js' place='top' effect='solid'>
        JavaScript
      </ReactTooltip>

      <ReactTooltip id='py' place='top' effect='solid'>
        Python
      </ReactTooltip>

      <ReactTooltip id='aws' place='top' effect='solid'>
        AWS Services
      </ReactTooltip>

      <ReactTooltip id='django' place='top' effect='solid'>
        Django REST
      </ReactTooltip>

      <ReactTooltip id='node' place='top' effect='solid'>
        NodeJS
      </ReactTooltip>

      <ReactTooltip id='jquery' place='top' effect='solid'>
        jQuery
      </ReactTooltip>

      <ReactTooltip id='react' place='top' effect='solid'>
        React
      </ReactTooltip>

      <ReactTooltip id='angular' place='top' effect='solid'>
        AngularJS
      </ReactTooltip>

      <ReactTooltip id='html' place='top' effect='solid'>
        HTML5
      </ReactTooltip>

      <ReactTooltip id='boot' place='top' effect='solid'>
        Bootstrap
      </ReactTooltip>

      <ReactTooltip id='mongo' place='top' effect='solid'>
        MongoDB & ATLAS
      </ReactTooltip>

      <ReactTooltip id='postsql' place='top' effect='solid'>
        PostgreSQL
      </ReactTooltip>

      <ReactTooltip id='socketio' place='top' effect='solid'>
        Socket.IO
      </ReactTooltip>

      <ReactTooltip id='ts' place='top' effect='solid'>
        TypeScript
      </ReactTooltip>
    </div>
  )
}

export default Tooltips
