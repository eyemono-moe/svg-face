import { Component, Show } from "solid-js";
import { useOptionContext } from "./context/OptionContext";
import Face from "./face/Face";
import Loading from "./parts/Loading";
import { shape } from "./ShapeStore";

const FaceWrapper: Component = () => {
  const [state, _] = useOptionContext();

  return (
    <Show when={state.loaded} fallback={<Loading />}>
      <Face shape={shape} />
    </Show>
  );
};

export default FaceWrapper;
