import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})
