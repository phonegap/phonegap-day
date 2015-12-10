import React from 'react'
import { Link } from 'react-router'
import data from '../../data'

class Workshop extends React.Component {
  render(){
    let speakerData = data.findSpeakerBySlug(this.props.workshop.speakerSlug)
    let speaker = <h2>test</h2>
    if(speakerData) {
      speaker = (
        <span>
          <span className="workshop--title">
            <Link to={"/us2016/speaker/"+this.props.workshop.speakerSlug}>{this.props.workshop.title}</Link>
          </span>
          <span className="workshop--speaker">{speakerData.name}</span>
        </span>
      )
    } else {
      speaker = (
        <span>
          <span className="workshop--title">{this.props.workshop.title}</span>
        </span>
      )
    }
    return (
      <li>
        {speaker}
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
    return (
      <section>
        <div className="text-bounds">
          <h1>{this.props.heading}</h1>
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
