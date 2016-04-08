import React from 'react'
import { Link } from 'react-router'
import data from '../../data'

class Workshop extends React.Component {
  render(){
    let session
    if (Array.isArray(this.props.workshop.speakerSlug)){
      let speakers = []
      for (let [index, speakerSlug] of this.props.workshop.speakerSlug.entries()) {
        let speakerData = data.findSpeakerBySlug(speakerSlug)
        speakers.push(speakerData)
      }
      session = (
        <span>
          <span className="workshop--title">{this.props.workshop.title}</span>
          <div>
            <ul className="workshop--speaker-list">
              {speakers.map((speakerObject, index) =>
                <li key={speakerObject.id+"-"+speakerObject.slug}><Link to={"/us2016/speaker/"+speakerObject.slug}>{speakerObject.name}</Link></li>
              )}
            </ul>
          </div>
        </span>
      )
    } else if (this.props.workshop.speakerSlug != "") {
      let speakerData = data.findSpeakerBySlug(this.props.workshop.speakerSlug)
      session = (
        <span>
          <span className="workshop--title">
            <Link to={"/us2016/speaker/"+this.props.workshop.speakerSlug}>{this.props.workshop.title}</Link>
          </span>
          <div>
            <span className="workshop--speaker">{speakerData.name}</span>
          </div>
        </span>
      )
    } else {
      session = (
        <span>
          <span className="workshop--title">{this.props.workshop.title}</span>
        </span>
      )
    }
    return (
      <li>
        {session}
      </li>
    )
  }
}

class WorkshopGroup extends React.Component {
  render(){
    let workshopGroup
    if (this.props.workshop.hasOwnProperty('sessions')){
      workshopGroup = this.props.workshop.sessions.map((session, index) =>
        <Workshop workshop={session} key={"workshop-"+index} />
      )
    } else {
      workshopGroup = <li>{this.props.workshop.title}</li>
    }

    return (
      <div className="workshop--group">
        <header><h2 className="workshop--time">{this.props.workshop.time}</h2></header>
        <ul className="workshop--list">
          {workshopGroup}
        </ul>
      </div>
    )
  }
}

export default class WorkshopsSection extends React.Component {
  render(){
    let workshopHeader
    if (this.props.heading) {
      workshopHeader = <h1>{this.props.heading}</h1>
    }
    return (
      <section>
        <div className="text-bounds">
          {workshopHeader}
          <div className="workshops">
            {this.props.workshops.map((workshop, index) =>
              <WorkshopGroup workshop={workshop} key={"workshop-group-"+index}/>
            )}
          </div>
        </div>
      </section>
    )
  }
}
