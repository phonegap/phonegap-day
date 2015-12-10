import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Link } from 'react-router'

import Root from './components/root.jsx'
import Index from './components/index.jsx'
import SpeakerPage from './components/speaker-page.jsx'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} onLeave={() => {window.fromHome = true}}/>
    <Route path="/speaker/:slug" component={SpeakerPage} />
  </Route>
)
