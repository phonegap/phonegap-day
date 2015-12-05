import React from 'react'
import { speakers } from '../../data'
import { Link } from 'react-router'

import SpeakerItem from './speaker-item.jsx'

//{speakers.map(speaker =>
//<li><Link key={speaker.id} to={"/speaker/"+speaker.slug}>{speaker.name}</Link></li>
//)}

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <div className="header-bounds">
            <div className="ipad-air2"><img src="img/ipad-air2.svg" />
              <div className="content-mask" />
            </div>
            <div className="galaxy-s6"><img src="img/galaxy-s6.svg" />
              <div className="content-mask" />
            </div>
            <div className="iphone-6"><img src="img/iphone-6.svg" />
              <div className="content-mask" />
            </div>
            <div className="nexus-9"><img src="img/nexus-9.svg" />
              <div className="content-mask" />
            </div>
            <div className="fire-hdx"><img src="img/fire-hdx-8.9.svg" />
              <div className="content-mask" />
            </div>
            <div className="lumia-640xl"><img src="img/lumia-640xl.svg" />
              <div className="content-mask" />
            </div>
            <div className="one-m9"><img src="img/one-m9.svg" />
              <div className="content-mask" />
            </div>
            <div className="logo"><img src="img/pgd_logo.svg" /></div>
            <div className="adobe-logo"><a href="http://adobe.com"><img src="img/adobe-logo.svg" /></a></div>
          </div>
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day</h1>
              <h2 className="subhead">
                <time dateTime="2016-01-29">Jan 29, 2016</time> • <span className="city">Lehi, UT</span>
              </h2>
              <div className="description">A one day conference and workshops for PhoneGap, web, and mobile developers.</div>
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
          <section className="speaker-section">
            <div className="text-bounds">
              <h1>Speakers</h1>
              <ul className="speaker-list">
                {speakers.map(speaker =>
                  <SpeakerItem key={speaker.id} speaker={speaker} />
                )}
              </ul>
            </div>
          </section>
          <section>
            <div className="text-bounds">
              <h1>Workshops</h1>
              <p>We’re changing up workshops this year so you can choose your own adventure. We’ll have great content going all day where you can choose from three different workshop tracks depending on your interests and skill-level. We’ll have something for everyone whether you’re a PhoneGap beginner or a seasoned expert.</p>
            </div>
          </section>
          <section className="schedule-section">
            <div className="text-bounds">
              <h1>Schedule</h1>
              <ul>
                <li>
                  <h2>8:30am-9:00am - Registration and breakfast</h2>
                </li>
                <li>
                  <h2>9:00am-9:15am – Michael Brooks “PhoneGap kick off”</h2>
                </li>
                <li>
                  <h2>9:15am-9:55am – Eric Alli “Mind the Gap: Supercharge your PhoneGap workflow”</h2>
                  <p>Developing a complex and sustainable PhoneGap app can present many challenges. As your app grows, a seamless development workflow is crucial. Can you efficiently deploy and test in different environments? What are your pain points when implementing new functionality? How can you organize all the facets of your app with minimal effort? Mind the gap focuses on some of the ways you can create a development workflow that automates these inefficiencies, boosts scalability and most of all, preserves developer sanity.</p>
                </li>
                <li>
                  <h2>9:55am-10:15am – Martin Poschenrieder “Automated App Testing: A pain or cure?”</h2>
                  <p>At testmunk we have been working with many popular apps by helping them ship better apps faster. We have automated testing for various Phonegap/Cordova apps (as well as others), allowing for quick detection of layout issues and crashes.</p>
                  <p>In this talk I'd like to touch on some of the testing challenges developers/QAs come across due to today’s large device and OS fragmentation, and how automated testing can ease some of these issues. I will also show some examples of how developers can quickly set up their own automated tests and run them on a large set of devices</p>
                </li>
                <li>
                  <h2>10:15am-10:35am – Shawn Jansepar and Loki Meyburg (Mobify) “Finding the sweet spot - blending the best of native and web”</h2>
                  <p>Choose the best technology for the job. Too often projects begin as hybrid apps, but switch to native for performance reasons. But it’s almost never the case that all features of your app need to be fully native. Today, many apps such as Amazon, Basecamp, Yelp and more take a blended approach. We'll guide you through case studies of how we build high performance apps that blend the best of native and web and highlight lessons we've learned along the way.</p>
                </li>
                <li>
                  <h2>10:35am-10:45am – BREAK</h2>
                </li>
                <li>
                  <h2>10:45am-11:05 – Mike Hartington (Ionic) “Ionic: Version 2 and Beyond”</h2>
                  <p>“Ionic 1.0 has enabled many web developers to become mobile app developers. With the arrival of Angular 2 and its changes, and with ES6 being finalized, development has been improved yet again. How will that impact Ionic?</p>
                  <p>In this session, we’ll compare Ionic 1 and Ionic 2 and go over what we've learned, what improvements we're making to Ionic, and how easy it will be to develop apps with Ionic 2.”</p>
                </li>
                <li>
                  <h2>11:05am-11:30am – Dean Haddock “Story Corps case study”</h2>
                </li>
                <li>
                  <h2>11:30am-12:10pm – Alex Blom “PhoneGap Applications with Ember: Lessons learned”</h2>
                  <p>The benefits of hybrid applications are obvious (less code, simpler code, iterate faster). Developers often make quick pace, boot their app and then hit a wall trying to make it 'feel native'.</p>
                  <p>This talk will discuss lessons learned &amp; optimization techniques from having built many apps with Ember &amp; phonegap. While this talk uses Ember &amp; Ember packages, the tools and techniques discussed generically apply to any Phonegap application.</p>
                </li>
                <li>
                  <h2>12:10am-12:30pm – TBD (Masa Tanaka)</h2>
                </li>
                <li>
                  <h2>12:30pm-1:20pm – LUNCH</h2>
                </li>
                <li>
                  <h2>1:20pm-1:40pm – Ryan J. Salva (Microsoft Visual Studio)</h2>
                </li>
                <li>
                  <h2>1:40pm-2:20pm – Jed Watson</h2>
                </li>
                <li>
                  <h2>2:20pm-2:40pm – Ray Camden “When the heck is 4/8/2016?”</h2>
                  <p>This talk will cover basic internationalization, globalization issues with Cordova apps. I'll talk about the Globalization plugin (and how to work around the async nature of the plugin), the Intl class, and other options. Also, I'll discuss why you should give a damn as a developer.</p>
                </li>
                <li>
                  <h2>2:40pm-3:00pm – Rangle.io</h2>
                </li>
                <li>
                  <h2>3:00pm-3:30pm – Bruce Lefebvre “PhoneGap Enterprise and Adobe Experience Manager”</h2>
                </li>
                <li>
                  <h2>3:30pm-3:45pm – BREAK</h2>
                </li>
                <li>
                  <h2>3:45pm-4:15pm – Ryan Hanna “Build and Market Your App: Small Team Success”</h2>
                  <p>This talk will provide the tools and methodologies to help any solo developer or small team build and then market their app to ensure it has the best chance for success. We'll take a transparent look at the early beginnings of Sworkit to where it is now. From a single developer to a team of 10 employees, and from 10 downloads to 10 million. This talk will be a combination of the development and marketing lessons learned and implemented along the way.</p>
                </li>
                <li>
                  <h2>4:15pm-4:55pm – TBD</h2>
                </li>
                <li>
                  <h2>4:55pm-5:15pm – Shazron Abdullah</h2>
                </li>
                <li>
                  <h2>5:15pm 5:35pm – TJ VanToll and Brian Rinaldi (Telerik)</h2>
                </li>
                <li>
                  <h2>5:35pm-6:00pm – Panel</h2>
                </li>
                <li>
                  <h2>6:00pm-8:00pm – Pub mixer and networking</h2>
                </li>
              </ul>
            </div>
          </section>
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
          <section><img src="img/lehi-office.jpg" className="full" /><a href="https://goo.gl/maps/4f5admiUNPn" className="map" /></section>
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
                <div><a href="http://www.telerik.com/"><img src="img/Telerik_Logo.svg" width={300} /></a></div>
                <div><a href="http://www.mobify.com/"><img src="img/Mobify_Logo.svg" width={280} /></a></div>
                <div><a href="http://www.ionicframework.com/"><img src="img/Ionic_Logo.svg" width={280} /></a></div>
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
