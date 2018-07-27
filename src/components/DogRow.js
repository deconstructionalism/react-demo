import React, { Component } from 'react'

import '../styles/DogRow.css'

export default class DogRow extends Component {
    render() {
    return (
      <div className="dog-row">
            <span>{this.props.breed}</span>
            <img src={this.props.imgSrc} />   
      </div>
    )
  }
}
