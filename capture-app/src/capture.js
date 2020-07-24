// See https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
// for the original version of this code with detailed explanation.

export { startCapture, stopCapture };

// Options for getDisplayMedia()

var displayMediaOptions = {
    video: {
        cursor: "always"
    },
    audio: true
    //audio: false
    //audio: {
    //    echoCancellation: true,
    //    noiseSuppression: true,
    //    sampleRate: 44100
    //}
}

let chunks = [];

let mediaRecorder = null;

async function startCapture() {

    console.info("Info: startCapture");

    const videoElem = document.getElementById("video");
    try {
        const displayStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoElem.srcObject = displayStream;
        mediaRecorder = new MediaRecorder(displayStream, {mimeType: "video/webm"});
        mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
        };
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        dumpOptionsInfo();
    } catch (err) {
        console.error("Error: " + err);
    }
}

function download(data) {
    var blob = new Blob(data, {
      type: "video/webm"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  }
  

function stopCapture() {

    console.log(mediaRecorder.state);
    console.log(chunks.length);
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
    console.log("recorder stopped");

    download(chunks);

    const videoElem = document.getElementById("video");
    let tracks = videoElem.srcObject.getTracks();

    tracks.forEach(track => track.stop());
    videoElem.srcObject = null;
}

function dumpOptionsInfo() {
    const videoElem = document.getElementById("video");
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
