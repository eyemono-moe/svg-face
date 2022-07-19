import { NormalizedLandmarkList } from "@mediapipe/face_mesh";
import { Face } from "kalidokit";
import { setShape } from "../components/ShapeStore";

const animateFace = (points: NormalizedLandmarkList) => {
  let riggedFace = Face.solve(points, {
    runtime: "mediapipe",
    imageSize: { width: 400, height: 400 },
    smoothBlink: true,
  });

  if (riggedFace) {
    setShape(riggedFace);
  }
};

export default animateFace;
