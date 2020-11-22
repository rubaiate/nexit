import React from "react";
import { Svg, Rect } from "react-native-svg";

import { Station, Alignment } from "../models/ModelTypes";
import Gate from "./Gate";
import AccessPoint from "./access-points/AccessPoint";

interface Props {
  x: number;
  y: number;
  station: Station;
}

const Platform = (props: Props) => {
  const { x, y, station } = props;
  const height = 450;
  const platformLength = 900;

  const gateCount = 12;
  const gateWidth = 65;
  const gap = (platformLength - gateWidth * gateCount) / gateCount;
  const init = x + gap / 2;

  const gatePos = (
    gateIndex: number,
    xOffset: number,
    gateAlignment: Alignment
  ) => {
    const basePos = init + (gateWidth + gap) * gateIndex + xOffset;
    switch (gateAlignment) {
      case Alignment.Start:
        return basePos;
      case Alignment.End:
        return basePos + gateWidth;
      default:
        return basePos + gateWidth / 2;
    }
  };

  const gates = (gateY: number) => {
    const gateData = [];
    for (let idx = 0; idx < gateCount; idx++) {
      gateData.push(
        <Gate
          key={idx}
          x={gatePos(idx, 0, 0)}
          y={gateY}
          width={gateWidth}
          height={60}
        />
      );
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
      {station.accessPoints.map((ap, index) => (
        <AccessPoint
          key={index}
          {...ap}
          x={gatePos(ap.baseGate, ap.xOffset, ap.baseGateAlign)}
          width={100}
          height={100}
        />
      ))}
    </Svg>
  );
};
export default Platform;
