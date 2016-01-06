import React from 'react'
import data from '../../data'
import { Link } from 'react-router'


class SessionItem extends React.Component {
  createMarkup() {
    return {__html: "<div>"+this.props.session.description+"</div>"}
  }
  render() {
    return (
      <div className="session">
        <h3 className="session--title">{this.props.session.title}</h3>
        <div className="session--time">{this.props.session.time}</div>
        <div className="session--description" dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    )
  }
}

class WorkshopDetails extends React.Component {
  render() {
    return(
      <div className="workshops">
        <h2 className="sessions--heading">
          {this.props.workshops.length > 1 ? 'Workshops' : 'Workshop'}
        </h2>
        {this.props.workshops.map(workshop =>
          <SessionItem key={workshop.time} session={workshop} />
        )}
      </div>
    )
  }
}

export default class SpeakerPage extends React.Component {
  handleClick(e) {
    if(window.fromHome){
      window.fromHome = false
      this.props.history.goBack()
      e.preventDefault()
      e.stopPropagation()
    }
  }
  componentDidMount(){
    this.fromHome = window.fromHome
  }
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
    let workshops = (data.findWorkshopBySpeakerSlug(this.props.params.slug))
    let workshopSection
    if (workshops.length > 0) {
      workshopSection = <WorkshopDetails workshops={workshops}/>
    }
    return (
      <div id="content" className="speaker-page-content">
        <header className="speaker-page--header">
          <Link to="/" onClick={this.handleClick.bind(this)}>
            <img src="/img/pgd_logo.svg" />
          </Link>
        </header>
        <div className="text-bounds speaker">
          <Link to="/" onClick={this.handleClick.bind(this)}>&lt; {this.fromHome ? "Back" : "Home"}</Link>
          <div><img className="speaker--photo" src={speaker.avatar} alt={speaker.name} /></div>
          <h1 className="speaker--name">{speaker.name}</h1>
          <h2 className="speaker--title">{speaker.title}</h2>
          <div  className="speaker--bio">{speaker.bio}</div>
          {twitter}
          {sessionSection}
          {workshopSection}
        </div>
      </div>
    )
  }
}
