import SvgPath from "./svgPath";

class BlendSvg {
  private svgPaths: SvgPath[];

  constructor(svgPaths: SvgPath[]) {
    this.svgPaths = svgPaths;
  }

  liner = (weights: number[]) => {
    if (weights.length !== this.svgPaths.length) {
      throw new Error("Weights must be the same length as svgPaths");
    }
    let svgPath: SvgPath = this.svgPaths[0].scale(weights[0]);
    for (let i = 1; i < this.svgPaths.length; i++) {
      svgPath = svgPath.add(this.svgPaths[i].scale(weights[i]));
    }
    return svgPath;
  };
}

export default BlendSvg;
