// any React component JS file requires these imports*
import React, { Component } from 'react'

import Header from '../components/Header'
import Body from '../components/Body'

import axios from 'axios'

// style and image imports
import '../styles/App.css'

// all Components start with a class of ComponentName extending the 
// base React Component class
class App extends Component {


  // any state declaration within a component needs
  // to follow this general structure
  constructor(props) {
    super(props)
    this.state = {
      headerTitle: 'Fetch!',
      bodyText: 'Puppers for everyone.',
      getDogsUrl: 'https://dog.ceo/api/breeds/image/random/',
      getDogsError: false,
      numDogs: 10,
      dogInfo: []
    }

    this.setNumDogs = this.setNumDogs.bind(this)
    this.getDogs = this.getDogs.bind(this)
  }

  setNumDogs(numDogs) {
    this.setState({ numDogs })
  }

  getDogs() {
    axios.get(`${this.state.getDogsUrl}${this.state.numDogs}`)
        .then(response => {
          const urls = response.data.message
          const dogInfo = urls.map(url => ({
            url,
            breed: url.split('/breeds/')[1].split('/')[0]
          }))          
          this.setState({ dogInfo, getDogsError: false })
        })
        .catch(() => {
          this.setState({ getDogsError: true })
        })
  }
  
  render() {

    // this stuff being returned that looks like HTML is JSX
    // (JavaScript XML)
    return (
      <div className="App">
        <Header headerTitle={this.state.headerTitle}/> 
        <Body bodyText={this.state.bodyText}
              numDogs={this.state.numDogs}
              dogInfo={this.state.dogInfo}
              getDogsError={this.state.getDogsError}
              setNumDogs={this.setNumDogs}
              getDogs={this.getDogs}
        />
      </div>
    );
  }
}

export default App;



