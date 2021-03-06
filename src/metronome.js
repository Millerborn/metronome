import React, { Component } from 'react';
import './index.css';
import click1 from './sounds/click1.wav';
import click2 from './sounds/click2.wav';

class Metronome extends Component {
  
state = {
  playing: false,
  count: 0,
  bpm: 100,
  beatsPerMeasure: 4,
  click1: new Audio(click1),
  click2: new Audio(click2)
};

handleBpmChange = event => {
    const bpm = event.target.value;
    this.setState({ bpm });
}

startStop = () => {
  if (this.state.playing) {
    // Stop the timer
    clearInterval(this.timer);
    this.setState({
      playing: false
    });
  } else {
    // Start a timer with the current BPM
    this.timer = setInterval(
      this.playClick,
      (60 / this.state.bpm) * 1000
    );
    this.setState(
      {
        count: 0,
        playing: true
        // Play a click "immediately" (after setState finishes)
      },
      this.playClick
    );
  }
};

playClick = () => {
  const { count, beatsPerMeasure, click1, click2 } = this.state;

  // The first beat will have a different sound than the others
  if (count % beatsPerMeasure === 0) {
    click2.play();
  } else {
    click1.play();
  }
  // Keep track of which beat we're on
  this.setState(state => ({
    count: (state.count + 1) % state.beatsPerMeasure
  }));
};

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
