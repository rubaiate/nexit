import React from "react";
import { Rect } from "react-native-svg";
interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const Gate = (props: Props) => {
  const { x, y, height, width } = props;
  return (
    <Rect
      x={x}
      y={y - height / 2}
      width={width}
      height={height}
      stroke="black"
      strokeWidth="1"
      fill="#173F5F"
    />
  );
};
