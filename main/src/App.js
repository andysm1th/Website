import React, { Component } from 'react';
import logo from './logo.svg';
import waves from './waves.mp4';
import './App.css';
import './font-awesome-4.4.0/font-awesome-4.4.0/css/font-awesome.min.css';
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
</style>
import FontAwesome from 'react-fontawesome';
import spaceship from './spaceship.jpg';
import self from './pic.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <video className="vid" preload="auto" autoPlay muted loop src ={waves}>
          </video>
          <h2 className="name"> Andrew Smith </h2>
          <ul className = "horizontal-list">
          <li>
            <div className="self">
              <img className="myPhoto" src={self} />
            </div>
          </li>
          </ul>
          <div className="flex-container">
            <a href = "https://www.facebook.com/eeandyee">
              <FontAwesome
                name='facebook'
                size='2x'
                className="facebook"
              />
            </a>
            <a href = "https://github.com/ogsmith">
              <FontAwesome
                name='github'
                size='2x'
                className="github"
              />
            </a>
            <a href = "https://www.instagram.com/andysm1th22/">
              <FontAwesome
                name='instagram'
                size='2x'
                className="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
