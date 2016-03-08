import React from 'react'
import { Link } from 'react-router'

class SpeakerItem extends React.Component {
  render() {
    let pageURL
    if (this.props.hasOwnProperty('pageSlug')) {
      pageURL = "/"+this.props.pageSlug+"/speaker/"
    } else {
      pageURL = "/us2016/speaker/"
    }
    return (
      <li className="speaker">
        <Link to={pageURL+this.props.speaker.slug}>
          <img src={this.props.speaker.avatar} className="speaker--photo" />
        </Link>
        <h2 className="speaker--name">
          <Link to={pageURL+this.props.speaker.slug}>{this.props.speaker.name}</Link>
        </h2>
        <h3 className="speaker--title">
          <Link to={pageURL+this.props.speaker.slug}>{this.props.speaker.title}</Link>
        </h3>
      </li>
    )
  }
}

export default class SpeakersSection extends React.Component {
  render(){
    return (
      <section className="speaker-section">
        <div className="text-bounds">
          <h1>{this.props.heading}</h1>
          <ul className="speaker-list">
            {this.props.speakers.map(speaker =>
              <SpeakerItem key={speaker.id} speaker={speaker} pageSlug={this.props.pageSlug}/>
            )}
          </ul>
        </div>
      </section>
    )
  }
}
