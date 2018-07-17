// the react npm package
import React from 'react';

// the react-dom npm package which allows insertion of Virtual DOM into actual
// DOM at the <div id="root"/> element in index.html
import ReactDOM from 'react-dom';

// global css styles
import './index.css';

// a React Component!!!!!
import App from './App';

// where ReactDOM inserts the Virtual DOM container component <App /> into the
// actual DOM element <div id="root" />
ReactDOM.render(<App />, document.getElementById('root'));

