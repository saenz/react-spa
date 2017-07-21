import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

window.React = React

render(<App/>, document.getElementById('react-container'));
