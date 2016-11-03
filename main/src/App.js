import React, { Component } from 'react';
import logo from './logo.svg';
import waves from './waves.mp4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <video className="vid" preload="auto" autoPlay muted loop src ={waves}>
          </video>
          <div className="name">
            <h2> Andrew Smith </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
