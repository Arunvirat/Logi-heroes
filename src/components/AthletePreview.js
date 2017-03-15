'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AthletePreview extends React.Component {
  calculateTotalPoints()
  {
    var totalpoints =0;
    var myGameRows =this.props.medals;
    if(myGameRows.length>0)
    {
      for(var s=0;s<myGameRows.length; s++)
      {
       totalpoints = totalpoints + parseInt(myGameRows[s].category);
      }
    }
    return totalpoints;
  }
  render() {
    return (
      <Link to={`/athlete/${this.props.id}`}>
        <div className="athlete-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count"><img src="/img/medal.png"/> {this.calculateTotalPoints()}</span>
        </div>
      </Link>
    );
  }
}
