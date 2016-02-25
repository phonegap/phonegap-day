import React from 'react'
import { speakers, sessions, workshops } from '../../data'
import { Link } from 'react-router'

import WorkshopsSection from './workshops-section.jsx'
import SpeakersSection from './speakers-section.jsx'
import SessionsSection from './sessions-section.jsx'

export default class Us2016 extends React.Component {
  render() {
    return (
      <div>
        <header className="eu-main-header">
          <div className="eu-header-bounds">
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" /></a></div>
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
                    <li><span>Workshops</span><span className="leader" /><span>€100 + VAT</span></li>
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
          <section className="columns">
            <div className="text-bounds">
              <section className="workshops-section">
                <h1>Workshops</h1>
                <p>Dive deeper into PhoneGap by attending the conference workshops on Friday, May 20th.</p>
                <p>We’re changing up workshops this year so you can choose your own adventure. We’ll have great content going all day where you can choose from different workshop tracks depending on your interests and skill-level. We’ll have something for everyone whether you’re a PhoneGap beginner or a seasoned expert.</p>
                <p>The workshops will be held at a different venue than the conference. The workshops will be held at <a href="https://dezwijger.nl/over-ons/about-us/">Pakhuis de Zwijger</a></p>
              </section>
              <section className="speaker-section">
                <h1>Speakers</h1>
                <p>Interested in speaking? Fill out our <a href="https://docs.google.com/forms/d/17FdU1k_yEdOEi8bWC5XQw-FrAwD3rT4YPNYkdIcj6tw/viewform?usp=send_form</p>">Call for Speakers</a> form.</p>
              </section>
            </div>
          </section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Schedule</h1>
                <p>Will be announced closer to the event!</p>
              </section>
              <section>
                <h1>Venue</h1>
                <p><a href="http://www.compagnietheater.nl/compagnietheater.html">Het Compagnietheater</a>, more details coming soon.</p>
              </section>
            </div>
          </section>
          <section><img src="/img/compagnie-theater.jpg" className="full" /></section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Sponsors</h1>
                <p>Interested in sponsoring? Email Jen Gray at <a href="mailto:jgray@adobe.com">jgray@adobe.com</a>.</p>
                <div><a href="http://www.rangle.io/"><img src="/img/Rangle.io_Logo.svg" width={300} /></a></div>
                <div><a href="http://monaca.io/"><img src="/img/Monaca_Logo.svg" width={300} /></a></div>
                <div><a href="http://www.onsen.io/"><img src="/img/OnsenUI_Logo.svg" width={300} /></a></div>
                <div><a href="https://crosswalk-project.org/"><img src="/img/Crosswalk_Project_Logo.svg" width={300} /></a></div>
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
