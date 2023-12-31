import React from "react";
import { View, StyleSheet } from "react-native";

import AppFooter from "../components/AppFooter";
import PointConfirmBox from "../components/PointConfirmBox";

export default function PointConfirmScreen() {
  return (
    <View style={styles.container}>
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
