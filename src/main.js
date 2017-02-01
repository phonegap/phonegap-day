import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import { Router, RoutingContext, match } from 'react-router'
import CircularJSON from 'circular-json'

import template from './page.jade'
import routes from './routes.jsx'
import Root from './components/root.jsx'
import Index from './components/us2016.jsx'
import css from '!raw!postcss-loader!stylus!./css/main.styl'

// Client render
if (typeof document !== 'undefined') {
  const history = useScroll(createHistory)()
  const initialProps = CircularJSON.parse(document.getElementById('initial-props').innerHTML)
  const outlet = document.getElementById('react-output');

  ReactDOM.render(<Router history={history} routes={routes} />, outlet)
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  const locationArray = location.pathname.split('/').filter(function(n){ return n !== '' })
  let meta = []
  if (locationArray.length == 0) {
    meta = [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },{
        name:'twitter:site',
        content:'@phonegap'
      },{
        name:'twitter:creator',
        content:'@garthdb'
      },{
        name:'twitter:title',
        content:'PhoneGap Day Early Bird Pricing'
      },{
        name:'twitter:description',
        content:"PhoneGap Day EU will be in Amsterdam on May 18-19, 2017."
      },{
        name:'twitter:image',
        content:'http://pgday.phonegap.com/img/twitter-card.png'
      },{
        name:'description',
        content:"PhoneGap Day EU will be in Amsterdam on May 18-19, 2017."
      },{
        name:'keywords',
        content:'HTML,CSS,PhoneGap Day,JavaScript,conference,event'
      },{
        property:'og:image',
        content:'http://pgday.phonegap.com/img/ogimage.png'
      }
    ]
  } else if(locationArray.length > 0 && locationArray[0] == 'us2016'){
    meta = [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },{
        name:'twitter:site',
        content:'@phonegap'
      },{
        name:'twitter:creator',
        content:'@garthdb'
      },{
        name:'twitter:title',
        content:'PhoneGap Day US'
      },{
        name:'twitter:description',
        content:"PhoneGap Day will be held at Adobe's Lehi office on January 29, 2016. It will include 10+ keynotes, 15+ workshops, and a ski day for all attendees."
      },{
        name:'twitter:image',
        content:'http://pgday.phonegap.com/img/twitter-card-us2016sm.png'
      },{
        name:'description',
        content:"PhoneGap Day will be held at Adobe's Lehi office on January 29, 2016. It will include 10+ keynotes, 15+ workshops, and a ski day for all attendees."
      },{
        name:'keywords',
        content:'HTML,CSS,PhoneGap Day,JavaScript,conference,event'
      },{
        property:'og:image',
        content:'http://pgday.phonegap.com/img/ogimage.png'
      }
    ]

  } else if(locationArray.length > 0 && locationArray[0] == 'eu2016'){
    meta = [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },{
        name:'twitter:site',
        content:'@phonegap'
      },{
        name:'twitter:creator',
        content:'@garthdb'
      },{
        name:'twitter:title',
        content:'PhoneGap Day EU'
      },{
        name:'twitter:description',
        content:"PhoneGap Day EU will be held at Het Compagnietheater in Amsterdam on May 19 & 20, 2016."
      },{
        name:'twitter:image',
        content:'http://pgday.phonegap.com/img/twitter-card-eu2017sm.png'
      },{
        name:'description',
        content:"PhoneGap Day EU will be held at Het Compagnietheater in Amsterdam on May 19 & 20, 2016."
      },{
        name:'keywords',
        content:'HTML,CSS,PhoneGap Day,JavaScript,conference,event,europe'
      },{
        property:'og:image',
        content:'http://pgday.phonegap.com/img/ogimage.png'
      }
    ]
  }

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    var reactHTML = renderToString(<RoutingContext {...renderProps} history={history}/>)
    var html = template({pageContent: reactHTML, css: css, meta: meta});
    callback(null, html);
  });
};
