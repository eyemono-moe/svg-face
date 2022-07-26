import { Component } from "solid-js";

import Controls from "./components/Controls";
import DetectResults from "./components/DetectResults";
import FaceWrapper from "./components/FaceWrapper";

const App: Component = () => {
  return (
    <>
      <DetectResults />
      <Controls />
      <FaceWrapper />
    </>
  );
};

export default App;
