import React from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import AppFooter from "../components/AppFooter";
import PointUsedMessageBox from "../components/PointUsedMessageBox";
import BackButton from "../components/BackButton";

export default function PointUsedScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <PointUsedMessageBox />
      <BackButton />
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
