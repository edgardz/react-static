import React from 'react'
import { Router } from '@reach/router'
import { Root, Routes } from 'react-static'

import './app.css'

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes default />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
