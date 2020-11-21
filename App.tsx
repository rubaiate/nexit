import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Platform from "./platform/Platform";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", width: "100%" }}>
        <Platform x={70} y={20} />
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
