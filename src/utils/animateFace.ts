import { NormalizedLandmarkList } from "@mediapipe/face_mesh";
import { Face } from "kalidokit";

const animateFace = (points: NormalizedLandmarkList) => {
  let riggedFace = Face.solve(points, {
    runtime: "mediapipe",
    imageSize: { width: 640, height: 480 },
  });
  // console.log(riggedFace);
  // {
  //   "head": {
  //       "y": -0.17814144157315626,
  //       "x": -0.09922688157941659,
  //       "z": -0.047426268655864585,
  //       "width": 166.09897933484285,
  //       "height": 126.89352885138089,
  //       "position": {
  //           "x": 314.48058128356934,
  //           "y": 240.86913585662842,
  //           "z": 50.062987208366394
  //       },
  //       "normalized": {
  //           "y": -0.056704181991767764,
  //           "x": -0.03158489738191657,
  //           "z": -0.015096250177970135
  //       },
  //       "degrees": {
  //           "y": -10.206752758518197,
  //           "x": -5.685281528744983,
  //           "z": -2.7173250320346245
  //       }
  //   },
  //   "eye": {
  //       "l": 1,
  //       "r": 1
  //   },
  //   "brow": 0,
  //   "pupil": {
  //       "x": -0.07266738392941219,
  //       "y": -0.4596464107864407
  //   },
  //   "mouth": {
  //       "x": -0.5496731216869687,
  //       "y": 0,
  //       "shape": {
  //           "A": 0,
  //           "E": 0,
  //           "I": 0,
  //           "O": 0,
  //           "U": 0
  //       }
  //   }
  // }
};

export default animateFace;
