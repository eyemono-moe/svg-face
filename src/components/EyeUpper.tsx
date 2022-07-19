import { Component } from "solid-js";
import BlendSvg from "../utils/blendSvg";
import SvgPath from "../utils/svgPath";

const EyeUpper: Component<{ open: number }> = (props) => {
  const eyelashOpened = new SvgPath(
    "M207 236C212 222 228.5 210.315 244.5 203.5C260.935 196.5 277 197.5 286.5 200C284 206 286 214 280 232C280.5 225 279 210 276 207.5C272.741 204.784 252.899 210.218 248 212C237 216 218 225.5 207 236Z"
  );
  const eyelashClosed = new SvgPath(
    "M212 249.5C223.5 248.5 241.071 249.5 256.5 243.5C270.5 238.056 279.5 227.5 288 213C285.5 223 282.5 233.262 275 242.222C277.36 238.42 279 236 281 229.5C279 236 277 245.61 259.5 252.5C242 259.394 227 255 212 249.5Z"
  );
  const eyelashBlend = new BlendSvg([eyelashOpened, eyelashClosed]);

  const eyeshadowOpened = new SvgPath(
    "M211 225C217.5 218 225 212 234 207C224 210 215 216 211 225Z"
  );
  const eyeshadowClosed = new SvgPath(
    "M212.5 229.5C220.5 226 230 221.5 238.5 216C228.5 219.5 219.5 224 212.5 229.5Z"
  );
  const eyeshadowBlend = new BlendSvg([eyeshadowOpened, eyeshadowClosed]);

  return (
    <g id="eye-upper">
      <path
        d={eyelashBlend.liner([props.open, 1 - props.open]).str()}
        fill="#661133"
      />
      <path
        d={eyeshadowBlend.liner([props.open, 1 - props.open]).str()}
        fill="#661133"
      />
    </g>
  );
};

export default EyeUpper;
