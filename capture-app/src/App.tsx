import React from 'react';
import './App.css';

import {startCapture, stopCapture} from './capture';

//import capture = require('./capture');

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      </header>
      <p>This example shows you the contents of the selected part of your display.
Click the Start Capture button to begin.</p>

      <p><button id="start" onClick={startCapture}>Start Capture</button>&nbsp;<button id="stop" onClick={stopCapture}>Stop Capture</button></p>

      <video id="video" autoPlay></video>
      <br></br>

      <strong>Log:</strong>
      <br></br>
      <pre id="log"></pre>
    </div>
  );
}

export default App;
