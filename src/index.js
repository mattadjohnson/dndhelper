import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent from './components/app/AppComponent'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root')
)
