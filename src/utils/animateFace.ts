import { NormalizedLandmarkList } from "@mediapipe/face_mesh";
import { Face, TFace } from "kalidokit";
import { setShape } from "../components/ShapeStore";

const FACES: TFace[] = [];
const AVERAGE_NUM = 5;

const animateFace = (points: NormalizedLandmarkList) => {
  let riggedFace = Face.solve(points, {
    runtime: "mediapipe",
    imageSize: { width: 400, height: 400 },
    smoothBlink: true,
  });

  if (riggedFace) {
    FACES.push(riggedFace);
    if (FACES.length > AVERAGE_NUM) FACES.shift();
    const meanFace = mean(FACES);
    setShape(meanFace);
  }
};

const mean = (faces: TFace[]) => {
  return scale(
    faces.reduce((acc, face) => {
      return add(acc, face);
    }, scale(faces[0], 0)),
    1 / faces.length
  );
};

const add = (face1: TFace, face2: TFace) => {
  return {
    head: {
      x: face1.head.x + face2.head.x,
      y: face1.head.y + face2.head.y,
      z: face1.head.z + face2.head.z,
      width: face1.head.width + face2.head.width,
      height: face1.head.height + face2.head.height,
      position: {
        x: face1.head.position.x + face2.head.position.x,
        y: face1.head.position.y + face2.head.position.y,
        z: face1.head.position.z + face2.head.position.z,
      },
      normalized: {
        x: face1.head.normalized.x + face2.head.normalized.x,
        y: face1.head.normalized.y + face2.head.normalized.y,
        z: face1.head.normalized.z + face2.head.normalized.z,
      },
      degrees: {
        x: face1.head.degrees.x + face2.head.degrees.x,
        y: face1.head.degrees.y + face2.head.degrees.y,
        z: face1.head.degrees.z + face2.head.degrees.z,
      },
    },
    eye: face1.eye,
    brow: face1.brow + face2.brow,
    pupil: {
      x: face1.pupil.x + face2.pupil.x,
      y: face1.pupil.y + face2.pupil.y,
    },
    mouth: {
      x: face1.mouth.x + face2.mouth.x,
      y: face1.mouth.y + face2.mouth.y,
      shape: {
        A: face1.mouth.shape.A,
        E: face1.mouth.shape.E,
        I: face1.mouth.shape.I,
        O: face1.mouth.shape.O,
        U: face1.mouth.shape.U,
      },
    },
  } as TFace;
};

const scale = (face: TFace, scale: number) => {
  return {
    head: {
      x: face.head.x * scale,
      y: face.head.y * scale,
      z: face.head.z * scale,
      width: face.head.width * scale,
      height: face.head.height * scale,
      position: {
        x: face.head.position.x * scale,
        y: face.head.position.y * scale,
        z: face.head.position.z * scale,
      },
      normalized: {
        x: face.head.normalized.x * scale,
        y: face.head.normalized.y * scale,
        z: face.head.normalized.z * scale,
      },
      degrees: {
        x: face.head.degrees.x * scale,
        y: face.head.degrees.y * scale,
        z: face.head.degrees.z * scale,
      },
    },
    eye: face.eye,
    brow: face.brow * scale,
    pupil: {
      x: face.pupil.x * scale,
      y: face.pupil.y * scale,
    },
    mouth: {
      x: face.mouth.x * scale,
      y: face.mouth.y * scale,
      shape: face.mouth.shape,
    },
  } as TFace;
};

export default animateFace;
