import React from 'react'
import { Link } from 'react-router'

export default class SessionListItem extends React.Component {
  render() {
    let sessionListItem
    if (typeof this.props.session.speakerSlug !== 'undefined') {
      sessionListItem = (
        <div>{this.props.session.time}:
          <Link to={"/speaker/"+this.props.session.speakerSlug}> {this.props.session.title}</Link>
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
