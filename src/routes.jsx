import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Link } from 'react-router'

import Root from './components/root.jsx'
import Index from './components/index.jsx'
import Us2016 from './components/us2016.jsx'
import Eu2016 from './components/eu2016.jsx'
import SpeakerPage from './components/speaker-page.jsx'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} />
    <Route path="/us2016/" component={Us2016} onLeave={() => {window.fromHome = true}} />
    <Route path="/us2016/speaker/:slug" component={SpeakerPage} />
    <Route path="/eu2016/" component={Eu2016} onLeave={() => {window.fromHome = true}} />
  </Route>
)
