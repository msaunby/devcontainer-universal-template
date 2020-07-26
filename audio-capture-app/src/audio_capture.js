
export { enableMicrophone, disableMicrophone, startAudioCapture, stopAudioCapture };


let mediaOptions = {
    video: false,
    audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100
    }
};

let chunks = [];

let mediaRecorder = null;
let audioStream = null;

async function enableMicrophone() {
    try {

        audioStream = await navigator.mediaDevices.getUserMedia(mediaOptions);
    } catch (err) {
        console.error("Error: " + err);
    }
}

function disableMicrophone() {
    try {
        let tracks = audioStream.getTracks();
        tracks.forEach(track => track.stop());
        audioStream = null;
    } catch (err) {
        console.error("Error: " + err);
    }
}

function startAudioCapture() {
    console.info("Info: startAudioCapture");
    mediaRecorder = new MediaRecorder(audioStream);
    mediaRecorder.onstop = (e) => { console.log("audio recorder stopped"); };
    mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
    };
    mediaRecorder.start(100); // Default behavoiur wasn't working. Slices do.
    console.log(mediaRecorder.state);
    console.log("recorder started");
}

function download(data) {
    let blob = new Blob(data, { 'type': 'audio/ogg; codecs=opus' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.ogg";
    a.click();
    window.URL.revokeObjectURL(url);
}


function stopAudioCapture() {
    mediaRecorder.requestData();
    mediaRecorder.stop();

    download(chunks);
}


