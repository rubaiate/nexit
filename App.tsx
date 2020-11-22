import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { Station, AccessPoint, Alignment } from "./models/ModelTypes";
import TrainLine from "./service/TrainLine";
import Platform from "./platform/Platform";
import { Picker } from "@react-native-picker/picker";
import TrainSystem from "./service/TrainSystem";

export default function App() {
  const lift: AccessPoint = {
    type: "lift",
    baseGate: 5,
    baseGateAlign: Alignment.Start,
    apAlign: Alignment.End,
    xOffset: 0,
    y: 100,
    accessDirection: 0,
  };

  const kembangan: Station = {
    name: "Kembangan",
    code: "EW13",
    lat: 2343,
    lon: 34234,
    stationIndex: 3,
    accessPoints: [lift],
  };

  const bedok: Station = {
    name: "Bedok",
    code: "EW12",
    lat: 2343,
    lon: 34234,
    stationIndex: 2,
    accessPoints: [],
  };

  const trainLine = new TrainLine("East West", "EW", 24);
  trainLine.addStation(kembangan);
  trainLine.addStation(bedok);

  const trainSystem = new TrainSystem();
  trainSystem.addTrainLine(trainLine);

  return (
    <View style={styles.container}>
      <Picker style={{ width: 200 }}>
        {trainSystem.trainLines.map((line) => (
          <Picker.Item
            key={line.prefix}
            value={line.prefix}
            label={line.name}
          />
        ))}
      </Picker>
      <Picker style={{ width: 200 }}>
        {trainLine.getStationList().map((station) => (
          <Picker.Item
            key={station.code}
            value={station.code}
            label={station.name}
          />
        ))}
      </Picker>
      <View style={{ backgroundColor: "white", width: "100%" }}>
        <Platform x={70} y={20} station={kembangan} />
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
