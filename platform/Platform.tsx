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

  const gateCount = 24;
  const displayGridSize = 6;
  const gateWidth = 100;
  const gap = (platformLength - gateWidth * displayGridSize) / displayGridSize;
  const initX = x + gap / 2;

  const gatePos = (
    gateIndex: number,
    xOffset: number,
    gateAlignment: Alignment
  ) => {
    const displayIndex = Math.floor((gateIndex * displayGridSize) / gateCount);

    const basePos = initX + (gateWidth + gap) * displayIndex + xOffset;

    switch (gateAlignment) {
      case Alignment.Start:
        return basePos;
      case Alignment.End:
        return basePos + gateWidth;
      default:
        return basePos + gateWidth / 2;
    }
  };

  const gates = (gateY: number, visibleGates: number[]) => {
    return visibleGates.map((gateIdx) => (
      <Gate
        key={gateIdx}
        x={gatePos(gateIdx, 0, 0)}
        y={gateY}
        width={gateWidth}
        height={60}
      />
    ));
  };

  const basePoints = station.accessPoints.map((ap) => ap.baseGate);
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
      {gates(y, [0, 23, ...basePoints])}
      {gates(y + height, [0, 23])}
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
