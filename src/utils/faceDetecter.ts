import { FaceMesh } from "@mediapipe/face_mesh";
import drawFaceMesh from "./drawFaceMesh";
import startCamera from "./startCamera";

const faceDetector = (
  canvas: HTMLCanvasElement,
  videoElement: HTMLVideoElement
) => {
  // create media pipe faceMesh instance
  const faceMesh = new FaceMesh({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    },
  });

  // set faceMesh config
  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  // pass facemesh callback function
  faceMesh.onResults((results) => {
    drawFaceMesh(results.multiFaceLandmarks[0], canvas, {
      width: videoElement.videoWidth,
      height: videoElement.videoHeight,
    });
    // todo: animateSvgFace();
  });

  startCamera(faceMesh, videoElement);
};

export default faceDetector;