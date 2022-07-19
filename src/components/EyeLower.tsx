import { Component } from "solid-js";
import BlendSvg from "../utils/blendSvg";
import SvgPath from "../utils/svgPath";

const EyeLower: Component<{
  pupil: { x: number; y: number };
  open: number;
}> = (props) => {
  const eyeWhiteOpened = new SvgPath(
    "M280 232C279 242.5 275.313 250.59 264 256C241 267 216 245.5 216 228C216 223.5 227.148 213.055 247.5 206C285 193 281.612 215.077 280 232Z"
  );
  const eyeWhiteClosed = new SvgPath(
    "M280 232C275 241.5 267.971 247 258.5 250.5C239.5 257.522 224 252 218.5 250.5C225 251 240.5 252 256.5 246.5C271.778 241.248 275.5 236.5 280 232Z"
  );
  const eyeWhiteBlend = new BlendSvg([eyeWhiteOpened, eyeWhiteClosed]);

  const shadowOpened = new SvgPath(
    "M288 193.5C247.5 193.5 233 197 207 223.5C207 232.5 217 246 224 250C237 224 274 212 288 212C288 199.5 288 199.424 288 193.5Z"
  );
  const shadowClosed = new SvgPath(
    "M288 193.5C247.5 193.5 233 197 207 223.5C207 232.5 211.5 246.5 218.5 250.5C239 255 267 250.5 280 232C280 219.5 288 199.424 288 193.5Z"
  );
  const shadowBlend = new BlendSvg([shadowOpened, shadowClosed]);

  const eyelashOpened = new SvgPath(
    "M277 245C271.5 253 255 262 239 257C239 265 277 263.5 277 245Z"
  );
  const eyelashClosed = new SvgPath(
    "M275.5 239.5C269.5 245 252.5 254 237 254C237 262 275.5 258 275.5 239.5Z"
  );
  const eyelashBlend = new BlendSvg([eyelashOpened, eyelashClosed]);

  return (
    <>
      <path
        d={eyeWhiteBlend.liner([props.open, 1 - props.open]).str()}
        fill="white"
      />
      <mask
        id="mask2_0_1"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="216"
        y="202"
        width="65"
        height="58"
      >
        <path
          d={eyeWhiteBlend.liner([props.open, 1 - props.open]).str()}
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_0_1)">
        <g
          transform={`rotate(-17.12 250 225) translate(${-props.pupil.x * 8} ${
            props.pupil.y * 5
          })`}
        >
          <path
            d="M265.892 225C266.917 240 260.582 251 250 251C239.418 251 233.083 240 234.108 225C235.133 210 241.223 199 250 199C258.777 199 264.867 210 265.892 225Z"
            fill="#551155"
          />
          <path
            d="M265 224.758C265 237.6 259.828 247 250 247C240.172 247 235 237.6 235 224.758C235 209.593 242.759 201 250 201C257.241 201 265 209.593 265 224.758Z"
            fill="#EE2266"
          />
          <g
            transform={`translate(${-props.pupil.x * 2} ${props.pupil.y * 2})`}
          >
            <path
              d="M259.849 221C260.875 230.892 256.558 239 250 239C243.442 239 239.125 230.892 240.151 221C241.187 211 246.371 206 250 206C253.629 206 258.813 211 259.849 221Z"
              fill="#551155"
            />
            <path
              d="M258.94 221.5C259.466 229 256.556 235 250 235C243.444 235 240.534 229 241.06 221.5C241.586 214 245.267 208 250 208C254.733 208 258.414 214 258.94 221.5Z"
              fill="#EE2266"
            />
          </g>
        </g>
        <path
          d={eyelashBlend.liner([props.open, 1 - props.open]).str()}
          fill="#661133"
        />
        <g style="mix-blend-mode:multiply">
          <path
            d={shadowBlend.liner([props.open, 1 - props.open]).str()}
            fill="#D5D5FF"
          />
        </g>
      </g>
    </>
  );
};

export default EyeLower;
