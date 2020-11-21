import { ReactElement, ReactNode } from "react";
import { AccessPointProps } from "./AccessPointTypes";
import React from "react";

import Escalator from "./Escalator";
import Lift from "./Lift";
import Staircase from "./Staircase";

const accessPoints: { [key: string]: any } = {
  escalator: Escalator,
  lift: Lift,
  staircase: Staircase,
};

const AccessPoint = (props: AccessPointProps) => {
  const Element = accessPoints[props.type];
  if (Element) {
    return <Element {...props} />;
  }

  return <div>Invalid</div>;
};

export default AccessPoint;
