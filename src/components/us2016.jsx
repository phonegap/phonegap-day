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
        <header className="main-header">
          <div className="header-bounds">
            <div className="ipad-air2"><img src="/img/ipad-air2.svg" />
              <div className="content-mask" />
            </div>
            <div className="galaxy-s6"><img src="/img/galaxy-s6.svg" />
              <div className="content-mask" />
            </div>
            <div className="iphone-6"><img src="/img/iphone-6.svg" />
              <div className="content-mask" />
            </div>
            <div className="nexus-9"><img src="/img/nexus-9.svg" />
              <div className="content-mask" />
            </div>
            <div className="fire-hdx"><img src="/img/fire-hdx-8.9.svg" />
              <div className="content-mask" />
            </div>
            <div className="lumia-640xl"><img src="/img/lumia-640xl.svg" />
              <div className="content-mask" />
            </div>
            <div className="one-m9"><img src="/img/one-m9.svg" />
              <div className="content-mask" />
            </div>
            <div className="logo"><img src="/img/pgd_logo.svg" /></div>
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" /></a></div>
          </div>
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day</h1>
              <h2 className="subhead">
                <time dateTime="2016-01-29">Jan 28 & 29, 2016</time> • <span className="city">Lehi, UT</span>
              </h2>
              <div className="description">A one day conference and one day of workshops for PhoneGap, web, and mobile developers.</div>
              <div className="pricing">
                <h2>Conference Ticket Pricing</h2>
                <ul>
                  <li><span>Conference</span><span className="leader" /><span>$100</span></li>
                  <li><span>Conf + Workshops</span><span className="leader" /><span>$150</span></li>
                </ul>
              </div><a href="http://www.eventbrite.com/e/phonegap-day-us-2016-tickets-18659846102" className="button--cta">Get Tickets</a>
            </div>
          </div>
        </header>
        <div id="content" className="main-content">
          <section className="about">
            <div className="text-bounds">
              <h1>The Lowdown</h1>
              <p><span className="sub">One part conference, one part celebration.</span><br />Join us for an incredible day to hear how the brightest minds in mobile are using PhoneGap to accelerate and optimize their mobile development strategy. You’ll hear from industry experts all ready to share tips and best practices, experiences with coding and performance, and the latest mobile trends. Meet members from the PhoneGap team, hear the latest PhoneGap news, and find out what’s coming next!</p>
              <p>Already have native apps at your organization? Come to PhoneGap Day to learn how to still use native controls for your app while leveraging webviews for the main content to make editing and updates easier and to enable your marketing team and other non technical users to update your app.</p>
              <p>Need help justifying your trip? Download our “<a href="justify-your-trip-to-phonegapday.docx">Letter to your Boss</a>” document.</p>
            </div>
          </section>
          <section className="about-details">
            <div className="text-bounds">
              <div className="about--sessions"><img src="/img/sessions.jpg" />
                <h2 className="about-heading">10+ Sessions,<br />15+ workshops.</h2>
                <p>Hear from industry leaders and attend targeted workshop sessions to get some hands-on training with the PhoneGap team and other experts from the mobile community.</p>
              </div>
              <div className="about--networking"><img src="/img/network.jpg" />
                <h2 className="about-heading">Spend time with good people with brilliant minds.</h2>
                <p>Network and share ideas with PhoneGap developers from around the world and gain valuable insight for your next project.</p>
              </div>
              <div className="about--skiing"><img src="/img/skiing.jpg" />
                <h2 className="about-heading">Ski day for all attendees.</h2>
                <p>What's a trip to Utah without some skiing? After a jam-packed day of learning and coding, wind down on Utah's famous mountains and experience "the greatest snow on Earth".</p><img src="/img/audience.jpg" className="audience-image" />
              </div>
            </div>
          </section>
          <SpeakersSection speakers={speakers} heading={"Speakers"}/>
          <WorkshopsSection workshops={workshops} heading={"Workshops"}/>
          <SessionsSection sessions={sessions} heading={"Schedule"}/>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Ski Day</h1>
                <p>After the conference, join us on Saturday, January 30th for a PhoneGap ski day on Utah’s famous mountains. More details to come!</p>
              </section>
              <section>
                <h1>Venue</h1>
                <p>We’re hosting PhoneGap Day at the beautiful Adobe Lehi Office.</p>
                <p><a href="https://goo.gl/maps/4f5admiUNPn">3900 Adobe Way<br />Lehi, UT 84043</a></p>
              </section>
            </div>
          </section>
          <section><img src="/img/lehi-office.jpg" className="full" /><a href="https://goo.gl/maps/4f5admiUNPn" className="map" /></section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Hotel</h1>
                <p>Need a place to stay in Utah? We have room blocks available at:</p>
                <p>The <a href="http://www.marriott.com/hotels/travel/slcli-courtyard-lehi-at-thanksgiving-point/">Courtyard Marriott in Lehi</a> conveniently located right across I-15 from the Adobe Lehi office. Book online <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Adobe%20Phone%20Gap%20Day%20US%202016%5Eslcli%60adbadba%7Cadbadbb%60124.00%60USD%60false%601%601/27/16%601/31/16%601/6/16&app=resvlink&stop_mobi=yes">here</a>.</p>
                <p>The <a href="http://www.monaco-saltlakecity.com/">Hotel Monaco</a> in Salt Lake City located 30 minutes north of the Adobe Lehi office. Book <a href="https://gc.synxis.com/rez.aspx?Hotel=26759&Chain=10179&arrive=1/27/2016&depart=1/31/2016&adult=1&child=0&group=12360603288">online here</a> or call 1 (800) KIMPTON and request a reservation as part of the Adobe Systems Incorporated block.</p>
                <p>If reservations are not needed, please cancel 24 hours prior to arrival.</p>
              </section>
              <section>
                <h1>Sponsors</h1>
                <p>Interested in sponsoring? Email Jen Gray at <a href="mailto:jgray@adobe.com">jgray@adobe.com</a>.</p>
                <div><a href="http://www.telerik.com/"><img src="/img/Telerik_Logo.svg" width={300} /></a></div>
                <div><a href="http://www.mobify.com/"><img src="/img/Mobify_Logo.svg" width={280} /></a></div>
                <div><a href="http://www.ionicframework.com/"><img src="/img/Ionic_Logo.svg" width={280} /></a></div>
                <div><a href="http://www.rangle.io/"><img src="/img/Rangle.io_Logo.svg" width={300} /></a></div>
                <div><a href="http://www.onsen.io/"><img src="/img/OnsenUI_Logo.svg" width={300} /></a></div>
                <div><a href="http://monaca.io/"><img src="/img/Monaca_Logo.svg" width={300} /></a></div>
                <div><a href="http://www.visualstudio.com/"><img src="/img/VisualStudio_Logo.svg" width={300} /></a></div>
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
