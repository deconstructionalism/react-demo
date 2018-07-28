import React, { Component } from 'react'

import '../styles/DogRow.css'

class DogRow extends Component {
    render() {
    return (
      <div className="dog-row">
        <span>
            {this.props.breed}
            <a title={`search for ${this.props.breed}s on Wikipedia`}
                className="search-wiki"
                target="_blank"
                href={`https://en.wikipedia.org/wiki/api.php%20?action=opensearch%20&search=${this.props.breed}`}>
              <i className="fas fa-search"></i>
            </a>
        </span>
        <img src={this.props.url}
              alt={this.props.breed}/>
      </div>
    )
  }
}

export default DogRow