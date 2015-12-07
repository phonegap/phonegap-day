import React from 'react'
import data from '../../data'
import { Link } from 'react-router'
import SessionItem from './session-item.jsx'

export default class SpeakerPage extends React.Component {
  render() {
    let speaker = data.findSpeakerBySlug(this.props.params.slug)
    let sessions = data.findSessionBySpeakerSlug(this.props.params.slug)
    let sessionSection
    if (sessions.length > 0) {
      sessionSection = (<div className="sessions">
        <h2 className="sessions--heading">Session</h2>
        {sessions.map(session =>
          <SessionItem key={session.time} session={session} />
        )}
        </div>)
    }
    let twitter
    if (speaker.twitter) {
      twitter = <div><a href={"https://twitter.com/"+speaker.twitter}>@{speaker.twitter}</a></div>
    }
    return (
      <div id="content" className="speaker-page-content">
        <header className="speaker-page--header">
          <Link to="/">
            <img src="/img/pgd_logo.svg" />
          </Link>
        </header>
        <div className="text-bounds speaker">
          <Link to="/">&lt; Home</Link>
          <div><img className="speaker--photo" src={speaker.avatar} alt={speaker.name} /></div>
          <h1 className="speaker--name">{speaker.name}</h1>
          <h2 className="speaker--title">{speaker.title}</h2>
          <div  className="speaker--bio">{speaker.bio}</div>
          {twitter}
          {sessionSection}
        </div>
      </div>
    )
  }
}
