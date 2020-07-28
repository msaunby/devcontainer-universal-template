import React from 'react';
import './App.css';
import { useState } from "react";
import { enableMicrophone, disableMicrophone, startAudioCapture, stopAudioCapture } from './audio_capture';
import {  startScreenCapture, stopScreenCapture, enableScreenCap, disableScreenCap } from './capture';


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

      <p>
        <button id="enable" onClick={enableMicrophone}>Enable Microphone/Audio</button>
        <button id="start" onClick={startAudioCapture}>Start Audio Capture</button>
        <button id="stop" onClick={stopAudioCapture}>Stop Audio Capture</button>
        <button id="disable" onClick={disableMicrophone}>Disable Microphone</button>
      </p>
      <p>
        <button id="enableScr" onClick={enableScreenCap}>Enable Screen</button>
        <button id="startScr" onClick={startScreenCapture}>Start Screen Capture</button>
        <button id="stopScr" onClick={stopScreenCapture}>Stop Screen Capture</button>
        <button id="disableScr" onClick={disableScreenCap}>Disable Screen</button>
      </p>
      <p>
      <button id="download" >Download</button>
      <button id="upload" >Upload</button>
      </p>

      <video id="video" autoPlay></video>
      <br></br>

      <strong>Log:</strong>
      <div style={{textAlign:'left'}}>
      <br></br>
      <pre>{log}</pre>
      </div>
    </div>
  );
}

export default App;
