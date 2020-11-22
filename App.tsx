import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { TrainLine, Station, AccessPoint } from "./models/ModelTypes";
import Platform from "./platform/Platform";

export default function App() {
  const trainLine: TrainLine = {
    name: "East West Line",
    prefix: "EW",
    gateCount: 10,
    stationCount: 10,
  };

  const lift: AccessPoint = {
    type: "lift",
    baseGate: 3,
    baseGateAlign: 2,
    apAlign: 2,
    xOffset: 0,
    y: 100,
    accessDirection: 0,
  };

  const station: Station = {
    name: "Kembangan",
    code: "EW13",
    lat: 2343,
    lon: 34234,
    stationIndex: 3,
    accessPoints: [lift],
    trainLine: trainLine,
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", width: "100%" }}>
        <Platform x={70} y={20} station={station} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
