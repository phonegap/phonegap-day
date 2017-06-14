import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Link } from 'react-router'

import Root from './components/root.jsx'
import Index from './components/index.jsx'
import Us2017 from './components/us2017.jsx'
import Eu2017 from './components/eu2017.jsx'
import SpeakerPage from './components/speaker-page-us.jsx'
import SpeakerPageEU from './components/speaker-page-eu.jsx'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} />
    <Route path="/eu2017/" component={Eu2017} onLeave={() => {window.fromHome = true}} />
    <Route path="/eu2017/speaker/:slug" component={SpeakerPageEU} onLeave={() => {window.fromHome = true}} />
    <Route path="/us2017/" component={Us2017} onLeave={() => {window.fromHome = true}} />
    <Route path="/us2017/speaker/:slug" component={SpeakerPage} />
  </Route>
)
