import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import {
  FACEMESH_TESSELATION,
  NormalizedLandmarkList,
} from "@mediapipe/face_mesh";

const drawFaceMesh = (
  points: NormalizedLandmarkList,
  canvas: HTMLCanvasElement,
  option?: {
    width?: number;
    height?: number;
    lineColor?: string;
    pupilsColor?: string;
  }
) => {
  canvas.width = option?.width ?? 640;
  canvas.height = option?.height ?? 480;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get canvas context");
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnectors(ctx, points, FACEMESH_TESSELATION, {
    color: option?.lineColor ?? "#C0C0C070",
    lineWidth: 1,
  });
  if (points && points.length === 478) {
    //draw pupils
    drawLandmarks(ctx, [points[468], points[468 + 5]], {
      color: option?.pupilsColor ?? "#C0C0C0",
      lineWidth: 2,
    });
  }
};

export default drawFaceMesh;
