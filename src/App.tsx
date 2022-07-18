import { Component, onMount } from "solid-js";
import faceDetector from "./utils/faceDetecter";

import style from "./App.module.css";

const App: Component = () => {
  let canvas: HTMLCanvasElement;
  let videoElement: HTMLVideoElement;

  onMount(() => {
    faceDetector(canvas, videoElement);
  });

  return (
    <div class={style.wrapper}>
      <div class={style.detectResult}>
        <video ref={videoElement!} />
        <canvas ref={canvas!} />
      </div>
    </div>
  );
};

export default App;
