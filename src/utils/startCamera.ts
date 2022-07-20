import { Camera } from "@mediapipe/camera_utils";
import { FaceMesh } from "@mediapipe/face_mesh";

const startCamera = (faceMesh: FaceMesh, videoElement: HTMLVideoElement) => {
  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({ image: videoElement });
    },
    facingMode: "user",
    width: 400,
    height: 400,
  });
  camera.start();
};

export default startCamera;
