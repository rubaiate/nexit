import { ReactElement, ReactNode } from "react";
import { AccessPointProps } from "./AccessPointTypes";
import React from "react";

import Escalator from "./Escalator";
import Lift from "./Lift";
import Staircase from "./Staircase";
import { G } from "react-native-svg";
import { Alignment } from "../../models/ModelTypes";

const accessPoints: { [key: string]: any } = {
  escalator: Escalator,
  lift: Lift,
  staircase: Staircase,
};

const AccessPoint = (props: AccessPointProps) => {
  const { x, y, width, apAlign, type } = props;
  const Element = accessPoints[type];

  let xPos;
  switch (apAlign) {
    case Alignment.End:
      xPos = x - width;
      break;
    case Alignment.Mid:
      xPos = x - width / 2;
      break;
    default:
      xPos = x;
  }

  if (Element) {
    return (
      <G x={xPos} y={y}>
        <Element {...props} />
      </G>
    );
  }

  return <div>Invalid</div>;
};

export default AccessPoint;
