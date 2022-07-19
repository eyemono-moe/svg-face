import { TFace } from "kalidokit";
import { createStore } from "solid-js/store";

const defaultShape: TFace = {
  eye: { l: 1, r: 1 },
  mouth: {
    x: 0,
    y: 0,
    shape: { A: 0, E: 0, I: 0, O: 0, U: 0 },
  },
  head: {
    x: 0,
    y: 0,
    z: 0,
    width: 100,
    height: 100,
    position: { x: 200, y: 200, z: 0 },
    normalized: { x: 0, y: 0, z: 0 },
    degrees: { x: 0, y: 0, z: 0 },
  },
  brow: 0,
  pupil: { x: 0, y: 0 },
};

const [shape, setShape] = createStore<TFace>(defaultShape);

export { shape, setShape };
