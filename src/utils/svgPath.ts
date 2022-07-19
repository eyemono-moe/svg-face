type Path = {
  command: string;
  args: number[];
}[];

const ARG_LENGTH = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0,
};

const SEGMENT_REGEXP = /([astvzqmhlc])([^astvzqmhlc]*)/gi;

const NUMBER_REGEXP = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;

class SvgPath {
  public path: Path;

  constructor(path: string | Path) {
    if (typeof path === "string") {
      this.path = SvgPath.strToPath(path);
    } else {
      this.path = path;
    }
  }

  static strToPath = (pathString: string) => {
    var data: Path = [];
    Array.from(pathString.matchAll(SEGMENT_REGEXP)).forEach((match) => {
      let command = match[1];
      let type = command.toLowerCase();
      const args = this.parseValues(match[2]);
      // @ts-ignore
      const length = type in ARG_LENGTH ? ARG_LENGTH[type] : args.length;

      if (type === "m" && args.length > 2) {
        data.push({ command: "M", args: args.splice(0, 2) });
        type = "l";
        command = command === "m" ? "L" : "l";
      }

      if (args.length === length) {
        data.push({ command, args });
      } else {
        throw new Error(
          `Invalid path data: "${match[0]}", command "${command}" has ${length} args, got ${args.length}`
        );
      }
    });
    return data;
  };

  static pathToStr = (path: Path) => {
    return path
      .map((segment) => {
        let command = segment.command;
        let args = segment.args;
        let str = command;
        args.forEach((arg) => {
          str += " " + arg;
        });
        return str;
      })
      .join("");
  };

  str = () => SvgPath.pathToStr(this.path);

  static parseValues = (args: string) => {
    var numbers = args.match(NUMBER_REGEXP);
    return numbers ? numbers.map(Number) : [];
  };

  static add(svgPath1: SvgPath, svgPath2: SvgPath) {
    let path: Path = [];

    if (svgPath1.path.length !== svgPath2.path.length) {
      throw new Error("Paths must be the same length");
    }
    for (let i = 0; i < svgPath1.path.length; i++) {
      if (svgPath1.path[i].command !== svgPath2.path[i].command) {
        throw new Error("Paths must be the same type");
      }
      path.push({
        command: svgPath1.path[i].command,
        args: svgPath1.path[i].args.map((a, j) => a + svgPath2.path[i].args[j]),
      });
    }
    return new SvgPath(path);
  }

  add = (svgPath: SvgPath) => {
    return SvgPath.add(this, svgPath);
  };

  static scale(svgPath: SvgPath, scale: number) {
    let path: Path = [];
    for (let i = 0; i < svgPath.path.length; i++) {
      path.push({
        command: svgPath.path[i].command,
        args: svgPath.path[i].args.map((a) => a * scale),
      });
    }
    return new SvgPath(path);
  }

  scale = (scale: number) => {
    return SvgPath.scale(this, scale);
  };
}

export default SvgPath;
