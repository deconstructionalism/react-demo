import React, { Component } from 'react';

class Body extends Component {
    render() {
      return (
        <p className="App-intro">
           {this.props.bodyText}
        </p>
      )
    }
  }

export default Body