import { Component, onMount } from "solid-js";
import faceDetector from "./utils/faceDetecter";

import style from "./App.module.css";
import Face from "./components/Face";
import { shape } from "./components/ShapeStore";

const App: Component = () => {
  let canvas: HTMLCanvasElement;
  let videoElement: HTMLVideoElement;

  onMount(() => {
    faceDetector(canvas, videoElement);
  });

  return (
    <>
      <div class={style.detectWrapper}>
        <div class={style.detectResult}>
          <video ref={videoElement!} class={style.videoInput} />
          <canvas ref={canvas!} />
        </div>
      </div>
      <Face shape={shape} />
    </>
  );
};

export default App;
