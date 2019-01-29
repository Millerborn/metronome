import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Metronome from './metronome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Metronome />
      </div>
    );
  }
}

export default App;
