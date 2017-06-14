import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import { Router, RoutingContext, match } from 'react-router'
import CircularJSON from 'circular-json'

import data, { Session, Workshop } from '../data';

import template from './page.jade'
import routes from './routes.jsx'
import Root from './components/root.jsx'
import Index from './components/us2017.jsx'
import css from '!raw!postcss-loader!stylus!./css/main.styl'

// Client render
if (typeof document !== 'undefined') {
  const history = useScroll(createHistory)()
  const initialProps = CircularJSON.parse(document.getElementById('initial-props').innerHTML)
  const outlet = document.getElementById('react-output');

  ReactDOM.render(<Router history={history} routes={routes} />, outlet)
}
function getCardImage(speaker, confSlug) {
  if(Object.hasOwnProperty.call(speaker, 'twitterCard') && Object.hasOwnProperty.call(speaker.twitterCard, confSlug)){
    return speaker.twitterCard[confSlug];
  }
  return false;
}
function getCardDescription(talks) {
  if(talks.length > 0) {
    const talk = talks[0];
    let title;
    if(talk instanceof Session) {
      title = `Come hear their talk, ${talk.title}`;
    } else if (talk instanceof Workshop) {
      title = `Come attend their workshop, ${talk.title}`;
    }
    return title;
  } else {
    return null;
  }
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
        content:'PhoneGap Day - agenda and workshops announced'
      },{
        name:'twitter:description',
        content:"PhoneGap Day EU will be in Amsterdam on May 18-19, 2017. PhoneGap Day US is scheduled for Fall 2017."
      },{
        name:'twitter:image',
        content:'http://pgday.phonegap.com/img/twitter-card2017sm.png'
      },{
        name:'description',
        content:"PhoneGap Day EU will be in Amsterdam on May 18-19, 2017. PhoneGap Day US is scheduled for Fall 2017."
      },{
        name:'keywords',
        content:'HTML,CSS,PhoneGap Day,JavaScript,conference,event'
      },{
        property:'og:image',
        content:'http://pgday.phonegap.com/img/ogimage.png'
      }
    ]
  } else if(locationArray.length > 0 && locationArray[0] == 'us2017'){
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
        content:'http://pgday.phonegap.com/img/twitter-card-us2017sm.png'
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
  } else if(locationArray.length > 0 && locationArray[0] == 'eu2017' && locationArray[1] == 'speaker'){
    const speakerSlug = locationArray[2];
    const confSlug = locationArray[0];
    const speaker = data.findSpeakerBySlug(speakerSlug);
    const sessions = data.findSessionBySpeakerSlug(speakerSlug, confSlug);
    const workshops = data.findWorkshopBySpeakerSlug(speakerSlug, confSlug);
    const talks = [].concat(sessions, workshops);
    const description = (talks.length == 0)?
      "PhoneGap Day EU will be held at Het Compagnietheater in Amsterdam on May 18-19, 2017.":
      getCardDescription(talks);
    const cardImage = getCardImage(speaker, confSlug);
    console.log(cardImage);
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
        content: (speaker.name) ? `Join ${speaker.name} at PhoneGap Day EU 2017`: 'PhoneGap Day US',
      },{
        name:'twitter:description',
        content: description,
      },{
        name:'twitter:image',
        content: (cardImage) ? `http://pgday.phonegap.com${cardImage}` : 'http://pgday.phonegap.com/img/twitter-card-eu2017sm.png',
      },{
        name:'description',
        content:"PhoneGap Day EU will be held at Het Compagnietheater in Amsterdam on May 18-19, 2017."
      },{
        name:'keywords',
        content:'HTML,CSS,PhoneGap Day,JavaScript,conference,event,europe'
      },{
        property:'og:image',
        content:'http://pgday.phonegap.com/img/ogimage.png'
      }
    ]
  } else if(locationArray.length > 0 && locationArray[0] == 'eu2017'){
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
        content:'PhoneGap Day EU 2017'
      },{
        name:'twitter:description',
        content:"PhoneGap Day EU will be held at Het Compagnietheater in Amsterdam on May 18-19, 2017."
      },{
        name:'twitter:image',
        content:'http://pgday.phonegap.com/img/twitter-card-eu2017sm.png'
      },{
        name:'description',
        content:"PhoneGap Day EU will be held at Het Compagnietheater in Amsterdam on May 18-19, 2017."
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
