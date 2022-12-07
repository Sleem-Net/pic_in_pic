const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//!Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.omloadmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    // CatchError Here
    console.log("error here!!");
  }
}

//! On Load

selectMediaStream();
