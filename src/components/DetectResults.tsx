import { Camera } from "@mediapipe/camera_utils";
import { Component, onMount } from "solid-js";
import faceDetector from "../utils/faceDetecter";
import { useOptionContext } from "./context/OptionContext";
import Draggable from "./parts/Draggable";

const DetectResults: Component = () => {
  const [state, setState] = useOptionContext();

  let camera: Camera;
  let canvas: HTMLCanvasElement;
  let videoElement: HTMLVideoElement;
  let resultDiv: HTMLDivElement;

  onMount(async () => {
    setState("loaded", false);
    camera = await faceDetector(canvas, videoElement);
  });

  return (
    <Draggable>
      <div
        class="detectResult"
        classList={{ hide: !state.showDetectResult }}
        ref={resultDiv!}
      >
        <video
          ref={videoElement!}
          class="videoInput"
          classList={{ hide: !state.showCamera }}
        />
        <canvas ref={canvas!} />
      </div>
    </Draggable>
  );
};

export default DetectResults;
