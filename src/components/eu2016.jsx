import React from 'react'
import { Link } from 'react-router'
import Data from '../../data'

let speakers = Data.findSpeakersByConference('eu2016')
let workshops = Data.workshops.eu2016
let sessions = Data.sessions.eu2016

import WorkshopsSection from './workshops-section.jsx'
import SpeakersSection from './speakers-section.jsx'
import SessionsSection from './sessions-section.jsx'

export default class Us2016 extends React.Component {
  render() {
    let imageStyle = {
      width:"100%",
      height:"auto"
    }
    return (
      <div>
        <header className="eu-main-header">
          <div className="eu-header-bounds">
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" alt="Adobe logo"/></a></div>
          </div>
        </header>
        <div id="content" className="main-content eu-content">
          <SessionsSection sessions={sessions} heading={"Schedule"} pageSlug={"eu2016"}/>
          <section className="columns">
            <div className="text-bounds">
              <section className="workshops-section">
                <h1>Workshops</h1>
                <p>We're changing things up this year for PhoneGap Day EUers and having 2 separate tracks of workshops with a "choose your own adventure" theme. We'll have great content running all day in two different rooms so you can pick and choose what topics you'd like to get some hands-on experience with. The PhoneGap team and other community experts will be running workshops on everything from plugin development to embeddable webviews.</p>
                <h3>Important: workshop location is different than the conference venue:</h3>
                <p>Pakhuis De Zwijger<br/>Piet Heinkade 179<br/>1019 HC Amsterdam</p>
                <p><strong>Public transport information</strong>: To reach the workshop venue, go to Central Station and take tram 26. It’s located very close to the second stop; you can see it from the tram.</p>
                <p><a href="https://dezwijger.nl/">https://dezwijger.nl/</a></p>
              </section>
              <img src="/img/de-zwijger.jpg" alt="Pakhuis De Zwijger" style={imageStyle}/>
            </div>
          </section>
          <WorkshopsSection workshops={workshops} pageSlug={"eu2016"}/>
          <section>
            <div className="text-bounds">
              <h1>Venue</h1>
              <p><a href="http://www.compagnietheater.nl/compagnietheater.html">Het Compagnietheater</a>, more details coming soon.</p>
            </div>
          </section>
          <section><img src="/img/compagnie-theater.jpg" className="full" alt="Compagnie Theater"/></section>
          <SpeakersSection speakers={speakers} heading={"Speakers"} pageSlug={"eu2016"}/>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Sponsors</h1>
                <p>Interested in sponsoring? Email Jen Gray at <a href="mailto:jgray@adobe.com">jgray@adobe.com</a>.</p>
                <div className="sponsor__rangleio"><a href="http://www.rangle.io/"></a></div>
                <div className="sponsor__monaca"><a href="http://monaca.io/"></a></div>
                <div className="sponsor__onsen"><a href="http://www.onsen.io/"></a></div>
                <div className="sponsor__crosswalk"><a href="https://crosswalk-project.org/"></a></div>
                <div className="sponsor__ionic"><a href="http://www.ionicframework.com/"></a></div>
                <div className="sponsor__microsoft"><a href="http://www.microsoft.com/"></a></div>
                <div className="sponsor__ubuntu"><a href="http://www.ubuntu.com/about/canonical-and-ubuntu"></a></div>
              </section>
              <section>
                  <h1>Code of Conduct</h1>
                  <p>Attendees are required to adhere to our <a href="/code-of-conduct.html">code of conduct</a>.</p>
              </section>
            </div>
          </section>
        </div>
        <footer />
      </div>
    )
  }
}
