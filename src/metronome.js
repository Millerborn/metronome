import React, { Component } from 'react';
import './index.css';
import click1 from './click1.wav';
// import click2 from './click2.wav';

class Metronome extends Component {

  constructor(props) {
    super(props);
    this.click1 = new Audio(click1);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
  }

// state = {
//   playing: false,
//   count: 0,
//   bpm: 100,
//   beatsPerMeasure: 4,
//   click1: new Audio(click1)
// };

handleBpmChange = event => {
    const bpm = event.target.value;
    this.setState({ bpm });
}

startStop = () => {
  this.click1.play();
}

render() {
  const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
            <input
              type="range"
              min="50"
              max="240"
              value={bpm}
              onChange={this.handleBpmChange} />
        </div>
        <button onClick={this.startStop}>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default Metronome;
