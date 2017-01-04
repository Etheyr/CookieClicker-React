import React, { Component } from 'react';
import logo from './cookie.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img onClick="#" src={logo} className="App-logo" alt="logo" />
      <h2 className="titleh2">0</h2>
      </div>
      <div className="timerSpan">
    
      </div>
      </div>
      );
    }
  }

  export default App;
