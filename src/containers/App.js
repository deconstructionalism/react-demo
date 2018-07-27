// any React component JS file requires these imports*
import React, { Component } from 'react';

import Header from '../components/Header';
import Body from '../components/Body';

// style and image imports
import '../styles/App.css';

// all Components start with a class of ComponentName extending the 
// base React Component class
class App extends Component {




  // any state declaration within a component needs
  // to follow this general structure
  constructor(props) {
    super(props)
    this.state = {
      headerTitle: 'Welcome to GA',
      bodyText: 'No free refills.',
      dogInfo: [
        {
          imgSrc: "https://images.dog.ceo/breeds/pug/n02110958_3795.jpg",
          breed: 'pug' 
        },
  
        {
          imgSrc: "https://images.dog.ceo/breeds/groenendael/n02105056_2552.jpg",
          breed: 'groenendael'
        },
        {
          imgSrc: "https://images.dog.ceo/breeds/dane-great/n02109047_5910.jpg",
          breed: 'dane-great'
        }
      ]
    }
  }
  
  render() {

    // this stuff being returned that looks like HTML is JSX
    // (JavaScript XML)
    return (
      <div className="App">
        <Header headerTitle={this.state.headerTitle}/> 
        <Body bodyText={this.state.bodyText}
              dogInfo={this.state.dogInfo}
        />
      </div>
    );
  }
}

export default App;



