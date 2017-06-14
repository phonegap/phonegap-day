import React from 'react'
import { Link } from 'react-router'
import Data from '../../data'

let speakers = Data.findSpeakersByConference('eu2017')
let workshops = Data.workshops.eu2017
let sessions = Data.sessions.eu2017

import WorkshopsSection from './workshops-section.jsx'
import SpeakersSection from './speakers-section.jsx'
import SessionsSection from './sessions-section.jsx'

export default class Eu2017 extends React.Component {
  render() {
    let imageStyle = {
      width:"100%",
      height:"auto"
    }
    return (
      <div>
        <header className="eu-main-header">
          <div className="eu-header-bounds--2017">
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" alt="Adobe logo"/></a></div>
          </div>
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day EU</h1>
              <h2 className="subhead eu-subhead">
                <time dateTime="2017-05-18">May 18 &amp; 19, 2017</time> • <span className="city">Amsterdam</span>
              </h2>
              <div className="description">A one day conference and one day of workshops for PhoneGap, web, and mobile developers.</div>
                <div className="pricing">
                  <h2>Ticket Pricing</h2>
                  <ul>
                    <li><span>Conference</span><span className="leader" /><span>€150 + VAT</span></li>
                    <li><span>Conference + Workshops</span><span className="leader" /><span>Soldout</span></li>
                  </ul>
                </div>
                <a href="https://webconferences.paydro.com/phonegap-day-eu-2017" className="button--cta">Get Tickets</a>
            </div>
            <section className="subscribe-form">
              <div className="text-bounds">
                <h1>Stay in the Know</h1>
                <div className="description">Sign up for all the latest PhoneGap Day news.</div>
                <form action="http://nitobi.createsend.com/t/y/s/ehtkkh/" method="post" id="subForm">
                  <input id="fieldEmail" className="text-email" name="cm-ehtkkh-ehtkkh" placeholder="Email" type="email" required />
                  <button type="submit" className="button--cta">Subscribe</button>
                </form>
              </div>
            </section>
          </div>
        </header>
        <div id="content" className="main-content eu-content">
          <section className="about">
            <div className="text-bounds">
              <h1>The Lowdown</h1>
              <p><span className="sub">One part conference, one part celebration.</span><br />Join PhoneGap and Cordova experts from around the world to hear what’s new in web and mobile development. Get the inside scoop on emerging frameworks and technologies and learn valuable tips and tricks to help with your next project. This is one of the best opportunities to network and learn from top industry leaders, meet with members of the PhoneGap team, hear the latest PhoneGap news, and find out what’s coming next!</p>
              <p>Already have native apps at your organization? Come to PhoneGap Day to learn how to still use native controls for your app while leveraging webviews for the main content to make editing and updates easier and to enable your marketing team and other non technical users to update your app.</p>
              <p>Need help justifying your trip? Download our “<a href="/justify-your-trip-to-phonegapday-eu-2017.docx">Letter to your Boss</a>” document.</p>
            </div>
          </section>
          <SpeakersSection speakers={speakers} heading={"Speakers"} pageSlug={"eu2017"}/>
          <SessionsSection sessions={sessions} heading={"Schedule"} pageSlug={"eu2017"}/>
          <section className="columns">
            <div className="text-bounds">
              <section className="workshops-section">
                <h1>Workshops</h1>
                <p>Get some 1:1 time with our PhoneGap experts ahead of the conference. Join our workshop day on Thursday, May 18. We'll have 2 workshop tracks on May 18th with great content running all day. More details to be announced soon, but we'll have workshops on things like progressive web apps, offline capabilities, security, and virtual reality. You won't want to miss these! Note: the workshop venue is different than the conference venue. More information coming soon!</p>
                <h3>Important: workshop location is different than the conference venue:</h3>
                <p>Spaces Herengracht<br/>Herengracht 124-128<br/>1015 BT Amsterdam</p>
                <p><a href="https://goo.gl/maps/uvby2U7nLpT2">Google Map</a></p>
              </section>
              <img src="/img/spaces-herengracht.jpg" alt="Spaces Herengracht" style={imageStyle}/>
            </div>
          </section>
          <WorkshopsSection workshops={workshops} heading={"Workshop Schedule"} pageSlug={"eu2017"}/>
          <section>
            <div className="text-bounds">
              <h1>Venue</h1>
              <p><a href="http://www.compagnietheater.nl/compagnietheater.html">Het Compagnietheater</a>, more details coming soon.</p>
            </div>
          </section>
          <section><img src="/img/compagnie-theater.jpg" className="full" alt="Compagnie Theater"/></section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Sponsors</h1>
                <p>Interested in sponsoring? Email Jen Gray at <a href="mailto:jgray@adobe.com">jgray@adobe.com</a>.</p>
                <div><a href="http://onsen.io/"><img src="/img/OnsenUI_Logo.svg" width={300} alt="OnsenUI logo"/></a></div>
                <div><a href="http://monaca.io/"><img src="/img/Monaca_Logo.svg" width={300} alt="Monaca logo"/></a></div>
                <div><a href="http://www.ionicframework.com/"><img src="/img/Ionic_Logo.svg" width={280} alt="Ionic logo"/></a></div>
                <div><a href="https://www.wikitude.com/"><img src="/img/Wikitude_Logo.png" width={310} alt="Wikitude logo"/></a></div>
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
