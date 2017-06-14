import React from 'react'
import { Link } from 'react-router'

export default class Index extends React.Component {
  render(){
    return(
      <div className="splash--contents">
        <div className="splash--us2017">
          <div className="splash--images">
            <div className="splash--image" />
            <div className="splash--image" />
          </div><Link to="/us2017/" />
        </div>
        <div className="splash--eu2017">
          <Link to="/eu2017/" />
        </div>
      </div>
    )
  }
}
