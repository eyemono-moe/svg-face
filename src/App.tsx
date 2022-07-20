import { Component, createSignal, onMount } from "solid-js";
import faceDetector from "./utils/faceDetecter";

import Face from "./components/Face";
import { shape } from "./components/ShapeStore";

const App: Component = () => {
  const [full, setFull] = createSignal(true);

  let canvas: HTMLCanvasElement;
  let videoElement: HTMLVideoElement;

  onMount(() => {
    faceDetector(canvas, videoElement);
  });

  const cameraOffSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-camera-video-off"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56-10-14 .814-.58 10 14-.814.58z"
      />
    </svg>
  );

  const cameraOnSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-camera-video"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
      />
    </svg>
  );

  return (
    <>
      <div class="detectWrapper" classList={{ hide: full() }}>
        <div class="detectResult">
          <video ref={videoElement!} class="videoInput" />
          <canvas ref={canvas!} />
        </div>
      </div>
      <div classList={{ smallSize: !full(), fullSize: full() }}>
        <button
          onClick={() => {
            setFull(!full());
          }}
          id="toggleButton"
        >
          {full() ? cameraOnSvg : cameraOffSvg}
        </button>
        <Face shape={shape} />
      </div>
    </>
  );
};

export default App;
