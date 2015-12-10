import React from 'react'
import { Link } from 'react-router'

export default class Us2016 extends React.Component {
  render(){
    return(
      <div className="splash--contents">
        <div className="splash--us2016">
          <div className="splash--images">
            <div className="splash--image" />
            <div className="splash--image" />
          </div><Link to="/us2016/" />
        </div>
        <div className="splash--eu2016">
          <Link to="/eu2016/" />
        </div>
      </div>
    )
  }
}
