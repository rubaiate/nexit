import React from "react";
import Svg, { G, Path } from "react-native-svg";
import RoundedRecatSvg from "../components/RoundedRectSvg";
interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default (props: Props) => {
  const { x, y, width, height } = props;
  return (
    <G x={x} y={y}>
      <RoundedRecatSvg {...props} r={10} stroke="black" fill="white" />
      <Svg
        viewBox="0 0 512.004 512.004"
        width={width}
        height={height}
        fill="black"
        stroke="black"
      >
        <Path d="M364.957 107.108v34.861h15.057v62.005H268.09v34.861h15.058v62.006H171.223v34.862h15.059v62.005H74.356v34.861h15.059v79.435h34.861v-79.435h96.867v-96.866h96.866v-96.868h96.867v-96.866h79.436v-34.861zM17.69 321.282L338.97.002l24.651 24.65-321.28 321.28z" />
      </Svg>
    </G>
  );
};
