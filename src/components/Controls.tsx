import { Component } from "solid-js";
import ToggleCameraControl from "./parts/ToggleCameraControl";
import ToggleResultControl from "./parts/ToggleResultControl";

const Controls: Component = () => {
  return (
    <div class="control">
      <ToggleCameraControl />
      <ToggleResultControl />
    </div>
  );
};

export default Controls;
