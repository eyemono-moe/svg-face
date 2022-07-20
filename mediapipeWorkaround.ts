import path from "path";
import fs from "fs";

export const mediapipeWorkaround = () => {
  return {
    name: "mediapipeWorkaround",
    load(id: string) {
      if (path.basename(id) === "face_mesh.js") {
        let code = fs.readFileSync(id, "utf-8");
        code +=
          "exports.FaceMesh = FaceMesh;exports.FACEMESH_TESSELATION = FACEMESH_TESSELATION;";
        return { code };
      } else if (path.basename(id) === "camera_utils.js") {
        let code = fs.readFileSync(id, "utf-8");
        code += "exports.Camera = Camera;";
        return { code };
      } else if (path.basename(id) === "drawing_utils.js") {
        let code = fs.readFileSync(id, "utf-8");
        code +=
          "exports.drawConnectors = drawConnectors;exports.drawLandmarks = drawLandmarks;";
        return { code };
      } else {
        return null;
      }
    },
  };
};
