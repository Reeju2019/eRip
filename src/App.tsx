import React from 'react'
import './App.css'
import RoutingModule from './Components/Router/RoutingModule'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <RoutingModule />
      </div>
    </Router>
  )
}

export default App
