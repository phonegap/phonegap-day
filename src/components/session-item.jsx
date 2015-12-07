import React from 'react'
import { Link } from 'react-router'

export default class SessionItem extends React.Component {
  render() {
    return (
      <div className="session">
        <h3 className="session--title">{this.props.session.title}</h3>
        <div className="session--time">{this.props.session.time}</div>
        <div className="session--description">{this.props.session.description}</div>
      </div>
    )
  }
}
