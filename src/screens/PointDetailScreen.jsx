import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppBar from "../components/AppBar";
import AppFooter from "../components/AppFooter";
import SectionTitle from "../components/SectionTitle";
import UsablePoint from "../components/UsablePoint";
import PointDetail from "../components/PointDetail";

export default function PointDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <ScrollView style={styles.point_detail_box}>
        <SectionTitle />
        <UsablePoint />
        <PointDetail />
      </ScrollView>
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
  point_detail_box: {
    width: "90%",
    height: "75%",
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
});
