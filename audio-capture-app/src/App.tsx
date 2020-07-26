import React from 'react';
import './App.css';
import { useState } from "react";
import { startAudioCapture, stopCapture } from './audio_capture';

const logArray = Array(<></>);

function App() {


  // This logging to the page rather than the console is an
  // interesting trick borrowed from the MDN example (see capture.js),
  // However it's probably not a good idea to use this regularly.
  const [log, setLog] = useState(<></>);

  let updateLog = (cl: string, msg: string) => {
    logArray.push(<span className={cl}>{msg}<br></br></span>);
    setLog(<>{[...logArray]}</>);
  }

  console.log = (msg: any) => updateLog("info", msg);
  console.error = (msg: any) => updateLog("error", msg);
  console.warn = (msg: any) => updateLog("warn", msg);
  console.info = (msg: any) => updateLog("info", msg);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      </header>
      <p>This example shows you the contents of the selected part of your display.
Click the Start Capture button to begin.</p>

      <p><button id="start" onClick={startAudioCapture}>Start Audio Capture</button>&nbsp;<button id="stop" onClick={stopCapture}>Stop Capture</button></p>

      <br></br>

      <strong>Log:</strong>
      <br></br>
      <pre id="log">{log}</pre>
    </div>
  );
}

export default App;
