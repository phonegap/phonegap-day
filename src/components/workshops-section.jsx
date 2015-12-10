import React from 'react'
import { Link } from 'react-router'
import data from '../../data'

class Workshop extends React.Component {
  render(){
    let speakerData = data.findSpeakerBySlug(this.props.workshop.speakerSlug)
    let speaker
    if(speakerData){
      speaker = <span className="workshop--speaker">&nbsp;
          <Link to={"/speaker/"+this.props.workshop.speakerSlug}>{speakerData.name}</Link>
        </span>
    }
    return (
      <li>
        <span className="workshop--title">{this.props.workshop.title}</span>
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
        <ul>
          {workshopGroup}
        </ul>
      </div>
    )
  }
}

export default class WorkshopsSection extends React.Component {
  render(){
    return (
      <div className="workshops">
        {this.props.workshops.map((workshop, index) =>
          <WorkshopGroup workshop={workshop} key={"workshop-group-"+index}/>
        )}
      </div>
    )
  }
}
