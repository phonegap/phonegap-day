import React from 'react'
import { Link } from 'react-router'

export default class SpeakerPage extends React.Component {
  render() {
    return (
      <li className="speaker">
        <Link to={"/speaker/"+this.props.speaker.slug}>
          <img src={this.props.speaker.avatar} className="speaker--photo" />
        </Link>
        <h2 className="speaker--name">
          <Link to={"/speaker/"+this.props.speaker.slug}>{this.props.speaker.name}</Link>
        </h2>
        <h3 className="speaker--title">
          <Link to={"/speaker/"+this.props.speaker.slug}>{this.props.speaker.title}</Link>
        </h3>
      </li>
    )
  }
}
