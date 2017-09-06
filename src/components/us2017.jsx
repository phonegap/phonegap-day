import React from 'react'
import { Link } from 'react-router'
import Data from '../../data'

let speakers = Data.findSpeakersByConference('us2017')
let workshops = Data.workshops.us2017
let sessions = Data.sessions.us2017

import WorkshopsSection from './workshops-section.jsx'
import SpeakersSection from './speakers-section.jsx'
import SessionsSection from './sessions-section.jsx'

export default class us2017 extends React.Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <div className="header-bounds">
            <div className="ipad-air2"><img src="/img/ipad-air2.svg" alt="iPad Air 2"/>
              <div className="content-mask" />
            </div>
            <div className="galaxy-s6"><img src="/img/galaxy-s6.svg" alt="Galaxy s6"/>
              <div className="content-mask" />
            </div>
            <div className="iphone-6"><img src="/img/iphone-6.svg" alt="iPhone 6"/>
              <div className="content-mask" />
            </div>
            <div className="nexus-9"><img src="/img/nexus-9.svg" alt="Nexus 9"/>
              <div className="content-mask" />
            </div>
            <div className="fire-hdx"><img src="/img/fire-hdx-8.9.svg" alt="Fire HDX 8.9"/>
              <div className="content-mask" />
            </div>
            <div className="lumia-640xl"><img src="/img/lumia-640xl.svg" alt="Lumia 640 XL"/>
              <div className="content-mask" />
            </div>
            <div className="one-m9"><img src="/img/one-m9.svg" alt="One m9"/>
              <div className="content-mask" />
            </div>
            <div className="logo"><img src="/img/pgd_logo_us-2017.svg" alt="PhoneGap Day logo"/></div>
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" alt="Adobe logo"/></a></div>
          </div>
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day</h1>
              <h2 className="subhead">
                <time dateTime="2017-10-11">Oct 11</time> (conference) & <time dateTime="2017-10-12">Oct 12</time> (workshops)
              </h2>
              <div className="description">A full day of PhoneGap, web, and mobile dev talks on Oct. 11th, plus an optional full day of workshops on Oct. 12th</div>
              <div className="pricing">
                <h2>Conference Ticket Pricing</h2>
                <ul>
                  <li><span>Early Bird Conference</span><span className="leader" /><span>$125</span></li>
                  <li><span>Early Bird Conf + Workshops</span><span className="leader" /><span>$175</span></li>
                </ul>
              </div><a href="https://www.eventbrite.com/e/phonegap-day-us-2017-tickets-34983605907" className="button--cta">Get Tickets</a>
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
        <div id="content" className="main-content">
          <section className="about">
            <div className="text-bounds">
              <h1>The Lowdown</h1>
              <p>PhoneGap is all about pushing mobile web technology forward so that the web becomes a first-class platform for mobile apps. This movement is already happening and made possible thanks to projects all over the web. Apache Cordova extends the browser's functionality and allows apps built with web technology to be distributed into app stores. Progressive Web Apps are leading the charge to bring richer functionality into the browser. App frameworks are raising the bar for creating quality and high performant apps. Testing frameworks add deep integration testing that touch both logic and interface. And don't forget about WebVR, which is pushing the boundaries of what it means to be mobile web.</p>
              <p>PhoneGap Day is an event to bring together everything that is moving the web mobile forward and allowing you to create amazing mobile apps. Join us for one day of workshops and a one-day conference covering everything from mobile frameworks to testing your apps. Meet members from the PhoneGap team, hear the latest PhoneGap news, and find out what’s coming next for mobile web!</p>
              <p>Need help justifying your trip? Download our “<a href="/justify-your-trip-to-phonegapdayus2017.docx">Letter to your Boss</a>” document.</p>
            </div>
          </section>
          <SessionsSection sessions={sessions} heading={"Schedule"} pageSlug={"us2017"}/>
          {/*<section className="about-details">
            <div className="text-bounds">
              <div className="about--sessions"><img src="/img/sessions.jpg" alt="sessions"/>
                <h2 className="about-heading">10+ Sessions,<br />15+ workshops.</h2>
                <p>Hear from industry leaders and attend targeted workshop sessions to get some hands-on training with the PhoneGap team and other experts from the mobile community.</p>
              </div>
              <div className="about--networking"><img src="/img/network.jpg" alt="network"/>
                <h2 className="about-heading">Spend time with good people with brilliant minds.</h2>
                <p>Network and share ideas with PhoneGap developers from around the world and gain valuable insight for your next project.</p>
              </div>
              <div className="about--skiing"><img src="/img/skiing.jpg" alt="skiing"/>
                <h2 className="about-heading">Ski day for all attendees.</h2>
                <p>What's a trip to Utah without some skiing? After a jam-packed day of learning and coding, wind down on Utah's famous mountains and experience "the greatest snow on Earth".</p><img src="/img/audience.jpg" className="audience-image" alt="audience"/>
              </div>
            </div>
          </section>*/}
          <SpeakersSection speakers={speakers} heading={"Speakers"} pageSlug={"us2017"}/>
          <WorkshopsSection workshops={workshops} heading={"Workshops"} pageSlug={"us2017"}/>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Venue</h1>
                <p>We’re hosting PhoneGap Day at the beautiful Microsoft New York Office.</p>
                <p><a href="https://goo.gl/maps/utRwZHdoKxR2">11 Times Square<br />New York, NY 10036</a></p>
              </section>
            </div>
          </section>
          {/*<section><img src="/img/ms-ny-office.jpg" className="full" alt="Microsoft New York Office"/><a href="https://goo.gl/maps/utRwZHdoKxR2" className="map" /></section>*/}
          {/*
            <section>
              <h1>Hotel</h1>
              <p>Need a place to stay in Utah? Here are some recommended hotels in the area:</p>
              <p>The <a href="http://www.marriott.com/hotels/travel/slcli-courtyard-lehi-at-thanksgiving-point/">Courtyard Marriott in Lehi</a> conveniently located right across I-15 from the Adobe Lehi office.</p>
              <p>The <a href="http://www.monaco-saltlakecity.com/">Hotel Monaco</a> in Salt Lake City located 30 minutes north of the Adobe Lehi office.</p>
            </section>
            */}
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Sponsors</h1>
                <div><a href="https://www.adobe.io/"><img src="/img/logos/adobeIO.svg" width={280} alt="AdobeIO logo"/></a></div>
                <div><a href="http://monaca.io/"><img src="/img/Monaca_Logo.svg" width={300} alt="Monaca logo"/></a></div>
                <div><a href="http://www.ionicframework.com/"><img src="/img/Ionic_Logo.svg" width={280} alt="Ionic logo"/></a></div>
                <div><a href="http://microsoft.com/"><img src="/img/logos/microsoft.png" width={300} alt="Microsoft logo"/></a></div>
                <div>Looking to sponsor PhoneGap Day US 2017? Please email <a href="mailto:jgray@adobe.com">jgray@adobe.com</a></div>

              </section>
              <section>
                <h1>Agenda</h1>
                <div>This year we're looking for any talks on anything that moves the mobile web forward - <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlvZZDig6MC85qsmVyrnHk6wINSvf9tFQGLo-ujV7gz0wEkw/viewform?usp=sf_link">CFP here</a>.</div>
              </section>
            </div>
          </section>
          <section>
            <div className="text-bounds">
              <h1>Code of Conduct</h1>
              <p>Attendees are required to adhere to our <a href="/code-of-conduct.html">code of conduct</a>.</p>
            </div>
          </section>
        </div>
        <footer />
      </div>
    )
  }
}
