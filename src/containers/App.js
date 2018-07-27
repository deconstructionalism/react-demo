// any React component JS file requires these imports*
import React, { Component } from 'react';

import Header from '../components/Header';
import Body from '../components/Body';

// style and image imports
import '../styles/App.css';

// all Components start with a class of ComponentName extending the 
// base React Component class
class App extends Component {
  
  render() {

    const headerTitle = "Welcome to Hell"
    const bodyText = "No free refills."

    // this stuff being returned that looks like HTML is JSX
    // (JavaScript XML)
    return (
      <div className="App">
        <Header headerTitle={headerTitle}/>
        <Body bodyText={bodyText}/>
      </div>
    );
  }
}

export default App;



