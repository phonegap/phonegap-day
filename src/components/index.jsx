import React from 'react'
import { Link } from 'react-router'

export default class Index extends React.Component {
  render(){
    return(
      <div className="splash--contents">
        <div className="splash--eu2017">
          <Link to="/eu2017/" />
        </div>
        <div className="splash--us2016">
          <div className="splash--images">
            <div className="splash--image" />
            <section className="subscribe-form--splash">
              <div className="text-bounds">
                <h1>PhoneGap Day<br/>US 2017</h1>
                <div className="description">More details to come. Sign up to receive updates.</div>
              </div>
              <form action="http://nitobi.createsend.com/t/y/s/ehtuhi/" method="post" id="subForm">
                <input id="fieldEmail" className="text-email" name="cm-ehtuhi-ehtuhi" placeholder="Email" type="email" required />
                <button type="submit" className="button--cta">Subscribe</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
