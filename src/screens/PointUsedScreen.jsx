import React from "react";
import { View, StyleSheet } from "react-native";

import AppFooter from "../components/AppFooter";
import PointUsedMessageBox from "../components/PointUsedMessageBox";

export default function PointUsedScreen() {
  return (
    <View style={styles.container}>
      <PointUsedMessageBox />
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
