import { Component } from "solid-js";

import Face from "./components/face/Face";
import { shape } from "./components/ShapeStore";
import Controls from "./components/Controls";
import DetectResults from "./components/DetectResults";

const App: Component = () => {
  return (
    <>
      <DetectResults />
      <Controls />
      <Face shape={shape} />
    </>
  );
};

export default App;
