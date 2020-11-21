import React from "react";
import { Path } from "react-native-svg";

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
  r: number;
  stroke?: string;
  fill?: string;
  offset?: number;
}

export default (props: Props) => {
  const { x, y, width, height, r } = props;
  const { stroke, fill } = props;
  const offset = props.offset || 4;
  const hSide = width - 2 * (r - offset);
  const vSide = height - 2 * (r - offset);
  return (
    <Path
      d={`M${
        r - offset
      },${-offset} h${hSide} a${r},${r} 0 0 1 ${r},${r} v${vSide} a${r},${r} 0 0 1 ${-r},${r} h${-hSide} a${r},${r} 0 0 1 ${-r},${-r} v${-vSide} a${r},${r} 0 0 1 ${r},${-r}`}
      stroke={stroke}
      fill={fill}
    />
  );
};
