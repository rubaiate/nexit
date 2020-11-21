import React from "react";
import Svg, { Path, G } from "react-native-svg";
import RoundedRecatSvg from "../components/RoundedRectSvg";
interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
}

function SvgComponent(props: Props) {
  const { x, y, width, height } = props;
  return (
    <G x={x} y={y}>
      <RoundedRecatSvg {...props} r={10} stroke="black" fill="white" />
      <Svg viewBox="0 0 515 400" width={width} height={height}>
        <Path
          d="M218.2 69.69c18.75 0 33.92-15.17 33.9-33.9.02-18.7-15.15-33.88-33.9-33.9-18.68.03-33.85 15.2-33.9 33.9.05 18.73 15.22 33.9 33.9 33.9"
          fill="black"
          stroke="black"
        />
        <Path
          d="M251.8 130.7v-21.3c-.02-45.55-67.11-45.05-67.1 0v87.1h.1l-63.4 63.4c-5.95 5.93-6.68 6.19-18.4 6.2H64.2c-38.98-.01-62.37 35.04-62.4 64.8.03 29.66 23.42 67.22 65.9 67.2 0 0 52.72.03 69 0 16.31.03 36.07-6.2 52.4-21.5L391.2 175c4.31-3.8 6.71-5 14.1-5h50c23.98 0 57.98-27.22 58-66.5-.03-38.82-34.28-64.72-60-64.8h-78.8c-16.33-.01-37.28 6.65-49.8 19.2l-72.9 72.8"
          fill="black"
          stroke="black"
        />
        <Path
          d="M379.2 72.19h70.9c17.22.04 28.82 19.32 28.8 30.8.03 11.53-8.21 32.99-29.3 33H407c-18.08-.01-26.08 2.53-36.5 12.9l-203.6 203.7c-8.28 8.25-18.74 11.52-32.2 11.5H67.6c-17.28.02-32.48-14.58-32.5-33.7.02-19.22 14.52-29.96 29.5-30h46.1c13.42.04 22.25-3.79 29.9-11.5l207.1-207.1c8.56-8.5 16.98-9.56 31.5-9.6"
          fill="#fff"
        />
      </Svg>
    </G>
  );
}

export default SvgComponent;
