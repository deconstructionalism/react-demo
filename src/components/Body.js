import React, { Component } from 'react'

import DogRow from './DogRow'

class Body extends Component {
    render() {
      const DogRows = this.props.dogInfo.map((dog, i) => {
        return (<DogRow key={i}
                breed={dog.breed}
                imgSrc={dog.imgSrc}
          />)
      })

      return (
        <div>
          <p className="App-intro">
            {this.props.bodyText}
          </p>
          {DogRows}
        </div>
      )
    }
  }

export default Body