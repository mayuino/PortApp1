import React from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import SectionList from "../components/SectionList";
import AppFooter from "../components/AppFooter";

export default function SectionListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <SectionList />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
  },
});
