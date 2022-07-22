import { Camera } from "@mediapipe/camera_utils";

const startCamera = (onFrame: ()=>Promise<void>, videoElement: HTMLVideoElement) => {
  const camera = new Camera(videoElement, {
    onFrame: onFrame,
    facingMode: "user",
    width: 400,
    height: 400,
  });
  camera.start();
};

export default startCamera;
