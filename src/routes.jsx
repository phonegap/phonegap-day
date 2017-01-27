import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Link } from 'react-router'

import Root from './components/root.jsx'
import Index from './components/index.jsx'
// import Us2016 from './components/us2016.jsx'
import Eu2017 from './components/eu2017.jsx'
// import SpeakerPage from './components/speaker-page.jsx'
import SpeakerPageEU from './components/speaker-page-eu.jsx'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} />
    // <Route path="/us2016/" component={Us2016} onLeave={() => {window.fromHome = true}} />
    // <Route path="/us2016/speaker/:slug" component={SpeakerPage} />
    <Route path="/eu2017/" component={Eu2017} onLeave={() => {window.fromHome = true}} />
    <Route path="/eu2017/speaker/:slug" component={SpeakerPageEU} onLeave={() => {window.fromHome = true}} />
  </Route>
)
