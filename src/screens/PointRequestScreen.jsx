import React from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import AppFooter from "../components/AppFooter";
import PointRequestBox from "../components/PointRequestBox";
import PointConfirmBox from "../components/PointConfirmBox";

export default function PointRequestScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <PointRequestBox />
      <PointConfirmBox />

      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
