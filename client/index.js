import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

document.addEventListener('DOMContentLoaded', () => {
  render(
      <App />,
  document.getElementById('app')
  )
})
