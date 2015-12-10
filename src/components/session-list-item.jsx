import React from 'react'
import { Link } from 'react-router'

export default class SessionListItem extends React.Component {
  render() {
    let sessionListItem
    let speakerSlug = this.props.session.speakerSlug
    if (typeof this.props.session.speakerSlug !== 'undefined') {
      if(Array.isArray(speakerSlug)){
        speakerSlug = speakerSlug[0]
      }
      sessionListItem = (
        <div>{this.props.session.time}:
          <Link to={"/speaker/"+speakerSlug}> {this.props.session.title}</Link>
        </div>)
    } else {
      sessionListItem = (<div>{this.props.session.time}: {this.props.session.title}</div>)
    }
    return (
      <li>
      {sessionListItem}
      </li>
    )
  }
}
