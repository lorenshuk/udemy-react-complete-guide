import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     /*  Replaced for Lesson 28 2/25/20 7:10 PM
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */    
     // Lesson 30: Understanding JSX
      React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React Element'))
   );
  }
}

export default App;
