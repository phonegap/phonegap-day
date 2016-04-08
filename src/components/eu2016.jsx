import React from 'react'
import { Link } from 'react-router'
import Data from '../../data'

let speakers = Data.findSpeakersByConference('eu2016')
let workshops = Data.workshops.eu2016

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
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day EU</h1>
              <h2 className="subhead eu-subhead">
                <time dateTime="2016-01-29">May 19 & 20, 2016</time> • <span className="city">Amsterdam</span>
              </h2>
              <div className="description">A one day conference and one day of workshops for PhoneGap, web, and mobile developers.</div>
                <div className="pricing">
                  <h2>Ticket Pricing</h2>
                  <ul>
                    <li><span>Conference</span><span className="leader" /><span>€150 + VAT</span></li>
                    <li><span>Workshops are sold out. <a href="https://docs.google.com/forms/d/1GE4xJkcKsf-gvf3OHAnf--6bNaxr9JJRICJOsJTssCk/viewform" className="waiting-list-link">Join the waiting list</a>.</span></li>
                  </ul>
                </div>
                <a href="https://phonegapdayeu.paydro.net/" className="button--cta">Get Tickets</a>
            </div>
          </div>
        </header>
        <div id="content" className="main-content eu-content">
          <section className="about">
            <div className="text-bounds">
              <h1>The Lowdown</h1>
              <p><span className="sub">One part conference, one part celebration.</span><br />Join PhoneGap and Cordova experts from around the world to hear what’s new in web and mobile development. Get the inside scoop on emerging frameworks and technologies and learn valuable tips and tricks to help with your next project. This is one of the best opportunities to network and learn from top industry leaders, meet with members of the PhoneGap team, hear the latest PhoneGap news, and find out what’s coming next!</p>
              <p>Already have native apps at your organization? Come to PhoneGap Day to learn how to still use native controls for your app while leveraging webviews for the main content to make editing and updates easier and to enable your marketing team and other non technical users to update your app.</p>
              <p>Need help justifying your trip? Download our “<a href="/justify-your-trip-to-phonegapday-eu.docx">Letter to your Boss</a>” document.</p>
            </div>
          </section>
          <SpeakersSection speakers={speakers} heading={"Speakers"} pageSlug={"eu2016"}/>
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
          <WorkshopsSection workshops={workshops}/>
          <section>
            <div className="text-bounds">
              <section>
                <h1>Schedule</h1>
                <p>Will be announced closer to the event!</p>
              </section>
            </div>
          <section>
            <div className="text-bounds">
              <h1>Venue</h1>
              <p><a href="http://www.compagnietheater.nl/compagnietheater.html">Het Compagnietheater</a>, more details coming soon.</p>
            </div>
          </section>
          </section>
          <section><img src="/img/compagnie-theater.jpg" className="full" alt="Compagnie Theater"/></section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Sponsors</h1>
                <p>Interested in sponsoring? Email Jen Gray at <a href="mailto:jgray@adobe.com">jgray@adobe.com</a>.</p>
                <div><a href="http://www.rangle.io/"><img src="/img/Rangle.io_Logo.svg" width={300} alt="Rangle logo"/></a></div>
                <div><a href="http://monaca.io/"><img src="/img/Monaca_Logo.svg" width={300} alt="Monaca logo"/></a></div>
                <div><a href="http://www.onsen.io/"><img src="/img/OnsenUI_Logo.svg" width={300} alt="OnsenUI logo"/></a></div>
                <div><a href="https://crosswalk-project.org/"><img src="/img/Crosswalk_Project_Logo.svg" width={300} alt="Crosswalk logo"/></a></div>
                <div><a href="http://www.ionicframework.com/"><img src="/img/Ionic_Logo.svg" width={280} alt="Ionic logo"/></a></div>
                <div><a href="http://www.microsoft.com/"><img src="/img/Microsoft_Logo.svg" width={300} alt="Microsoft logo"/></a></div>
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
