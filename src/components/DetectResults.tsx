import { Camera } from "@mediapipe/camera_utils";
import { Component, onMount } from "solid-js";
import faceDetector from "../utils/faceDetecter";
import { useOptionContext } from "./context/OptionContext";
import Draggable from "draggable";

const DetectResults: Component = () => {
  const [state, _] = useOptionContext();

  let camera: Camera;
  let canvas: HTMLCanvasElement;
  let videoElement: HTMLVideoElement;
  let resultDiv: HTMLDivElement;
  let draggableWrapper: HTMLDivElement;

  onMount(async () => {
    new Draggable(resultDiv, {
      limit: draggableWrapper!,
    });
    camera = await faceDetector(canvas, videoElement);
  });

  return (
    <div class="detectWrapper" ref={draggableWrapper!}>
      <div
        class="detectResult"
        classList={{ hide: state.showDetectResult }}
        ref={resultDiv!}
      >
        <video
          ref={videoElement!}
          class="videoInput"
          classList={{ hide: state.showCamera }}
        />
        <canvas ref={canvas!} />
      </div>
    </div>
  );
};

export default DetectResults;
