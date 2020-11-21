import React from "react";
import { Svg, Rect, SvgUri } from "react-native-svg";

import Gate from "./Gate";
import Lift from "./Lift";
import Escalator from "./Escalator";
import Staircase from "./Staircase";

interface Props {
  x: number;
  y: number;
}

const Platform = (props: Props) => {
  const { x, y } = props;
  const height = 450;
  const platformLength = 900;

  const gates = (gateY: number) => {
    const gateWidth = 65;

    const gateCount = 12;
    const gap = (platformLength - gateWidth * gateCount) / gateCount;
    const startGap = gap / 2;
    let gatePos = x + startGap;

    const gateData = [];
    for (let idx = 0; idx < gateCount; idx++) {
      gateData.push(
        <Gate key={idx} x={gatePos} y={gateY} width={gateWidth} height={60} />
      );
      gatePos += gateWidth + gap;
    }
    return gateData;
  };

  return (
    <Svg height="53%" width="100%" viewBox="0 0 1000 500">
      <Rect
        x={x}
        y={y}
        width={platformLength}
        height={height}
        stroke="black"
        strokeWidth="2"
        fill="#3CAEA3"
      />
      {gates(y)}
      {gates(y + height)}
      <Lift x={300} y={250} width={100} height={100} />
      <Escalator x={600} y={250} width={100} height={100} />
      <Staircase x={600} y={100} width={100} height={100} />
    </Svg>
  );
};
export default Platform;
